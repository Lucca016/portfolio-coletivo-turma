import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe07Page from '../teams/equipe-07/index.jsx';

export const teamsConfig = [
  {
    id: 'equipe-base',
    slug: 'equipe-base',
    name: 'Equipe Base & Integração',
    title: 'Arquitetura, Integração e Deploy do Portfólio',
    description: 'Responsável pela fundação React + Vite, roteamento dinâmico, revisão de PRs e publicação na Vercel.',
    members: [
      'João Marcelo Ferreira Santos',
      'Lucca Maia',
      'Leonardo Sampaio',
      'Paulo Henrique'
    ],
    component: EquipeBasePage,
  },
  {
    id: 'equipe-07',
    slug: 'equipe-07',
    name: 'Equipe 07 — FitManager',
    title: 'FitManager — Gestão de Academias e Treinos',
    description: 'Plataforma web para gerenciamento de alunos, prescrição de treinos e acompanhamento da evolução física.',
    members: [
      'Cairo Forte Ferreira Filho',
      'Henrique José Barbosa Vitalino Carneiro Mello',
      'Marcos Gentili Oliveira',
      'Valter Expedito Ribeiro da Silva'
    ],
    component: Equipe07Page,
  },
];