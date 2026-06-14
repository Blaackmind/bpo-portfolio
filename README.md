# bpo-portfolio

Pagina de apresentacao pessoal, responsiva, em HTML, CSS e JavaScript puro.
Reune os seis projetos do portfolio, a stack e os contatos. Pronta para
publicacao no GitHub Pages.

## Caracteristicas

- Fundo animado em canvas com campo de estrelas.
- Efeito de digitacao no cabecalho.
- Cards de projeto gerados por JavaScript a partir de uma lista.
- Secao com outros repositorios publicos do GitHub.
- Layout responsivo, sem dependencias e sem etapa de build.

## Como executar

Abra o arquivo index.html no navegador, ou sirva localmente:

```bash
python -m http.server 8000
```

Depois acesse http://localhost:8000.

## Publicar no GitHub Pages

1. Suba o conteudo para um repositorio.
2. Em Settings, depois Pages, selecione a branch main e a pasta raiz.
3. A pagina ficara disponivel em https://Blaackmind.github.io/bpo-portfolio/.

## Personalizar

No arquivo index.html, edite o array projetos para alterar os cards, o array
outros para a lista de repositorios e as variaveis CSS em :root para as cores.

## Tecnologias

HTML, CSS, JavaScript.
