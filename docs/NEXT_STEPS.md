# Portugal Prático — plano de continuidade

Última atualização: 10 de agosto de 2026.

## Estado atual

O antigo diretório de links foi transformado no MVP editorial **Portugal Prático**.

O projeto já contém:

- homepage e identidade visual em `pt-PT`;
- categoria `documentos-e-imigracao`;
- guias completos de NIF, NISS e AIMA;
- modelo TypeScript central para categorias, guias, secções, FAQ e fontes;
- data e estado automático de revisão dos guias;
- páginas Sobre, Metodologia, Privacidade, Fontes e Estado dos guias;
- metadata, canonical, Open Graph, sitemap, robots e breadcrumbs com JSON-LD;
- dark mode, navegação responsiva e estados acessíveis de foco;
- testes de consistência editorial e dos limites de revisão;
- ausência intencional de anúncios, analytics, backend e formulários.

Validações concluídas no MVP:

```bash
pnpm test
pnpm lint
pnpm typecheck
pnpm exec prettier --check .
pnpm build
```

Todas passaram. O build gerou 17 páginas estáticas e as rotas antigas verificadas responderam com 404.

## Próxima sessão: prioridade imediata

### 1. Preparar a publicação

- Escolher e registar o domínio definitivo.
- Configurar `NEXT_PUBLIC_SITE_URL` com a origem pública, sem barra final.
- Publicar inicialmente na Vercel ou noutro alojamento compatível com Next.js 15.
- Confirmar em produção HTTPS, canonical, `robots.txt`, `sitemap.xml` e imagem Open Graph.
- Submeter o sitemap ao Google Search Console e validar a propriedade do domínio.
- Verificar as três páginas com URL Inspection e testar o JSON-LD no Rich Results Test.

Critério de conclusão: o domínio público serve todas as páginas, não existem canonical URLs com `localhost` e o sitemap foi aceite pelo Search Console.

### 2. Fazer revisão editorial humana

- Ler os três guias integralmente em telemóvel e desktop.
- Abrir cada fonte oficial e confirmar novamente canais, documentos, custos e avisos.
- Ajustar frases que possam parecer aconselhamento jurídico ou promessa de resultado.
- Confirmar que o português europeu continua claro para leitores brasileiros.
- Atualizar `lastVerified` e `checkedAt` apenas se uma nova verificação real for feita.
- Definir uma forma pública de contacto editorial antes de solicitar indexação ampla.

Critério de conclusão: cada afirmação operacional pode ser ligada a uma fonte oficial atual e não existem credenciais, experiências pessoais ou garantias inventadas.

### 3. Melhorar confiança e apresentação

- Criar favicon e identidade visual próprios, substituindo os recursos genéricos restantes.
- Rever contraste, foco, menu móvel e leitura de tabelas com teclado e leitor de ecrã.
- Executar Lighthouse nas páginas inicial, guia e categoria.
- Corrigir problemas relevantes de acessibilidade, SEO, desempenho e Core Web Vitals.
- Adicionar um canal de contacto e atualizar Sobre e Privacidade de acordo com o método escolhido.

Critério de conclusão: as páginas principais não apresentam problemas críticos no Lighthouse nem bloqueios de navegação por teclado.

## Expansão editorial

Adicionar um guia de cada vez, sem publicar páginas vazias. Ordem recomendada:

1. Como obter o número de utente do SNS.
2. Como trabalhar com recibos verdes.
3. Como funciona o IRS para quem chegou a Portugal.
4. Como trocar uma carta de condução estrangeira.
5. Como obter e usar o passe Navegante.
6. Como comprar casa em Portugal.
7. Como funciona o IMI.

Para cada novo guia:

- identificar primeiro a pergunta prática e o público;
- usar fontes oficiais primárias;
- preencher todas as secções úteis, sem texto genérico;
- registar a data real de verificação;
- relacionar apenas guias já publicados;
- atualizar ou criar a categoria correspondente somente quando houver conteúdo real;
- executar testes, lint, typecheck e build.

Evitar publicar informação financeira, fiscal, migratória ou jurídica baseada apenas em blogs, redes sociais ou memória pessoal.

## Medição e descoberta

Depois de o domínio estar indexado:

- acompanhar consultas, páginas e cobertura pelo Search Console;
- observar quais perguntas reais levam visitantes aos guias;
- melhorar títulos, introduções e secções com base nessas perguntas, sem criar conteúdo para manipular rankings;
- adicionar analytics apenas se existir uma pergunta de produto concreta que o Search Console não responda;
- antes de qualquer analytics, escolher uma solução, avaliar consentimento necessário e atualizar a página de Privacidade.

Não adicionar páginas automáticas, conteúdo gerado em massa ou categorias sem guias apenas para aumentar o número de URLs.

## AdSense: fase posterior

Não implementar publicidade antes de existirem domínio estável, tráfego orgânico inicial, conteúdo suficiente e páginas editoriais/legalmente necessárias.

Quando chegar essa fase:

1. Rever as políticas atuais do AdSense e os requisitos aplicáveis ao EEE e Reino Unido.
2. Criar e aprovar a conta e obter o publisher ID real.
3. Escolher uma plataforma de gestão de consentimento adequada, se exigida.
4. Atualizar Privacidade antes de carregar scripts publicitários.
5. Implementar configuração por variáveis de ambiente, sem IDs fictícios no código.
6. Começar com poucos espaços claramente identificados e afastados da navegação.
7. Validar desempenho, consentimento e políticas antes de aumentar a densidade.

Nunca disfarçar anúncios como conteúdo, botões ou links oficiais.

## Decisões que continuam válidas

- Marca: **Portugal Prático**.
- Idioma: português europeu acessível a brasileiros.
- Voz: neutra, verificável e sem relatos pessoais inventados.
- Conteúdo: poucas páginas completas em vez de muitas páginas superficiais.
- Diretório antigo: removido, sem redirects.
- Backend, CMS, contas, pesquisa interna e tradução: fora do escopo atual.
- AdSense e analytics: adiados até existir necessidade real e preparação adequada.
- O diretório e o repositório Git podem continuar chamados `adsense` até a marca e o domínio amadurecerem.

## Ficheiros centrais

- `data/guides.ts`: conteúdo e fontes dos guias.
- `types/content.ts`: contrato editorial.
- `lib/review-status.ts`: cálculo do estado de revisão.
- `app/guias/[slug]/page.tsx`: metadata, geração estática e JSON-LD.
- `components/templates/GuidePage.tsx`: apresentação dos guias.
- `app/sitemap.ts` e `app/robots.ts`: descoberta pelos motores de busca.
- `README.md`: instalação, comandos e processo de revisão.

## Prompt para retomar noutra sessão

Copiar e usar:

> Leia `README.md` e `docs/NEXT_STEPS.md`, inspecione o estado atual do repositório e confirme que os comandos de qualidade ainda passam. Continue o Portugal Prático pela primeira prioridade incompleta do plano, preservando as decisões editoriais registadas. Antes de alterar conteúdo operacional, valide-o em fontes oficiais atuais. Não implemente AdSense, analytics ou páginas vazias sem uma nova decisão explícita.

Antes de começar trabalho novo, executar:

```bash
git status --short
pnpm install --frozen-lockfile
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```
