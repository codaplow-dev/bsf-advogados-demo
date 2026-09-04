# BSF Advogados

## Executar

```bash
npm install
npm run dev
```

## Validar e publicar

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Deploy funciona diretamente na Vercel como projeto Next.js.

## Personalização

- Dados do escritório, endereço e telefone: `src/config/site.ts`.
- Áreas: `src/data/practice-areas.ts`.
- Profissionais e imagens: `src/data/professionals.ts`.
- Conteúdos: `src/data/articles.ts`.
- FAQ: `src/data/faq.ts`.
- Imagens principais: URLs no componente de seções; substituir por assets aprovados quando disponíveis.
