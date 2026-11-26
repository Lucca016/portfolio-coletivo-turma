// Conteúdo da página da equipe UNIFOR Exchange.
// Para mudar um texto, um papel ou um link, edite só este arquivo.

import fotoCatarina from './assets/catarina.jpg'
import fotoThais from './assets/thais.jpg'
import fotoHafiz from './assets/hafiz.jpg'
import fotoBrena from './assets/brena.jpg'
import fotoEnzo from './assets/enzo.jpg'

import telaHome from './assets/01_home.jpg'
import telaCatalogo from './assets/02_catalogo.jpg'
import telaPais from './assets/03_pais.jpg'
import telaQuiz from './assets/05_quiz.jpg'
import telaResultado from './assets/06_resultado_quiz.jpg'
import telaJornada from './assets/07_minha_jornada.jpg'
import telaAdmin from './assets/13_admin_lista.jpg'
import telaMobile from './assets/15_mobile_mapa.jpg'

import videoLocal from './assets/video.mp4'
import posterVideo from './assets/poster.jpg'

export var links = {
  site: 'https://unifor-exchange.vercel.app',
  tutorial: 'https://unifor-exchange.vercel.app/como-usar',
  github: 'https://github.com/brenalemos09/unifor-exchange',
}

export var video = {
  // Se o vídeo for enviado ao YouTube, coloque aqui só o ID
  // (o trecho depois de "v=" no link). Com o ID preenchido, a página
  // usa o YouTube; vazio, usa o arquivo local comprimido.
  youtubeId: '',
  arquivo: videoLocal,
  poster: posterVideo,
  duracao: '4min50s',
}

export var painel = [
  { rotulo: 'Site publicado', valor: 'Vercel', destaque: true },
  { rotulo: 'Testes da API', valor: '68/68 ok' },
  { rotulo: 'Etapas entregues', valor: '3 de 3' },
  { rotulo: 'Tripulação', valor: '5 pessoas' },
]

export var stack = [
  'React 19', 'Vite', 'Bootstrap', 'React Router', 'Leaflet',
  'Node.js', 'Express 5', 'TypeScript', 'Prisma', 'MySQL (Aiven)',
  'JWT', 'Vercel', 'Render', 'GitHub', 'Trello', 'Figma',
]

export var telas = [
  { imagem: telaHome, legenda: 'Página inicial' },
  { imagem: telaPais, legenda: 'País e universidades conveniadas' },
  { imagem: telaCatalogo, legenda: 'Catálogo com pesquisa e filtros' },
  { imagem: telaQuiz, legenda: 'Quiz de perfil' },
  { imagem: telaResultado, legenda: 'Recomendações com compatibilidade' },
  { imagem: telaJornada, legenda: 'Minha Jornada: favoritos e checklist' },
  { imagem: telaAdmin, legenda: 'Área administrativa' },
  { imagem: telaMobile, legenda: 'Versão para celular' },
]

export var membros = [
  {
    nome: 'Catarina Thaís Lima Pimentel',
    foto: fotoCatarina,
    papel: 'Front-end e protótipo',
    habilidades: ['React', 'Bootstrap', 'Figma', 'Fluxo de navegação'],
    bio: 'Desenhou o protótipo no Figma e o diagrama de fluxo de navegação, e construiu telas do front-end em React.',
    link: '',
  },
  {
    nome: 'Thaís Câncio Rodrigues de Góis',
    foto: fotoThais,
    papel: 'Front-end e UX/UI',
    habilidades: ['React', 'CSS', 'Figma', 'UX/UI'],
    bio: 'Cuidou da experiência e do visual da plataforma, do protótipo no Figma às telas finais em React.',
    link: '',
  },
  {
    nome: 'Hafiz Oliveira Costa',
    foto: fotoHafiz,
    papel: 'Banco de dados e API',
    habilidades: ['MySQL', 'Prisma', 'Node.js', 'Modelagem (DER)'],
    bio: 'Modelou o banco de dados (DER) e estruturou a API oficial que conecta o site ao MySQL na nuvem.',
    link: '',
  },
  {
    nome: 'Brena Vitória Aguiar Lemos',
    foto: fotoBrena,
    papel: 'Gerência e integração full-stack',
    habilidades: ['Git/GitHub', 'React', 'Node.js', 'Vercel e Render'],
    bio: 'Organizou o projeto (GitHub, Trello, Figma e Docs), escreveu os requisitos e o relatório, integrou front, API e banco e publicou o sistema.',
    link: 'https://github.com/brenalemos09',
  },
  {
    nome: 'Enzo Fernandes Paulino',
    foto: fotoEnzo,
    papel: 'Back-end',
    habilidades: ['Node.js', 'Express', 'TypeScript', 'Casos de uso'],
    bio: 'Desenvolveu rotas do back-end em Node.js e Express e elaborou os casos de uso do sistema.',
    link: '',
  },
]
