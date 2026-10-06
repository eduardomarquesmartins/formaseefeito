import re

def update_modal(filename, is_en=False):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix modal layout
    # Change max-w-3xl to max-w-4xl for a slightly wider modal if we keep side-by-side, 
    # but we are changing to full width image, so max-w-3xl or max-w-4xl is fine. Let's use max-w-4xl.
    content = content.replace("max-w-3xl bg-white", "max-w-4xl bg-white")

    # Replace grid layout with flex column for full width image
    old_grid = r'<div class="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">'
    new_grid = r'<div class="flex flex-col gap-5 sm:gap-6 items-start">'
    content = re.sub(old_grid, new_grid, content)

    # Image column
    old_img_col = r'<div class="md:col-span-6 rounded-xl overflow-hidden bg-neutral-100">'
    new_img_col = r'<div class="w-full rounded-xl overflow-hidden bg-neutral-100">'
    content = re.sub(old_img_col, new_img_col, content)

    # Image height
    old_img_tag = r'class="w-full h-48 sm:h-64 object-cover object-center"'
    new_img_tag = r'class="w-full h-56 sm:h-80 md:h-[450px] object-cover object-center"'
    content = re.sub(old_img_tag, new_img_tag, content)

    # Text column
    old_text_col = r'<div class="md:col-span-6 space-y-3">'
    new_text_col = r'<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">' # Split text into 2 columns at bottom!
    content = re.sub(old_text_col, new_text_col, content)
    
    # Wait, the text column had internal divs that we should wrap properly if we use grid.
    # Let's not use grid for text, just use full width with flex or block.
    # Actually, a 2-column grid for the text part would look awesome.
    # Let's just use block for now to keep it simple and foolproof.
    new_text_col_simple = r'<div class="w-full space-y-4">'
    content = content.replace(r'<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">', new_text_col_simple)

    # Replace "Dossiê de Projeto" static text in HTML
    if is_en:
        content = content.replace("Dossiê de Projeto", "Project Details")
    else:
        content = content.replace("Dossiê de Projeto", "Detalhes do Projeto")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

update_modal('index.html', False)
update_modal('en.html', True)
