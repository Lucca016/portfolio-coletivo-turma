import styles from './PaginaUniforExchange.module.css'
import { links, video, painel, stack, telas, membros } from './dados'

// Página da equipe UNIFOR Exchange no Portfólio Coletivo da Turma.
// Tudo o que a página usa está nesta pasta (componente, estilos, dados e imagens).

function Video() {
  if (video.youtubeId) {
    return (
      <iframe
        className={styles.videoQuadro}
        src={'https://www.youtube.com/embed/' + video.youtubeId}
        title="Vídeo de apresentação do UNIFOR Exchange"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return (
    <video className={styles.videoQuadro} src={video.arquivo} poster={video.poster} controls preload="metadata">
      Seu navegador não reproduz vídeos.
    </video>
  )
}

function CartaoEmbarque({ membro, assento }) {
  return (
    <article className={styles.cartao}>
      <div className={styles.cartaoTopo}>
        <span>UNIFOR EXCHANGE</span>
        <span>CARTÃO DE EMBARQUE</span>
      </div>

      <div className={styles.cartaoCorpo}>
        <img className={styles.cartaoFoto} src={membro.foto} alt={'Foto de ' + membro.nome} />

        <div className={styles.cartaoDados}>
          <p className={styles.campoRotulo}>Passageira(o)</p>
          <h3 className={styles.cartaoNome}>{membro.nome}</h3>

          <p className={styles.campoRotulo}>Função no projeto</p>
          <p className={styles.cartaoPapel}>{membro.papel}</p>

          <p className={styles.campoRotulo}>Bagagem</p>
          <ul className={styles.etiquetas}>
            {membro.habilidades.map(function (h) {
              return <li key={h}>{h}</li>
            })}
          </ul>
        </div>
      </div>

      <p className={styles.cartaoBio}>{membro.bio}</p>

      <div className={styles.cartaoRodape}>
        <span>
          Assento <strong>{String(assento).padStart(2, '0')}</strong>
        </span>
        {membro.link ? (
          <a href={membro.link} target="_blank" rel="noreferrer">
            Perfil ↗
          </a>
        ) : (
          <span className={styles.codigoBarras} aria-hidden="true" />
        )}
      </div>
    </article>
  )
}

function Equipe03Page() {
  return (
    <div className={styles.pagina}>
      {/* ---------- Abertura ---------- */}
      <header className={styles.hero}>
        <svg className={styles.rota} viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 340 C 260 120, 520 60, 760 150 S 1100 260, 1240 40" />
          <circle cx="760" cy="150" r="6" />
          <circle cx="260" cy="210" r="4" />
          <circle cx="1080" cy="215" r="4" />
        </svg>

        <div className={styles.heroConteudo}>
          <p className={styles.sobretitulo}>Desafio Integrador · Portfólio da equipe</p>
          <h1 className={styles.titulo}>
            Embarque no <span>UNIFOR Exchange</span>
          </h1>
          <p className={styles.subtitulo}>
            A plataforma web que reúne países, universidades conveniadas e oportunidades de
            intercâmbio da UNIFOR em um só lugar, com mapa, quiz de perfil e um checklist para
            o estudante planejar a viagem.
          </p>

          <div className={styles.acoes}>
            <a className={styles.botaoPrincipal} href={links.site} target="_blank" rel="noreferrer">
              Acessar o sistema ↗
            </a>
            <a className={styles.botaoSecundario} href={links.tutorial} target="_blank" rel="noreferrer">
              Como usar
            </a>
            <a className={styles.botaoSecundario} href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className={styles.painel} aria-label="Resumo do projeto">
          <p className={styles.painelTitulo}>Partidas</p>
          {painel.map(function (item) {
            return (
              <div className={styles.painelLinha} key={item.rotulo}>
                <span>{item.rotulo}</span>
                <span className={item.destaque ? styles.painelValorDestaque : styles.painelValor}>
                  {item.valor}
                </span>
              </div>
            )
          })}
        </aside>
      </header>

      <nav className={styles.indice} aria-label="Seções da página">
        <a href="#ux-video">Vídeo</a>
        <a href="#ux-projeto">Projeto</a>
        <a href="#ux-telas">Telas</a>
        <a href="#ux-equipe">Equipe</a>
      </nav>

      {/* ---------- Vídeo ---------- */}
      <section id="ux-video" className={styles.secao}>
        <p className={styles.portao}>Portão 01</p>
        <h2 className={styles.secaoTitulo}>Vídeo de apresentação</h2>

        <div className={styles.videoGrade}>
          <div className={styles.videoMoldura}>
            <Video />
          </div>

          <div className={styles.referencia}>
            <h3>Referência do vídeo</h3>
            <dl>
              <dt>Autoria</dt>
              <dd>Vídeo produzido pela própria equipe ({video.duracao}).</dd>
              <dt>Tema</dt>
              <dd>Demonstração do UNIFOR Exchange funcionando, do primeiro acesso à área administrativa.</dd>
              <dt>Roteiro</dt>
              <dd>
                Login, mapa e página do país, catálogo com filtros, detalhes da universidade, quiz e
                recomendações, Minha Jornada, requisitos e elegibilidade, relatos, área administrativa
                e teste no celular.
              </dd>
              <dt>Como foi feito</dt>
              <dd>Gravação de tela do sistema rodando, com narração da equipe.</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Projeto ---------- */}
      <section id="ux-projeto" className={styles.secao}>
        <p className={styles.portao}>Portão 02</p>
        <h2 className={styles.secaoTitulo}>Sobre o projeto e esta página</h2>

        <div className={styles.cartoesInfo}>
          <div className={styles.info}>
            <span className={styles.infoIcone}>🧭</span>
            <h3>O problema</h3>
            <p>
              As informações sobre intercâmbio da UNIFOR ficam espalhadas entre várias páginas e
              notícias. Para quem está começando, é difícil saber por onde ir e quais destinos
              combinam com o próprio curso e idioma.
            </p>
          </div>
          <div className={styles.info}>
            <span className={styles.infoIcone}>🌍</span>
            <h3>A solução</h3>
            <p>
              Um sistema completo (React, Node.js e MySQL) com mapa interativo, catálogo com filtros,
              quiz de perfil com índice de compatibilidade, favoritos, Minha Jornada e área
              administrativa. É orientativo e não substitui a DRI.
            </p>
          </div>
          <div className={styles.info}>
            <span className={styles.infoIcone}>🤖</span>
            <h3>Como usamos IA</h3>
            <p>
              A IA apoiou a equipe na geração e revisão de código, na depuração de erros, na escrita
              e revisão dos textos e na organização das tarefas. Tudo o que ela sugeriu foi testado
              e revisado pelo grupo antes de entrar no projeto.
            </p>
          </div>
        </div>

        <p className={styles.textoPagina}>
          <strong>Esta página</strong> é a nossa parada no Portfólio Coletivo da Turma: apresenta o
          projeto que desenvolvemos ao longo da disciplina, o vídeo de demonstração e quem fez parte
          da tripulação.
        </p>

        <ul className={styles.stack} aria-label="Tecnologias usadas">
          {stack.map(function (t) {
            return <li key={t}>{t}</li>
          })}
        </ul>
      </section>

      {/* ---------- Telas ---------- */}
      <section id="ux-telas" className={styles.secao}>
        <p className={styles.portao}>Portão 03</p>
        <h2 className={styles.secaoTitulo}>Paradas da viagem</h2>
        <p className={styles.secaoTexto}>Algumas telas do sistema publicado. Arraste para o lado para ver todas.</p>

        <div className={styles.galeria}>
          {telas.map(function (tela) {
            return (
              <figure className={styles.tela} key={tela.legenda}>
                <img src={tela.imagem} alt={tela.legenda} loading="lazy" />
                <figcaption>{tela.legenda}</figcaption>
              </figure>
            )
          })}
        </div>
      </section>

      {/* ---------- Equipe ---------- */}
      <section id="ux-equipe" className={styles.secao}>
        <p className={styles.portao}>Portão 04</p>
        <h2 className={styles.secaoTitulo}>A tripulação</h2>
        <p className={styles.secaoTexto}>
          Somos cinco estudantes de Ciência da Computação da UNIFOR (turma T242-10). Dividimos o
          trabalho por papéis, organizamos as tarefas em Kanban no Trello e cada funcionalidade
          entrou no GitHub por branch e Pull Request revisado pelo grupo.
        </p>

        <div className={styles.cartoes}>
          {membros.map(function (membro, i) {
            return <CartaoEmbarque membro={membro} assento={i + 1} key={membro.nome} />
          })}
        </div>
      </section>

    </div>
  )
}

export default Equipe03Page
