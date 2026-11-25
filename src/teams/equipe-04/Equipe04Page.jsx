import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Equipe04Page.module.css';
import renanFoto from './assets/renan-rabelo.jpg';
import daviFoto from './assets/davi-laurentino.jpg';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/2jWW-xBryf4';

const MEMBROS = [
  {
    nome: 'Renan Rabelo de Oliveira',
    papel: 'Desenvolvimento Full-Stack & Integração Git',
    habilidades: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Git/GitHub'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Atuou na API e nas telas da coordenação do UniCheck e na integração das branches da equipe.',
    foto: renanFoto,
    link: null,
  },
  {
    nome: 'Davi Laurentino',
    papel: 'Layout & Roteiro/Vídeo',
    habilidades: ['React', 'CSS', 'UI/UX', 'Edição de vídeo'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Contribuiu com a interface do UniCheck e com o roteiro da apresentação.',
    foto: daviFoto,
    link: null,
  },
  {
    nome: 'Zíltom Machado',
    papel: 'Back-end & Banco de Dados',
    habilidades: ['Node.js', 'Express', 'MySQL', 'SQL'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Contribuiu com a modelagem do banco e as regras da API do UniCheck.',
    foto: null, // TODO: adicionar foto em ./assets e importar no topo
    link: null,
  },
  {
    nome: 'Vinicius Estevam',
    papel: 'Testes & Revisão IA',
    habilidades: ['Vitest', 'TypeScript', 'Revisão de código', 'IA generativa'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Contribuiu com testes, revisão das entregas e uso de IA no projeto.',
    foto: null, // TODO: adicionar foto em ./assets e importar no topo
    link: null,
  },
];

const FUNCIONALIDADES = [
  {
    titulo: 'Solicitação de empréstimo',
    texto: 'Alunos e professores pedem materiais, salas e chaves para uma data de uso, num único pedido com vários itens.',
  },
  {
    titulo: 'Aprovação item a item',
    texto: 'A coordenação analisa cada item separadamente: aprova ou recusa com motivo, sem travar o restante do pedido.',
  },
  {
    titulo: 'Retirada e devolução',
    texto: 'A Secretaria registra quem retirou e quando devolveu, com controle de disponibilidade em tempo real.',
  },
  {
    titulo: 'Alertas de atraso',
    texto: 'Empréstimos vencidos aparecem destacados no painel, com histórico completo de cada movimentação.',
  },
];

const STACK = ['React 19', 'Vite', 'TypeScript', 'Node.js', 'Express 5', 'MySQL 8', 'Zod', 'JWT', 'Vitest'];

function iniciais(nome) {
  const partes = nome.split(' ').filter(Boolean);
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

// Revela cada elemento com data-reveal quando ele entra na tela.
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const alvos = ref.current.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      alvos.forEach((el) => el.setAttribute('data-visible', 'true'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-visible', 'true');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    alvos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Equipe04Page() {
  const pageRef = useReveal();

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.topNav}>
        <Link to="/" className={styles.backLink}>
          ← Voltar para a Vitrine Geral
        </Link>
        <span className={styles.folderTag}>src/teams/equipe-04/</span>
      </div>

      <header className={styles.hero}>
        <div className={styles.badges}>
          <span className={styles.badge}>Equipe 04</span>
          <span className={styles.badgeOutline}>Secretaria do CCT • UNIFOR</span>
        </div>
        <h1 className={styles.title}>
          Uni<span className={styles.titleAccent}>Check</span>
        </h1>
        <p className={styles.subtitle}>
          Sistema web para controlar o empréstimo de materiais, salas e chaves da Secretaria do
          Centro de Ciências Tecnológicas: do pedido à devolução, com aprovação pela coordenação.
        </p>
        <ul className={styles.stack} aria-label="Tecnologias do UniCheck">
          {STACK.map((tec, i) => (
            <li key={tec} className={styles.stackItem} style={{ '--i': i }}>
              {tec}
            </li>
          ))}
        </ul>
      </header>

      {/* 01. Vídeo com referência */}
      <section className={styles.card} aria-labelledby="eq04-video" data-reveal>
        <div className={styles.sectionHeader}>
          <span className={styles.step}>01</span>
          <div>
            <h2 id="eq04-video" className={styles.sectionTitle}>Vídeo & Referência</h2>
            <p className={styles.sectionSub}>Demonstração do fluxo de empréstimo no UniCheck</p>
          </div>
        </div>

        <div className={styles.video}>
          {VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
              title="Demonstração do UniCheck — Equipe 04"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className={styles.videoPlaceholder}>
              <span className={styles.playIcon} aria-hidden="true">▶</span>
              <p>Vídeo em breve</p>
            </div>
          )}
        </div>

        <div className={styles.reference}>
          <strong>Referência:</strong>
          <p>
            Roteiro produzido pela própria equipe a partir do fluxo real do sistema: um aluno solicita
            um material, a coordenação aprova o item, a Secretaria registra a retirada e a devolução.
            Tema: digitalização do controle de empréstimos que hoje é feito em papel na Secretaria do
            CCT.
          </p>
        </div>
      </section>

      {/* 02 e 03. Descrição do projeto e apresentação da equipe */}
      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="eq04-projeto" data-reveal>
          <div className={styles.sectionHeader}>
            <span className={styles.step}>02</span>
            <h2 id="eq04-projeto" className={styles.sectionTitle}>O Projeto & Uso de IA</h2>
          </div>
          <p className={styles.paragraph}>
            O <strong>UniCheck</strong> substitui o caderno de empréstimos da Secretaria do CCT. Cada
            pedido tem protocolo, a disponibilidade é verificada no servidor e todo o histórico fica
            registrado no banco MySQL. Esta página apresenta o sistema e quem o construiu.
          </p>
          <p className={styles.paragraph}>
            <strong>Como usamos IA:</strong> apoio na revisão de código e de regras de negócio, na
            escrita de testes, na prototipação das telas e na revisão dos textos. As decisões de
            arquitetura e a validação final de cada entrega ficaram com a equipe.
          </p>
        </section>

        <section
          className={styles.card}
          aria-labelledby="eq04-equipe"
          data-reveal
          style={{ '--delay': '120ms' }}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.step}>03</span>
            <h2 id="eq04-equipe" className={styles.sectionTitle}>A Equipe</h2>
          </div>
          <p className={styles.paragraph}>
            Somos a <strong>Equipe 04</strong>, graduandos em Ciência da Computação na UNIFOR, unidos
            por um problema real do nosso próprio campus.
          </p>
          <p className={styles.paragraph}>
            <strong>Dinâmica:</strong> dividimos o trabalho por módulos do sistema, com uma branch por
            frente e revisão em Pull Request antes de integrar na <code>main</code>. As tarefas foram
            organizadas em quadro Trello.
          </p>
        </section>
      </div>

      <section className={styles.features} aria-label="Funcionalidades do UniCheck">
        {FUNCIONALIDADES.map((f, i) => (
          <article
            key={f.titulo}
            className={styles.feature}
            data-reveal
            style={{ '--delay': `${i * 90}ms` }}
          >
            <h3 className={styles.featureTitle}>{f.titulo}</h3>
            <p className={styles.featureText}>{f.texto}</p>
          </article>
        ))}
      </section>

      {/* 04. Ficha técnica individual */}
      <section className={styles.card} aria-labelledby="eq04-ficha" data-reveal>
        <div className={styles.sectionHeader}>
          <span className={styles.step}>04</span>
          <div>
            <h2 id="eq04-ficha" className={styles.sectionTitle}>Ficha Técnica</h2>
            <p className={styles.sectionSub}>Papel, habilidades e mini-bio de cada integrante</p>
          </div>
        </div>

        <div className={styles.members}>
          {MEMBROS.map((m, i) => (
            <article
              key={m.nome}
              className={styles.member}
              data-reveal
              style={{ '--delay': `${i * 110}ms` }}
            >
              {m.foto ? (
                <img src={m.foto} alt={`Foto de ${m.nome}`} className={styles.avatar} loading="lazy" />
              ) : (
                <div className={styles.avatarFallback} aria-hidden="true">
                  {iniciais(m.nome)}
                </div>
              )}
              <div className={styles.memberBody}>
                <h3 className={styles.memberName}>{m.nome}</h3>
                <p className={styles.memberRole}>{m.papel}</p>
                <ul className={styles.skills}>
                  {m.habilidades.map((h) => (
                    <li key={h} className={styles.skill}>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className={styles.memberBio}>{m.bio}</p>
                {m.link && (
                  <a href={m.link} target="_blank" rel="noreferrer" className={styles.memberLink}>
                    Perfil profissional ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
