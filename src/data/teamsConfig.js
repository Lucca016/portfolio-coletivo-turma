
import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe01Page from '../teams/equipe-01/Equipe01Page';

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
];
