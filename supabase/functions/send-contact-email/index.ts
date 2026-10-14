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

async function getSetting(supabase: any, key: string): Promise<string | null> {
  try {
    const envVal = Deno.env.get(key.toUpperCase());
    if (envVal) return envVal;

    const { data, error } = await supabase
      .from('system_settings')
      .select('value')
      .eq('key', key)
      .maybeSingle();

    if (!error && data?.value) {
      return data.value;
    }
  } catch (err) {
    console.warn(`Erro ao buscar config ${key}:`, err);
  }
  return null;
}

function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  dateStr: string;
}) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Novo Contato — Formas & Efeito</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f5f1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1917;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f6f5f1; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e7e5e4; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0c1a24; padding: 32px 28px; text-align: left;">
              <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #ea580c; font-weight: 700; display: block; margin-bottom: 6px;">
                FORMAS &amp; EFEITO
              </span>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.3;">
                Novo Contato via Site
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 28px;">
              <p style="margin-top: 0; font-size: 14px; color: #57534e; line-height: 1.5;">
                Novo contato via site:
              </p>

              <table role="presentation" width="100%" style="border-collapse: collapse; margin-top: 16px; margin-bottom: 24px;">
                <tr style="border-bottom: 1px solid #f5f5f4;">
                  <td style="padding: 10px 0; font-size: 13px; color: #78716c; font-weight: 600; width: 140px;">Nome / Empresa:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #1c1917; font-weight: 700;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f5f5f4;">
                  <td style="padding: 10px 0; font-size: 13px; color: #78716c; font-weight: 600;">E-mail:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #ea580c; font-weight: 600;">
                    <a href="mailto:${data.email}" style="color: #ea580c; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f5f5f4;">
                  <td style="padding: 10px 0; font-size: 13px; color: #78716c; font-weight: 600;">Telefone:</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #1c1917; font-weight: 600;">
                    <a href="tel:${data.phone.replace(/[^0-9]/g, '')}" style="color: #1c1917; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f5f5f4;">
                  <td style="padding: 10px 0; font-size: 13px; color: #78716c; font-weight: 600;">Data do Envio:</td>
                  <td style="padding: 10px 0; font-size: 13px; color: #57534e;">${data.dateStr}</td>
                </tr>
              </table>

              <!-- Message box -->
              <div style="background-color: #fafaf9; border-left: 4px solid #ea580c; padding: 16px; border-radius: 4px; margin-top: 12px;">
                <div style="font-size: 12px; font-weight: 700; color: #44403c; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Resumo do Projeto / Localização:
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #292524; white-space: pre-wrap;">${data.message}</div>
              </div>

              <!-- Action buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  <td style="border-radius: 6px; background-color: #ea580c;">
                    <a href="mailto:${data.email}?subject=Re:%20Solicita%C3%A7%C3%A3o%20de%20Projeto%20%E2%80%94%20Formas%20%26%20Efeito" target="_blank" style="padding: 12px 24px; font-size: 13px; color: #ffffff; text-decoration: none; font-weight: 700; display: inline-block;">
                      Responder por E-mail
                    </a>
                  </td>
                  <td style="padding-left: 12px;">
                    <a href="https://wa.me/55${data.phone.replace(/[^0-9]/g, '')}" target="_blank" style="padding: 12px 20px; font-size: 13px; color: #0c1a24; background-color: #f5f5f4; border: 1px solid #d6d3d1; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">
                      Abrir no WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f4; padding: 18px 28px; text-align: center; border-top: 1px solid #e7e5e4;">
              <span style="font-size: 12px; color: #78716c; display: block;">
                Este e-mail foi gerado automaticamente pelo formulário do site <strong>formasefeito.com.br</strong>
              </span>
              <span style="font-size: 11px; color: #a8a29e; display: block; margin-top: 4px;">
                Registro salvo no banco de dados com autorização LGPD.
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

Deno.serve(async (req: Request) => {
  const headers = getCorsHeaders(req);

  // Fast preflight response
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Método não permitido. Use POST.' }),
      { status: 405, headers }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, demandType, message, lgpdConsent } = body;

    // 1. Validação básica de campos
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({
          error: 'Campos obrigatórios ausentes (nome, e-mail, telefone, mensagem).'
        }),
        { status: 400, headers }
      );
    }

    // 2. Inicializa cliente Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('Supabase credentials missing in Edge Function environment.');
      return new Response(
        JSON.stringify({ error: 'Configuração do servidor Supabase incompleta.' }),
        { status: 500, headers }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // 3. Salva no banco de dados primeiro (garante que NUNCA perde o contato)
    const { data: savedMessage, error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: String(name).trim(),
          email: String(email).trim(),
          phone: String(phone).trim(),
          demand_type: demandType ? String(demandType).trim() : null,
          message: String(message).trim(),
          lgpd_consent: Boolean(lgpdConsent),
          email_sent: false
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Erro ao salvar mensagem no banco:', dbError);
    }

    const messageId = savedMessage?.id || null;

    // 4. Busca chaves e configurações do Resend
    const resendApiKey = await getSetting(supabase, 'resend_api_key');
    const toEmail = (await getSetting(supabase, 'contact_to_email')) || 'formasefeito@formaseefeito.com.br';
    const fromEmail = (await getSetting(supabase, 'resend_from_email')) || 'Formas & Efeito <onboarding@resend.dev>';

    let emailSent = false;
    let emailId = null;
    let emailError = null;

    // 5. Se o Resend estiver configurado, envia o e-mail
    if (resendApiKey) {
      const dateStr = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      const html = buildEmailHtml({
        name,
        email,
        phone,
        message,
        dateStr
      });

      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email,
            subject: `[Site Formas & Efeito] Novo contato: ${name}`,
            html
          })
        });

        const resendData = await resendRes.json();

        if (resendRes.ok) {
          emailSent = true;
          emailId = resendData.id || null;
        } else {
          emailError = JSON.stringify(resendData);
          console.error('Erro ao disparar e-mail via Resend:', emailError);
        }
      } catch (err) {
        emailError = err instanceof Error ? err.message : String(err);
        console.error('Exceção ao disparar e-mail via Resend:', emailError);
      }

      // Atualiza status do e-mail no registro do banco
      if (messageId) {
        await supabase
          .from('contact_messages')
          .update({
            email_sent: emailSent,
            email_id: emailId,
            email_error: emailError
          })
          .eq('id', messageId);
      }
    } else {
      console.info('RESEND_API_KEY não configurada. O contato foi salvo no banco com segurança.');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Solicitação registrada com sucesso! Retornaremos em breve.',
        savedToDatabase: !dbError,
        emailDispatched: emailSent,
        leadId: messageId
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error('Erro interno na Edge Function de contato:', err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : 'Erro interno ao processar contato.'
      }),
      { status: 500, headers }
    );
  }
});
