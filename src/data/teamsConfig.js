
import EquipeBasePage from '../teams/equipe-base/EquipeBasePage';
import Equipe01Page from '../teams/equipe-01/Equipe01Page';
import Equipe02Page from '../teams/equipe-02/LandingPage.jsx';
import Equipe03Page from '../teams/equipe-03/Equipe03Page';
import Equipe04Page from '../teams/equipe-04/Equipe04Page';
import Equipe05Page from '../teams/equipe-05/Equipe05Page';
import Equipe07Page from '../teams/equipe-07/index.jsx';

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
    id: 'equipe-02',
    slug: 'equipe-02',
    name: 'Equipe 02 — Work-Gest',
    title: 'Work-Gest — Plataforma de Gestão Corporativa',
    description: 'Sistema web desenvolvido para facilitar a gestão corporativa interna, organizando processos e atividades empresariais.',
    members: [
      'Davi Noronha',
      'Victor Hugo Martins Ponceano',
      'Pietro Maia',
      'Guilherme Abreu',
    ],
    component: Equipe02Page,
  },
  {
    id: 'equipe-03',
    slug: 'equipe-03',
    name: 'UNIFOR Exchange',
    title: 'Plataforma Web de Apoio à Mobilidade Acadêmica Internacional',
    description: 'Sistema completo (React, Node.js e MySQL) que reúne países, universidades conveniadas e oportunidades de intercâmbio da UNIFOR, com mapa, quiz de perfil e checklist de preparação.',
    members: ['Catarina Thaís Lima Pimentel', 'Thaís Câncio Rodrigues de Góis', 'Hafiz Oliveira Costa', 'Brena Vitória Aguiar Lemos', 'Enzo Fernandes Paulino'],
    component: Equipe03Page,
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
  {
    id: 'equipe-05',
    slug: 'equipe-05',
    name: 'Equipe 05',
    title: 'Zero Grau: pedidos de bebidas no varejo e no atacado',
    description: 'Sistema web de pedidos para uma distribuidora de Fortaleza: loja por CPF, balcão de atacado por CNPJ e painel do dono. Com vídeo de apresentação e ficha técnica da equipe.',
    members: ['Vitor Costa Maia', 'Caio Barsi de Holanda', 'Christian Davi Ribeiro Lopes', 'João Victor dos Santos Carvalho', 'Victor Custódio Holanda'],
    component: Equipe05Page,
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
      'Valter Expedito Ribeiro da Silva',
    ],
    component: Equipe07Page,
  },
 
];
