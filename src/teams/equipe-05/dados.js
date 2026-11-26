import fotoVitorCosta from './fotos/vitor-costa.webp';
import fotoCaio from './fotos/caio-barsi.webp';
import fotoChristian from './fotos/christian-davi.webp';
import fotoJoao from './fotos/joao-victor.webp';
import fotoVictorCustodio from './fotos/victor-custodio.webp';

import videoApresentacao from './video/apresentacao.mp4';
import capaDoVideo from './video/capa.webp';

export const VIDEO = { src: videoApresentacao, capa: capaDoVideo };

export const LINKS = [
  {
    rotulo: 'Abrir o site do Zero Grau',
    detalhe: 'Sistema publicado no GitHub Pages',
    href: 'https://costamaiavitor.github.io/Site-Zero-Grau/',
  },
  {
    rotulo: 'Ler a documentação completa',
    detalhe: 'Requisitos, casos de uso, protótipos e banco de dados (PDF)',
    href: 'https://drive.google.com/file/d/1M7qoYnOBCtADSnFLQcDGL5-NveI2X3Jp/view',
  },
];

export const FUNCIONALIDADES = [
  {
    titulo: 'Duas lojas, um estoque',
    texto: 'Quem se cadastra com CPF compra no varejo, por unidade. Com CNPJ, compra no balcão de atacado, por caixa fechada e com desconto por volume.',
  },
  {
    titulo: 'Do carrinho ao WhatsApp',
    texto: 'A taxa de entrega sai do CEP, o pagamento pode ser Pix com QR code ou na entrega, e o pedido chega à loja pelo WhatsApp, já escrito.',
  },
  {
    titulo: 'Painel do dono',
    texto: 'Produtos, preços, estoque, regras de venda, horário e pedidos são mantidos pelo administrador, sem mexer no código.',
  },
  {
    titulo: 'Feito para todo mundo',
    texto: 'Aviso de maioridade, telas de 320 px ao computador, contraste AA, uso por teclado e um guia de uso no botão ?.',
  },
];

export const MEMBROS = [
  {
    nome: 'Vitor Costa Maia',
    foto: fotoVitorCosta,
    papel: 'Front-end, protótipo e integração Git',
    habilidades: ['HTML, CSS e JavaScript', 'React', 'Diagramas UML', 'GitHub'],
    bio: 'Dono do repositório do projeto. Montou o protótipo navegável, os wireframes e os diagramas de casos de uso, e integrou as branches da equipe na main.',
    link: { rotulo: 'github.com/costamaiavitor', href: 'https://github.com/costamaiavitor' },
  },
  {
    nome: 'Caio Barsi de Holanda',
    foto: fotoCaio,
    papel: 'Front-end, qualidade e acessibilidade',
    habilidades: ['React + Vite', 'Bootstrap', 'Playwright', 'Acessibilidade (WCAG)'],
    bio: 'Fez as telas Minha conta e Pedidos em React, ligou o checkout à API, cuidou da acessibilidade e dos testes automatizados e criou o guia de uso do site.',
    link: { rotulo: 'github.com/caiobholanda', href: 'https://github.com/caiobholanda' },
  },
  {
    nome: 'Christian Davi Ribeiro Lopes',
    foto: fotoChristian,
    papel: 'Documentação e gestão do projeto',
    habilidades: ['Requisitos', 'Cronograma', 'Relatórios', 'Apresentação'],
    bio: 'Responsável pelo Plano de Trabalho, pelos relatórios e pelo cronograma das sprints, acompanhando o andamento das duas frentes até cada entrega.',
  },
  {
    nome: 'João Victor dos Santos Carvalho',
    foto: fotoJoao,
    papel: 'Back-end e integração com o front',
    habilidades: ['Node.js', 'Express', 'MySQL', 'JWT'],
    bio: 'Implementou o login com JWT, as rotas de pedidos e o histórico, a busca e o filtro no banco, o agendamento por horário e a integração do front com a API.',
    link: { rotulo: 'github.com/joaosantoscarv', href: 'https://github.com/joaosantoscarv' },
  },
  {
    nome: 'Victor Custódio Holanda',
    foto: fotoVictorCustodio,
    papel: 'Back-end e banco de dados',
    habilidades: ['Node.js', 'Express', 'MySQL (Aiven)', 'Sequelize', 'Swagger'],
    bio: 'Construiu a base do back-end com MySQL na nuvem, as regras de venda do varejo e do atacado, os cupons e a documentação interativa da API.',
    link: { rotulo: 'github.com/oCuh', href: 'https://github.com/oCuh' },
  },
];
