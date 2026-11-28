
import { projeto, membros } from './dados.js';
import './LandingPage.css';

function Deploy({ children }) {
  return projeto.deploy ? (
    <a
      className="lp-button"
      href={projeto.deploy}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  ) : (
    <button className="lp-button" disabled>
      {children} ↗
    </button>
  );
}

export default function LandingPage() {
  return (
    <div className="lp" id="inicio">
      <div className="lp-wrap">

        <header className="lp-header">
          <nav aria-label="Navegação da página">
            <a href="#inicio">Início</a>
            <a href="#projeto">Projeto</a>
            <a href="#equipe">Equipe</a>
          </nav>
        </header>

        <main>

          <section className="lp-hero">
            <p className="lp-kicker">
              <span className="lp-dot" />
              EQUIPE 02 — WORK-GEST | DESAFIO INTEGRADOR 2026
            </p>

            <h1>
              Work-Gest{' '}
              <span>Gestão corporativa.</span>
            </h1>

            <p className="lp-lead">
              Conheça nosso projeto, as tecnologias utilizadas
              e a equipe responsável por transformar essa ideia
              em realidade.
            </p>

            <div className="lp-actions">
              <Deploy>Acessar projeto</Deploy>

              <a className="lp-button lp-outline" href="#equipe">
                Conheça a equipe
              </a>
            </div>

            <p className="lp-muted lp-small">
              ▲ {projeto.deploy
                ? 'Publicado na Vercel'
                : 'Deploy na Vercel — link a configurar'}
            </p>
          </section>

          <section className="lp-section" id="projeto">
            <p className="lp-kicker">01 / O PROJETO</p>

            <h2>Sobre o trabalho</h2>

            <p>{projeto.descricao}</p>
            <p>{projeto.ia}</p>

            <div className="lp-video">
              <video
                className="lp-video-player"
                controls
                preload="metadata"
                playsInline
              >
                <source
                  src={projeto.video}
                  type="video/mp4"
                />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>

            <p className="lp-small">
              Referência: {projeto.referencia}
            </p>

            <p className="lp-kicker lp-tech-title">
              TECNOLOGIAS UTILIZADAS
            </p>

            <div className="lp-tags">
              {projeto.tecnologias.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </section>

          <section className="lp-section" id="equipe">
            <p className="lp-kicker">02 / QUEM SOMOS</p>

            <h2>Conheça nossa equipe.</h2>

            <p>{projeto.equipe}</p>

            <div className="lp-members">
              {membros.map((m, i) => (
                <article className="lp-member" key={i}>

                  {m.foto ? (
                    <img
                      className="lp-photo"
                      src={m.foto}
                      alt={`Foto de ${m.nome}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="lp-photo lp-photo-placeholder">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        width="42"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 22v-3a8 8 0 0 1 16 0v3" />
                      </svg>

                      <small>Foto do membro</small>
                    </div>
                  )}

                  <div>
                    <h3>{m.nome}</h3>

                    <p className="lp-role">{m.funcao}</p>

                    <p>{m.descricao}</p>

                    <div className="lp-tags">
                      {m.habilidades.map(h => (
                        <span key={h}>{h}</span>
                      ))}
                    </div>

                    <div className="lp-social">
                      {m.github && (
                        <a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn ↗
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              ))}
            </div>
          </section>

          <section className="lp-cta">
            <span className="lp-globe" aria-hidden="true">
              ◎
            </span>

            <h2>Conheça o resultado do nosso trabalho.</h2>

            <p>
              Acesse nossa aplicação e explore o projeto
              desenvolvido pela equipe.
            </p>

            <Deploy>Visitar aplicação</Deploy>

            <p className="lp-small">▲ Vercel</p>
          </section>

        </main>

        <footer className="lp-footer">
          © 2026 — Desafio Integrador
          <span>Ciência da Computação | UNIFOR</span>
        </footer>

      </div>
    </div>
  );
}
