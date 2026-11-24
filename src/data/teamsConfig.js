import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe05Page from '../teams/equipe-05/Equipe05Page';
// As demais equipes importarão suas páginas aqui, ex:
// import Equipe01Page from '../teams/equipe-01/Equipe01Page';

export const teamsConfig = [
  {
    id: 'equipe-base',
    slug: 'equipe-base',
    name: 'Equipe Base & Integração',
    title: 'Arquitetura, Integração e Deploy do Portfólio',
    description: 'Responsável pela fundação React + Vite, roteamento dinâmico, revisão de PRs e publicação na Vercel.',
    members: ['João Marcelo Ferreira Santos', 'Lucca Maia', 'Leonardo Sampaio', 'Paulo Henrique'],
    component: EquipeBasePage,
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
  //   id: 'equipe-01',
  //   slug: 'equipe-01',
  //   name: 'Equipe 01',
  //   title: 'Título do Projeto da Equipe 01',
  //   description: 'Breve descrição do que a página apresenta.',
  //   members: ['Integrante 1', 'Integrante 2'],
  //   component: Equipe01Page,
  // },
];