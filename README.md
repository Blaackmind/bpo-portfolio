# bpo-portfolio

Pagina de apresentacao pessoal de Amanda Kelory (Full Stack e QA), responsiva,
em HTML, CSS e JavaScript. Reune os seis projetos do portfolio, skills,
trajetoria e contato. Pronta para publicacao no GitHub Pages.

## Estrutura

```
bpo-portfolio/
  index.html          estrutura e conteudo da pagina
  styles.css          estilos (tema grid preto e branco)
  site.js             interacoes: typing, filtros, reveal, copiar e-mail
  tweaks.jsx          painel de edicao ao vivo (React)
  tweaks-panel.jsx    componentes do painel de edicao
  retrato.png         imagem do retrato exibida no topo
```

## Secoes

Hero, dev e QA, sobre, skills, projetos (com filtros), trajetoria, depoimentos e
contato.

## Como executar

Abra o arquivo index.html no navegador, ou sirva localmente:

```bash
python -m http.server 8000
```

Depois acesse http://localhost:8000.

## Personalizar

- O retrato e o arquivo retrato.png na raiz; troque o arquivo para mudar a foto.
- Os projetos ficam na secao com id projetos, no index.html.
- As secoes de trajetoria e depoimentos contem campos a preencher com dados
  reais.
- O painel de tweaks permite experimentar estilo, fonte, cor de acento e grade.

## Publicar no GitHub Pages

1. Suba o conteudo para um repositorio.
2. Em Settings, depois Pages, selecione a branch main e a pasta raiz.
3. A pagina ficara disponivel em https://Blaackmind.github.io/bpo-portfolio/.

## Tecnologias

HTML, CSS, JavaScript, React (apenas no painel de edicao).
