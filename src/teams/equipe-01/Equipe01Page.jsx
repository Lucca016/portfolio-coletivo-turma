
import { Link, useSearchParams } from 'react-router-dom';
import IntegrantesPage from './IntegrantesPage';
import './Equipe01.css';

export default function Equipe01Page() {
  const [searchParams] = useSearchParams();

  if (searchParams.get('pagina') === 'integrantes') {
    return <IntegrantesPage />;
  }

  return (
    <div className="ena-container">
      <header className="ena-header">
        <span>Equipe 01</span>
        <h1>ENAHub</h1>
        <p>Plataforma de Preparação para o ENADE</p>
      </header>

      <section className="ena-card">
        <h2>Apresentação do projeto</h2>

        <div className="ena-video">
          <iframe
            src="https://www.youtube.com/embed/pTLyjcP8e5U"
            title="Apresentação do projeto ENAHub"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className="ena-referencia">
          Fonte: vídeo produzido pela equipe ENAHub,
          disponível no{' '}
          <a
            href="https://youtu.be/pTLyjcP8e5U"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>.
        </p>
      </section>

      <section className="ena-card">
        <h2>Sobre o projeto</h2>

        <p>
          O ENAHub é uma plataforma web desenvolvida como
          trabalho acadêmico da disciplina de Desenvolvimento
          Web, com o objetivo de auxiliar estudantes
          universitários na preparação para o Exame Nacional
          de Desempenho dos Estudantes (ENADE).
        </p>

        <p>
          A aplicação oferece um ambiente de estudos com
          simulados organizados por curso, correção automática
          das respostas, acompanhamento do desempenho e
          consulta ao histórico de resultados. Além disso,
          possui um painel administrativo para cadastro,
          edição e gerenciamento de questões.
        </p>

        <h2>Tecnologias utilizadas</h2>

        <p>
          O projeto utiliza React, Vite, JavaScript, HTML5,
          CSS3 e Bootstrap no front-end. O back-end foi
          desenvolvido com Node.js e Express, utilizando
          MySQL como banco de dados.
        </p>

        <p>
          A aplicação possui uma arquitetura cliente-servidor,
          com comunicação por meio de uma API REST,
          autenticação JWT e mecanismos de segurança para
          proteção dos dados dos usuários.
        </p>

        <p>
          A publicação do projeto foi realizada utilizando
          Vercel para o front-end, Render para o back-end e
          Aiven para o banco de dados. O controle de versão
          foi realizado com Git e GitHub.
        </p>

        <p>
          A inteligência artificial também foi utilizada
          como ferramenta de apoio durante o desenvolvimento
          do projeto, auxiliando na resolução de dúvidas,
          identificação e correção de erros, revisão de
          códigos e elaboração da documentação.
        </p>

        <h2>Identidade e dinâmica da equipe</h2>

        <p>
          A equipe ENAHub é composta por quatro integrantes,
          com responsabilidades distribuídas entre
          gerenciamento de projetos, desenvolvimento
          front-end, desenvolvimento back-end e design UX/UI.
        </p>

        <div className="ena-botoes">
          <a
            href="https://ena-hub.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ena-botao"
          >
            Acessar aplicação
          </a>

          <Link
            to="?pagina=integrantes"
            className="ena-botao-secundario"
          >
            Conheça nossa equipe
          </Link>
        </div>
      </section>
    </div>
  );
}
