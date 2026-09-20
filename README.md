# Talita Vieira — site profissional

Versão independente para Vercel, com React, TypeScript e Vite. Inclui o site completo, 27 fotos de resultados, retrato, imagens editoriais, vídeos desktop/mobile e capas locais. Não exige login do Higgsfield, banco de dados nem chave de API.

## Publicar na Vercel
1. Em Add New → Project, importe **gestalltweb/Talita**.
2. Use a branch **main** e Root Directory **./** (raiz).
3. Framework: **Vite**; Node.js: **22.x**.
4. Install: **npm ci**; Build: **npm run build**; Output: **dist**.
5. Clique em Deploy. A configuração já está em vercel.json.

Não há variáveis obrigatórias. Ao conectar domínio próprio, configure opcionalmente SITE_URL=https://seu-dominio.com.br e publique novamente para atualizar canonical/sitemap. Sem SITE_URL, o build usa o domínio de produção informado pela Vercel.

## Desenvolvimento
Execute npm ci, npm run dev. Para validar: npm run build e npm run preview.
O build executa TypeScript e gera HTML estático com todo o conteúdo para SEO, hidratado pelo React para galeria, animações e vídeo.

## Conteúdo
- src/App.tsx: página, contatos e seção sobre Talita.
- src/components/results-context.tsx: explicações, categorias e galerias.
- src/results-assets.json: dimensões e recortes de apresentação.
- src/styles.css: estilo e responsividade.
- src/scroll-scrub-scenes.ts: hero cinematográfico.
- public/assets: todas as fotos, vídeos e capas.
- index.html: metadados e dados estruturados.

Os originais foram convertidos para WebP sem perdas. Os recortes são feitos no layout, sem modificar pele ou resultados. Algumas palavras sobrepostas ao corpo permanecem. Duas imagens com a marca Josiane Cantelli não foram incluídas enquanto a autoria/parceria não for esclarecida. As fotos editoriais geradas estão identificadas como ilustrativas.

Referência técnica: https://vercel.com/docs/frameworks/frontend/vite
