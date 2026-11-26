import { useEffect, useLayoutEffect } from 'react';
import s from './Equipe05Page.module.css';
import { VIDEO, LINKS, FUNCIONALIDADES, MEMBROS } from './dados';

function Seta() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const FONTES = 'https://fonts.googleapis.com/css2?family=Gabarito:wght@700;900&family=Manrope:wght@400;600;700&display=swap';

function useFontesDaEquipe() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONTES}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONTES;
    document.head.appendChild(link);
  }, []);
}

function NovaAba() {
  return <span className={s.leitor}> (abre em nova aba)</span>;
}

function useComecarNoTopo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default function Equipe05Page() {
  useFontesDaEquipe();
  useComecarNoTopo();
  return (
    <div className={s.pagina}>
      <section className={s.abertura} aria-labelledby="zg-titulo">
        <div className={s.largura}>
          <p className={s.equipe}>Equipe 05</p>
          <h1 id="zg-titulo" className={s.titulo}>
            Zero Grau<span className={s.grau} aria-hidden="true">0°</span>
          </h1>
          <p className={s.subtitulo}>
            Sistema web de pedidos para uma distribuidora de bebidas de Fortaleza, com loja de varejo,
            balcão de atacado e painel do dono.
          </p>

          <figure className={s.video}>
            <div className={s.moldura}>
              <video
                src={VIDEO.src}
                poster={VIDEO.capa}
                controls
                playsInline
                preload="metadata"
                aria-label="Vídeo de apresentação do projeto Zero Grau"
              >
                Seu navegador não consegue reproduzir este vídeo.
              </video>
            </div>
            <figcaption className={s.legenda}>
              <span>Vídeo de apresentação do projeto (7 min 43 s)</span>
            </figcaption>
          </figure>

          <dl className={s.referencia}>
            <div>
              <dt>Fonte</dt>
              <dd>Vídeo gravado pela própria equipe 05, sem material de terceiros.</dd>
            </div>
            <div>
              <dt>Tema</dt>
              <dd>O problema da distribuidora e o caminho de um pedido no Zero Grau, do cadastro ao WhatsApp da loja.</dd>
            </div>
            <div>
              <dt>Base do roteiro</dt>
              <dd>O Plano de Trabalho, a documentação do projeto e o site publicado, listados logo abaixo.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={s.secao} aria-labelledby="zg-projeto">
        <div className={s.largura}>
          <div className={s.duasColunas}>
            <div>
              <h2 id="zg-projeto" className={s.h2}>O projeto</h2>
              <p className={s.texto}>
                A distribuidora recebia todos os pedidos por mensagem no WhatsApp: nada ficava registrado, não havia
                histórico por cliente e o estoque não baixava com a venda. O Zero Grau organiza esse atendimento num site
                com cadastro, catálogo, carrinho e painel, sem tirar do cliente o canal que ele já usa.
              </p>
              <dl className={s.descricao}>
                <div>
                  <dt>Tema da página</dt>
                  <dd>O Zero Grau, sistema web de pedidos que a equipe desenvolveu na disciplina Desenvolvimento de Plataformas Web.</dd>
                </div>
                <div>
                  <dt>Propósito da entrega</dt>
                  <dd>Apresentar o projeto à turma no Desafio Integrador: o vídeo, o que o sistema faz, onde ver tudo e quem fez cada parte.</dd>
                </div>
                <div>
                  <dt>Uso de IA</dt>
                  <dd>
                    Usamos IA como ferramenta de apoio: para tirar dúvidas e para gerar e revisar trechos de código,
                    testes e textos. As decisões, a arquitetura e a integração ficaram com a equipe, que revisou e
                    testou tudo o que entrou no projeto.
                  </dd>
                </div>
              </dl>
            </div>
            <ul className={s.links}>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={s.linkCartao}>
                    <span>
                      <strong>{l.rotulo}</strong>
                      <small>{l.detalhe}</small>
                    </span>
                    <Seta />
                    <NovaAba />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className={s.funcionalidades}>
            {FUNCIONALIDADES.map((f) => (
              <li key={f.titulo}>
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </li>
            ))}
          </ul>

          <p className={s.stack}>
            <strong>Tecnologias:</strong> HTML, CSS e JavaScript, React com Vite e Bootstrap, Node.js com Express,
            MySQL na nuvem (Aiven), ViaCEP, Pix BR Code, Playwright e GitHub Actions.
          </p>
        </div>
      </section>

      <section className={s.secao} aria-labelledby="zg-equipe">
        <div className={s.largura}>
          <h2 id="zg-equipe" className={s.h2}>A equipe</h2>
          <p className={`${s.texto} ${s.intro}`}>
            Somos a Equipe 05, o grupo do Zero Grau: cinco estudantes de Ciência da Computação da Unifor, divididos em
            três frentes que conversam o tempo todo:
            back-end, front-end e documentação. Cada requisito virou uma tarefa no GitHub, cada frente trabalhou na sua
            branch e as entregas foram integradas por pull request, com os testes rodando a cada envio.
          </p>

          <ul className={s.membros}>
            {MEMBROS.map((m) => (
              <li key={m.nome} className={s.membro}>
                <img src={m.foto} alt={`Foto de ${m.nome}`} width="480" height="480" loading="lazy" />
                <div className={s.membroCorpo}>
                  <h3>{m.nome}</h3>
                  <p className={s.papel}>{m.papel}</p>
                  <p className={s.bio}>{m.bio}</p>
                  <ul className={s.habilidades} aria-label={`Habilidades de ${m.nome}`}>
                    {m.habilidades.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {m.link && (
                    <a href={m.link.href} target="_blank" rel="noopener noreferrer" className={s.perfil}>
                      {m.link.rotulo}
                      <NovaAba />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
