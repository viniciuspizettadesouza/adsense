# Portugal Prático

Guias claros e verificados para tratar de documentos e encontrar serviços públicos em Portugal. O projeto começou como um diretório de links e foi reformulado como um produto editorial orientado à utilidade real.

## Conteúdo publicado

- [Como pedir o NIF em Portugal](http://localhost:3000/guias/nif)
- [Como pedir o NISS em Portugal](http://localhost:3000/guias/niss)
- [AIMA: encontre o serviço certo](http://localhost:3000/guias/aima)

Cada guia inclui data de verificação, fontes oficiais, passos, alertas, erros comuns e perguntas frequentes.

## Desenvolvimento

Requisitos: Node.js 18.18 ou superior e pnpm 9.6.0.

```bash
pnpm install
pnpm dev
```

O site fica disponível em `http://localhost:3000`.

### Variáveis de ambiente

Crie `.env.local` para definir a origem usada em canonical URLs, sitemap, robots e JSON-LD:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

Sem esta variável, o desenvolvimento usa `http://localhost:3000`.

## Qualidade

```bash
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

Os testes verificam a integridade dos slugs, categorias, relacionamentos, datas e fontes, além dos limites do estado de revisão.

## Adicionar ou rever um guia

1. Edite `data/guides.ts` usando os tipos definidos em `types/content.ts`.
2. Use apenas fontes oficiais para afirmações operacionais.
3. Atualize `lastVerified` e o `checkedAt` de cada fonte para a data real da conferência.
4. Confirme links, documentos, custos, canais e exceções diretamente nas entidades responsáveis.
5. Execute todos os comandos de qualidade antes de publicar.

O estado exibido no site é calculado automaticamente:

- menos de 90 dias: atualizado;
- de 90 a 180 dias: rever em breve;
- mais de 180 dias: revisão necessária.

## Limites desta versão

O site não tem backend, contas, formulários, analytics ou publicidade. Não existe integração com Google AdSense. O conteúdo é informativo e não substitui aconselhamento jurídico, fiscal ou profissional.

## Continuidade

O estado do MVP, as próximas prioridades e um prompt para retomar o trabalho noutra sessão estão em [`docs/NEXT_STEPS.md`](docs/NEXT_STEPS.md).
