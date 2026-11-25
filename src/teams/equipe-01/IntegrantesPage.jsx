
import { Link } from 'react-router-dom';

import fotoCaua from './assets/Caua.jpeg';
import fotoJoao from './assets/Joao.jpeg';
import fotoPedro from './assets/Pedro.jpeg';
import fotoMarco from './assets/Marco.jpeg';

const integrantes = [
  {
    nome: 'Cauã Medeiros',
    funcao: 'Gerente de Projetos',
    ferramentas: 'Visual Studio Code, Trello, Git e GitHub.',
    bio: 'Cauã Medeiros, 21 anos, estudante de Ciência da Computação na Universidade de Fortaleza (Unifor), com interesse em tecnologia, inovação e empreendedorismo. Busco desenvolver meus conhecimentos e habilidades para atuar no mercado de tecnologia.',
    foto: fotoCaua,
  },
  {
    nome: 'Pedro Pompeu',
    funcao: 'Desenvolvedor Front-end',
    ferramentas: 'Visual Studio Code, HTML5, CSS3, JavaScript, React, Bootstrap, Git, GitHub e Vercel.',
    bio: 'Pedro Pompeu, 21 anos, acadêmico de Ciência da Computação na Unifor, movido pela curiosidade sobre avanços digitais, criação de projetos e mentalidade de negócios. Também é grande entusiasta da prática esportiva, especialmente jiu-jitsu e natação. Foca no aperfeiçoamento constante de suas aptidões técnicas para construir trajetória na área de TI.',
    foto: fotoPedro,
  },
  {
    nome: 'João Victor Alves Lima',
    funcao: 'Designer UX/UI',
    ferramentas: 'Visual Studio Code, Figma, HTML5, CSS3, Bootstrap, Git e GitHub.',
    bio: 'João Victor Alves Lima, 19 anos, cursa Ciência da Computação na Unifor e tem na resolução de problemas o motor para sua veia empreendedora. Entusiasta de futebol desde criança e recém-apaixonado pelo jiu-jitsu, concentra seus esforços em evoluir tecnicamente e se especializar em uma área de atuação.',
    foto: fotoJoao,
  },
  {
    nome: 'Marco Cauã',
    funcao: 'Desenvolvedor Back-end',
    ferramentas: 'Visual Studio Code, JavaScript, Node.js, Express, MySQL, Git, GitHub, Render e Aiven.',
    bio: 'Meu nome é Marco Cauã, tenho 19 anos e curso Ciência da Computação na Unifor. Tenho interesse em trabalhar no setor público na área de tecnologia. No meu tempo livre, gosto de pescar, jogar e desenhar. Busco ampliar meus conhecimentos na área e desenvolver minhas habilidades para alcançar meus objetivos profissionais.',
    foto: fotoMarco,
  },
];

export default function IntegrantesPage() {
  return (
    <div className="ena-container">
      <Link
        to="/equipe/equipe-01"
        className="ena-voltar"
      >
        ← Voltar ao projeto
      </Link>

      <header className="ena-header">
        <span>Equipe 01 — ENAHub</span>
        <h1>Nossa equipe</h1>
        <p>
          Conheça os integrantes responsáveis pelo
          desenvolvimento do projeto ENAHub.
        </p>
      </header>

      <div className="ena-integrantes">
        {integrantes.map((integrante, index) => (
          <article className="ena-membro" key={index}>
            <img
              src={integrante.foto}
              alt={integrante.nome}
              className="ena-foto"
            />

            <h2>{integrante.nome}</h2>

            <p>{integrante.bio}</p>

            <p>
              <strong>Papel desempenhado: </strong>
              {integrante.funcao}
            </p>

            <p>
              <strong>Ferramentas utilizadas: </strong>
              {integrante.ferramentas}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
