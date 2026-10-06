import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:3000',
  'https://formasefeito.com.br',
  'https://www.formasefeito.com.br'
];

function getCorsHeaders(request: Request) {
  const origin = request.headers.get('Origin') || '';
  const isAllowed = !origin || allowedOrigins.includes(origin) || origin.includes('localhost') || origin.endsWith('.vercel.app');
  const allowOrigin = isAllowed ? (origin || '*') : '*';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };
}

async function getInstagramToken(): Promise<string | null> {
  // 1. Prioridade: Variável de ambiente INSTAGRAM_TOKEN
  const envToken = Deno.env.get('INSTAGRAM_TOKEN');
  if (envToken) return envToken;

  // 2. Fallback: Tabela system_settings do Supabase (idêntico ao projeto Magnólias)
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (supabaseUrl && serviceRoleKey) {
      const supabase = createClient(supabaseUrl, serviceRoleKey);
      const { data, error } = await supabase
        .from('system_settings')
        .select('value')
        .eq('key', 'instagram_token')
        .single();

      if (!error && data?.value) {
        return data.value;
      }
    }
  } catch (err) {
    console.warn('Erro ao consultar system_settings:', err);
  }

  return null;
}

Deno.serve(async (req: Request) => {
  const headers = getCorsHeaders(req);

  // Resposta rápida para Preflight CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers });
  }

  try {
    const token = await getInstagramToken();

    if (!token) {
      return new Response(
        JSON.stringify({
          error: 'INSTAGRAM_TOKEN não configurado.',
          message: 'Configure o segredo INSTAGRAM_TOKEN no Supabase ou adicione na tabela system_settings com a chave instagram_token.'
        }),
        { status: 500, headers }
      );
    }

    const url = new URL(req.url);
    const postIdFromQuery = url.searchParams.get('postId');

    let bodyPostId: string | null = null;
    if (req.method === 'POST') {
      try {
        const body = await req.json();
        bodyPostId = body?.postId || null;
      } catch {
        // Ignora corpo se não for JSON válido
      }
    }

    const postId = postIdFromQuery || bodyPostId;

    const endpoint = postId
      ? `https://graph.instagram.com/${postId}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${token}`
      : `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=9&access_token=${token}`;

    const instaResponse = await fetch(endpoint);

    if (!instaResponse.ok) {
      const errorText = await instaResponse.text();
      console.error('Erro na API do Instagram:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Falha ao consultar a Graph API do Instagram.',
          details: errorText
        }),
        { status: instaResponse.status, headers }
      );
    }

    const result = await instaResponse.json();

    return new Response(
      JSON.stringify({ data: result.data || [] }),
      {
        status: 200,
        headers: {
          ...headers,
          'Cache-Control': 'public, max-age=300, s-maxage=600'
        }
      }
    );
  } catch (error) {
    console.error('Erro interno na Edge Function:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Erro interno do servidor'
      }),
      { status: 500, headers }
    );
  }
});
