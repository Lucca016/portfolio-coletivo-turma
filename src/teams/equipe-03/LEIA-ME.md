# Página da Equipe 03 — UNIFOR Exchange

Tudo o que a página usa está nesta pasta: componente, estilos (CSS Module, sem conflito com outras equipes), textos e imagens.

## Como encaixar no Portfólio da Turma

1. A pasta fica em `src/teams/equipe-03/` (Equipe 03). Os imports internos são relativos.
2. A página está registrada em `src/data/teamsConfig.js` (rota `/equipe/equipe-03`), com o componente:

   ```js
   import Equipe03Page from '../teams/equipe-03/Equipe03Page'
   ```

   e o nome do card: **UNIFOR Exchange**.
3. Rode `npm run build` antes do push.

## O que editar

- Textos, papéis, links e fotos: `dados.js`.
- Vídeo: hoje a página usa `assets/video.mp4` (versão comprimida, ~5 MB). Se a equipe subir o vídeo no YouTube, coloque o ID em `video.youtubeId` (em `dados.js`) e apague o `video.mp4` da pasta.
