import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe04Page from '../teams/equipe-04/Equipe04Page';
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
    id: 'equipe-04',
    slug: 'equipe-04',
    name: 'Equipe 04',
    title: 'UniCheck — Empréstimos da Secretaria do CCT',
    description: 'Sistema web para pedir, aprovar, retirar e devolver materiais, salas e chaves da Secretaria do CCT, com alertas de atraso.',
    members: ['Renan Rabelo de Oliveira', 'Davi Laurentino', 'Zíltom Machado', 'Vinicius Estevam'],
    component: Equipe04Page,
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