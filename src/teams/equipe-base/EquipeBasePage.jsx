import { Link } from 'react-router-dom';

const TEAM_MEMBERS = [
  {
    name: 'João Marcelo Ferreira Santos',
    role: 'Arquitetura Full-Stack, Back-end KIDDOS & Roteamento Base',
    skills: ['TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'React + Vite'],
    bio: 'Graduando em Ciência da Computação na UNIFOR (Turma T242). Responsável pela estruturação da API do KIDDOS, modelagem de dados com Prisma/PostgreSQL e arquitetura base do portfólio coletivo.',
    github: 'https://github.com/joaomarceloferreirasantos',
  },
  {
    name: 'Lucca Maia Lima Verde de Moura Ferreira',
    role: 'Gestão de Repositório, Integração & Deploy Contínuo',
    skills: ['Git Flow', 'GitHub', 'Vercel CI/CD', 'TypeScript', 'React'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Responsável pela governança do repositório oficial, revisão de Pull Requests, publicação na Vercel e desenvolvimento do portal KIDDOS.',
    github: 'https://github.com/Lucca016',
  },
  {
    name: 'Leonardo Sampaio',
    role: 'Desenvolvimento Front-end KIDDOS & Qualidade de Build',
    skills: ['React', 'Vite', 'Bootstrap', 'JavaScript/TS', 'ESLint'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Focado na interface amigável voltada ao público infantil do KIDDOS, validação de builds e testes de integração.',
    github: 'https://github.com',
  },
  {
    name: 'Paulo Henrique',
    role: 'Curadoria de Jogos Educativos, Documentação & Revisão IA',
    skills: ['Documentação Técnica', 'UX Educacional', 'Engenharia de Prompt', 'Frontend'],
    bio: 'Graduando em Ciência da Computação na UNIFOR. Responsável pela catalogação dos jogos educativos, roteiro de apresentação do projeto e revisão apoiada por IA.',
    github: 'https://github.com',
  },
];

const KIDDOS_HIGHLIGHTS = [
  {
    title: 'Propósito Social & Extensionista',
    desc: 'Conectar os jogos digitais criados por estudantes da UNIFOR diretamente às crianças da Escola Maria de Carvalho Martins em um ambiente seguro e acessível.',
  },
  {
    title: 'Catálogo Web Interativo',
    desc: 'Vitrine organizada por faixa etária e disciplina, permitindo que alunos e professores descubram, acessem e avaliem os jogos educativos.',
  },
  {
    title: 'Arquitetura Full-Stack Moderna',
    desc: 'Front-end responsivo em React, Vite e TypeScript integrado a uma API REST em Node.js, Express, Prisma ORM e banco relacional PostgreSQL.',
  },
];

export default function EquipeBasePage() {
  return (
    <main style={styles.main}>
      {/* Navegação Superior */}
      <div style={styles.topNav}>
        <Link to="/" style={styles.backLink}>
          ← Voltar para a Vitrine Geral
        </Link>
        <span style={styles.folderTag}>src/teams/equipe-base/</span>
      </div>

      {/* Cabeçalho Institucional do Projeto KIDDOS */}
      <header style={styles.headerCard}>
        <div style={styles.badgesRow}>
          <span style={styles.badge}>Equipe Base & Integração • UNIFOR</span>
          <span style={styles.projectBadge}>Projeto Extensionista • Turma T242</span>
        </div>
        <h1 style={styles.title}>KIDDOS — Portal de Jogos Educativos</h1>
        <p style={styles.subtitle}>
          Plataforma web desenvolvida para catalogar e disponibilizar jogos educativos criados por
          estudantes da Universidade de Fortaleza (UNIFOR) para as crianças da{' '}
          <strong>Escola Maria de Carvalho Martins</strong>.
        </p>
      </header>

      {/* 1. Vídeo com Referência */}
      <section style={styles.sectionCard}>
        <div style={styles.sectionHeader}>
          <span style={styles.stepNumber}>01</span>
          <div>
            <h2 style={styles.sectionTitle}>Vídeo Demonstrativo & Referência</h2>
            <p style={styles.sectionSubtitle}>
              Apresentação do ecossistema KIDDOS e da arquitetura web utilizada no desenvolvimento
            </p>
          </div>
        </div>

        <div style={styles.videoWrapper}>
          {/* TROQUE O ID ABAIXO PELO LINK EMBED DO VÍDEO DO KIDDOS NO YOUTUBE */}
          <iframe
            style={styles.iframe}
            src="https://www.youtube.com/embed/90IqsU_jf3E"
            title="Apresentação do Projeto KIDDOS - Portal de Jogos Educativos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={styles.referenceBox}>
          <strong>Referência e Contexto do Vídeo:</strong>
          <p style={styles.referenceText}>
            Demonstração técnica de desenvolvimento web com React e componentização aplicada ao{' '}
            <strong>KIDDOS</strong>. O vídeo serve como referência para a organização do catálogo
            de jogos educativos, navegação intuitiva para crianças e educadores, e integração com o
            portfólio coletivo da disciplina de Desenvolvimento de Plataformas Web.
          </p>
        </div>
      </section>

      {/* 2 & 3. Descrição do Projeto KIDDOS, Uso de IA e Apresentação da Equipe */}
      <div style={styles.twoColGrid}>
        <section style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <span style={styles.stepNumber}>02</span>
            <h2 style={styles.sectionTitle}>O Projeto KIDDOS & Uso de IA</h2>
          </div>
          <p style={styles.paragraph}>
            O <strong>KIDDOS</strong> nasceu na disciplina de Desenvolvimento de Plataformas Web com o
            propósito de dar visibilidade e acesso contínuo aos jogos educativos produzidos pelos alunos
            do Centro de Ciências Tecnológicas (CCT/UNIFOR) para a comunidade escolar da{' '}
            <strong>Escola Maria de Carvalho Martins</strong>.
          </p>
          <p style={styles.paragraph}>
            <strong>Como a Inteligência Artificial foi utilizada:</strong> Utilizamos ferramentas de IA
            generativa como apoio na prototipação rápida de interfaces em React + Vite, estruturação de
            endpoints TypeScript/Express com Prisma ORM, revisão de textos de apresentação e diagnóstico
            de integração Git/Vercel. Toda a arquitetura, regras de negócio e validação de build foram
            conduzidas e revisadas pela equipe.
          </p>
        </section>

        <section style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <span style={styles.stepNumber}>03</span>
            <h2 style={styles.sectionTitle}>Apresentação da Equipe</h2>
          </div>
          <p style={styles.paragraph}>
            Somos uma equipe de quatro graduandos em <strong>Ciência da Computação na UNIFOR</strong>,
            unindo o desenvolvimento do portal <strong>KIDDOS</strong> à responsabilidade de atuar como
            <strong> Equipe Base & Integração</strong> deste Portfólio Coletivo.
          </p>
          <p style={styles.paragraph}>
            <strong>Dinâmica de Trabalho:</strong> Trabalhamos de forma colaborativa e modular —
            enquanto parte do grupo estruturou o repositório, o roteamento dinâmico e o deploy contínuo
            na Vercel para toda a turma, o restante concentrou-se na identidade visual institucional,
            curadoria dos conteúdos do KIDDOS e validação técnica das entregas.
          </p>
        </section>
      </div>

      {/* Pilares do KIDDOS */}
      <section style={styles.pillarsGrid}>
        {KIDDOS_HIGHLIGHTS.map((item) => (
          <div key={item.title} style={styles.pillarCard}>
            <h3 style={styles.pillarTitle}>{item.title}</h3>
            <p style={styles.pillarDesc}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. Ficha Técnica Individual dos Membros */}
      <section style={styles.sectionCard}>
        <div style={styles.sectionHeader}>
          <span style={styles.stepNumber}>04</span>
          <div>
            <h2 style={styles.sectionTitle}>Ficha Técnica Individual dos Integrantes</h2>
            <p style={styles.sectionSubtitle}>
              Atuação no projeto KIDDOS e na arquitetura base do Portfólio Coletivo
            </p>
          </div>
        </div>

        <div style={styles.membersGrid}>
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} style={styles.memberCard}>
              <div>
                <div style={styles.memberTop}>
                  <div style={styles.avatar}>
                    {member.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 style={styles.memberName}>{member.name}</h3>
                    <span style={styles.memberRole}>{member.role}</span>
                  </div>
                </div>

                <p style={styles.memberBio}>{member.bio}</p>
              </div>

              <div>
                <div style={styles.skillsContainer}>
                  {member.skills.map((skill) => (
                    <span key={skill} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.profileLink}
                >
                  Perfil GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  backLink: {
    color: 'var(--unifor-blue-primary)',
    fontWeight: '600',
    fontSize: '0.92rem',
  },
  folderTag: {
    fontFamily: 'monospace',
    fontSize: '0.82rem',
    backgroundColor: 'var(--unifor-blue-soft)',
    color: 'var(--unifor-blue-primary)',
    padding: '0.3rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid #bae6fd',
  },
  headerCard: {
    background: 'linear-gradient(135deg, var(--unifor-blue-dark) 0%, var(--unifor-blue-primary) 100%)',
    color: '#ffffff',
    padding: '2.75rem 2rem',
    borderRadius: '16px',
    marginBottom: '2rem',
    borderBottom: '4px solid var(--unifor-blue-accent)',
    boxShadow: '0 8px 24px rgba(0, 40, 85, 0.12)',
  },
  badgesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginBottom: '1rem',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    color: '#e0f2fe',
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '0.35rem 0.9rem',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  projectBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(0, 159, 227, 0.25)',
    border: '1px solid rgba(125, 211, 252, 0.45)',
    color: '#ffffff',
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '0.35rem 0.9rem',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '0.75rem',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#dbeafe',
    maxWidth: '780px',
    lineHeight: '1.6',
  },
  sectionCard: {
    backgroundColor: 'var(--unifor-surface)',
    border: '1px solid var(--unifor-border)',
    borderRadius: '14px',
    padding: '2rem',
    marginBottom: '1.75rem',
    boxShadow: '0 4px 14px rgba(0, 40, 85, 0.04)',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    marginBottom: '1.35rem',
    paddingBottom: '0.85rem',
    borderBottom: '1px solid var(--unifor-border)',
  },
  stepNumber: {
    backgroundColor: 'var(--unifor-blue-primary)',
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '0.85rem',
    padding: '0.4rem 0.65rem',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
  },
  sectionSubtitle: {
    fontSize: '0.88rem',
    color: 'var(--unifor-text-muted)',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundColor: '#001d3d',
    border: '1px solid var(--unifor-border)',
    marginBottom: '1.25rem',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
  referenceBox: {
    backgroundColor: '#f8fafc',
    borderLeft: '4px solid var(--unifor-blue-accent)',
    padding: '1rem 1.25rem',
    borderRadius: '0 8px 8px 0',
    fontSize: '0.92rem',
    color: 'var(--unifor-text-main)',
  },
  referenceText: {
    marginTop: '0.35rem',
    color: 'var(--unifor-text-muted)',
    lineHeight: '1.55',
  },
  twoColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.75rem',
  },
  paragraph: {
    color: 'var(--unifor-text-muted)',
    fontSize: '0.96rem',
    lineHeight: '1.65',
    marginBottom: '1rem',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem',
    marginBottom: '1.75rem',
  },
  pillarCard: {
    backgroundColor: 'var(--unifor-blue-soft)',
    border: '1px solid #bae6fd',
    borderRadius: '12px',
    padding: '1.35rem',
  },
  pillarTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
    marginBottom: '0.45rem',
  },
  pillarDesc: {
    fontSize: '0.9rem',
    color: 'var(--unifor-text-main)',
    lineHeight: '1.5',
  },
  membersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.35rem',
  },
  memberCard: {
    backgroundColor: '#f8fafc',
    border: '1px solid var(--unifor-border)',
    borderRadius: '12px',
    padding: '1.4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  memberTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    marginBottom: '0.9rem',
  },
  avatar: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--unifor-blue-dark), var(--unifor-blue-accent))',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  memberName: {
    fontSize: '1.02rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
    lineHeight: '1.25',
  },
  memberRole: {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--unifor-blue-primary)',
    marginTop: '0.2rem',
  },
  memberBio: {
    fontSize: '0.88rem',
    color: 'var(--unifor-text-muted)',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '1rem',
  },
  skillTag: {
    backgroundColor: 'var(--unifor-blue-soft)',
    color: 'var(--unifor-blue-primary)',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.22rem 0.6rem',
    borderRadius: '6px',
  },
  profileLink: {
    fontSize: '0.84rem',
    fontWeight: '600',
    color: 'var(--unifor-blue-primary)',
    alignSelf: 'flex-start',
  },
};