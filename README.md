# Dra. Belizane Mucci — site (HTML/CSS/JS)

Versão estática (sem build, sem dependências) do site institucional da
Dra. Belizane Martins Mucci, feita para publicar rápido no GitHub Pages e
compartilhar com ela.

## Estrutura

```
index.html      página única com todas as seções
css/style.css   estilos (cores, fontes, layout responsivo)
js/main.js      menu mobile + animação de entrada ao rolar a página
img/belizane.png  foto usada no topo e na seção "Sobre"
```

## Ver localmente

Basta abrir o `index.html` no navegador. Se preferir servir por HTTP
(recomendado, evita bloqueios de alguns navegadores):

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e suba esta pasta:

   ```bash
   git init
   git add .
   git commit -m "Site da Dra. Belizane"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

2. No GitHub, vá em **Settings → Pages**, selecione a branch `main` e a
   pasta `/ (root)`, e salve.
3. Em alguns minutos o site fica disponível em
   `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.
