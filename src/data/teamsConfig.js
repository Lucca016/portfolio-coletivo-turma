import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
// As demais equipes importarão suas páginas aqui, ex:
// import Equipe01Page from '../teams/equipe-01/Equipe01Page';

export const teamsConfig = [
  {
    id: 'equipe-base',
    slug: 'equipe-base',
    name: 'Equipe Base & KIDDOS',
    title: 'KIDDOS — Portal de Jogos Educativos & Arquitetura Base',
    description: 'Catálogo web de jogos educativos da UNIFOR para a Escola Maria de Carvalho Martins e fundação técnica do Portfólio Coletivo.',
    members: ['João Marcelo Ferreira Santos', 'Lucca Maia', 'Leonardo Sampaio', 'Paulo Henrique'],
    component: EquipeBasePage,
  },
  // EXEMPLO PARA AS PRÓXIMAS EQUIPES COPIAREM:
  // {
  //   id: 'equipe-01',
  //   slug: 'equipe-01',
  //   name: 'Equipe 01',
  //   title: 'Título do Projeto da Equipe 01',
  //   description: 'Breve descrição do que a página apresenta.',
  //   members: ['Integrante 1', 'Integrante 2'],
  //   component: Equipe01Page,
  // },
];