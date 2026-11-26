import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe01Page from '../teams/equipe-01/Equipe01Page';
import Equipe05Page from '../teams/equipe-05/Equipe05Page';
// As demais equipes importarão suas páginas aqui, ex:
// import Equipe02Page from '../teams/equipe-02/Equipe02Page';

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
  {
    id: 'equipe-01',
    slug: 'equipe-01',
    name: 'ENAHub',
    title: 'Apresentação do projeto ENAHub',
    description: 'Conheça nossa aplicação e os integrantes da equipe.',
    members: [
      'Cauã Medeiros',
      'Pedro Pompeu',
      'João Victor Alves Lima',
      'Marco Cauã',
    ],
    component: Equipe01Page,
  },
  {
    id: 'equipe-05',
    slug: 'equipe-05',
    name: 'Equipe 05',
    title: 'Zero Grau: pedidos de bebidas no varejo e no atacado',
    description: 'Sistema web de pedidos para uma distribuidora de Fortaleza: loja por CPF, balcão de atacado por CNPJ e painel do dono. Com vídeo de apresentação e ficha técnica da equipe.',
    members: ['Vitor Costa Maia', 'Caio Barsi de Holanda', 'Christian Davi Ribeiro Lopes', 'João Victor dos Santos Carvalho', 'Victor Custódio Holanda'],
    component: Equipe05Page,
  },
  // EXEMPLO PARA AS PRÓXIMAS EQUIPES COPIAREM:
  // {
  //   id: 'equipe-02',
  //   slug: 'equipe-02',
  //   name: 'Equipe 02',
  //   title: 'Título do Projeto da Equipe 02',
  //   description: 'Breve descrição do que a página apresenta.',
  //   members: ['Integrante 1', 'Integrante 2'],
  //   component: Equipe02Page,
  // },
];