import { Link } from 'react-router-dom';
import { teamsConfig } from '../data/teamsConfig';

export default function Home() {
  return (
    <div>
      {/* Banner Hero Institucional */}
      <section style={styles.heroWrapper}>
        <div style={styles.heroContainer}>
          <div style={styles.pill}>
            <span>🎓</span> Ciência da Computação • UNIFOR
          </div>
          <h1 style={styles.heroTitle}>
            Portfólio Web Coletivo da Turma
          </h1>
          <p style={styles.heroSubtitle}>
            Plataforma colaborativa construída em <strong>React + Vite</strong>, integrando
            múltiplas equipes via fluxo Git Flow no GitHub com deploy contínuo na Vercel.
          </p>

          <div style={styles.statsRow}>
            <div style={styles.statBox}>
              <span style={styles.statNumber}>{teamsConfig.length}</span>
              <span style={styles.statLabel}>Equipes Integradas</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statBox}>
              <span style={styles.statNumber}>React + Vite</span>
              <span style={styles.statLabel}>Arquitetura Modular</span>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statBox}>
              <span style={styles.statNumber}>CI/CD</span>
              <span style={styles.statLabel}>GitHub & Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main style={styles.main}>
        {/* Seção Foto Oficial da Turma */}
        <section style={styles.photoSection}>
          <div style={styles.photoHeader}>
            <span style={styles.photoBadge}>Registro Oficial • CCT</span>
            <h2 style={styles.photoTitle}>Turma de Desenvolvimento de Plataformas Web</h2>
            <p style={styles.photoSubtitle}>
              Equipes reunidas no laboratório do Centro de Ciências Tecnológicas (UNIFOR) durante a execução do Desafio Integrador.
            </p>
          </div>

          <figure style={styles.figure}>
            <img
              src="/turma-unifor.jpeg"
              alt="Foto oficial da turma de Ciência da Computação da UNIFOR no laboratório"
              style={styles.teamPhoto}
            />
            <figcaption style={styles.figcaption}>
              Universidade de Fortaleza (UNIFOR) • Desafio Integrador — Portfólio Coletivo (2026)
            </figcaption>
          </figure>
        </section>

        {/* Grid de Equipes */}
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>Vitrine das Equipes</h2>
            <p style={styles.sectionDesc}>
              Explore as entregas, vídeos demonstrativos e fichas técnicas desenvolvidas pela turma.
            </p>
          </div>
          <span style={styles.countBadge}>
            {teamsConfig.length} {teamsConfig.length === 1 ? 'equipe publicada' : 'equipes publicadas'}
          </span>
        </div>

        <div style={styles.grid}>
          {teamsConfig.map((team) => (
            <article key={team.id} style={styles.card}>
              <div style={styles.cardTopAccent} />
              <div style={styles.cardBody}>
                <div style={styles.cardMeta}>
                  <span style={styles.teamBadge}>{team.name}</span>
                  <span style={styles.routeTag}>/equipe/{team.slug}</span>
                </div>

                <h3 style={styles.cardTitle}>{team.title}</h3>
                <p style={styles.cardDesc}>{team.description}</p>
              </div>

              <div style={styles.cardFooter}>
                <div style={styles.membersBox}>
                  <span style={styles.membersLabel}>Integrantes:</span>
                  <p style={styles.membersList}>{team.members.join(' • ')}</p>
                </div>

                <Link to={`/equipe/${team.slug}`} style={styles.ctaButton}>
                  Acessar Entrega
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  heroWrapper: {
    background: 'linear-gradient(135deg, var(--unifor-blue-dark) 0%, var(--unifor-blue-primary) 100%)',
    color: '#ffffff',
    padding: '4rem 1.5rem 4.5rem',
    borderBottom: '4px solid var(--unifor-blue-accent)',
  },
  heroContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(125, 211, 252, 0.35)',
    color: '#e0f2fe',
    padding: '0.4rem 1rem',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.25rem',
  },
  heroTitle: {
    fontSize: '2.6rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
    lineHeight: '1.15',
  },
  heroSubtitle: {
    fontSize: '1.12rem',
    color: '#dbeafe',
    maxWidth: '680px',
    margin: '0 auto 2.25rem',
    lineHeight: '1.6',
  },
  statsRow: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    backgroundColor: 'rgba(0, 29, 61, 0.55)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '1rem 2rem',
    borderRadius: '12px',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#38bdf8',
  },
  statLabel: {
    fontSize: '0.78rem',
    color: '#cbd5e1',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  statDivider: {
    width: '1px',
    height: '28px',
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  main: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  photoSection: {
    backgroundColor: 'var(--unifor-surface)',
    borderRadius: '16px',
    border: '1px solid var(--unifor-border)',
    padding: '2rem',
    marginBottom: '3.5rem',
    boxShadow: '0 6px 20px rgba(0, 40, 85, 0.06)',
  },
  photoHeader: {
    textAlign: 'center',
    maxWidth: '720px',
    margin: '0 auto 1.5rem',
  },
  photoBadge: {
    display: 'inline-block',
    backgroundColor: 'var(--unifor-blue-soft)',
    color: 'var(--unifor-blue-primary)',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.3rem 0.85rem',
    borderRadius: '999px',
    marginBottom: '0.6rem',
  },
  photoTitle: {
    fontSize: '1.55rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
    marginBottom: '0.4rem',
  },
  photoSubtitle: {
    color: 'var(--unifor-text-muted)',
    fontSize: '0.95rem',
  },
  figure: {
    margin: 0,
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--unifor-border)',
    backgroundColor: '#001d3d',
  },
  teamPhoto: {
    width: '100%',
    maxHeight: '540px',
    objectFit: 'cover',
    objectPosition: 'center 35%',
    display: 'block',
  },
  figcaption: {
    padding: '0.85rem 1.25rem',
    backgroundColor: 'var(--unifor-blue-dark)',
    color: '#cbd5e1',
    fontSize: '0.85rem',
    textAlign: 'center',
    fontWeight: '500',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid var(--unifor-border)',
  },
  sectionTitle: {
    fontSize: '1.65rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
  },
  sectionDesc: {
    color: 'var(--unifor-text-muted)',
    fontSize: '0.95rem',
    marginTop: '0.25rem',
  },
  countBadge: {
    backgroundColor: 'var(--unifor-blue-soft)',
    color: 'var(--unifor-blue-primary)',
    fontWeight: '600',
    fontSize: '0.85rem',
    padding: '0.4rem 0.9rem',
    borderRadius: '999px',
    border: '1px solid #bae6fd',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
    gap: '1.75rem',
  },
  card: {
    backgroundColor: 'var(--unifor-surface)',
    borderRadius: '12px',
    border: '1px solid var(--unifor-border)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 14px rgba(0, 40, 85, 0.05)',
  },
  cardTopAccent: {
    height: '5px',
    background: 'linear-gradient(90deg, var(--unifor-blue-primary), var(--unifor-blue-accent))',
  },
  cardBody: {
    padding: '1.5rem 1.5rem 1rem',
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.85rem',
  },
  teamBadge: {
    backgroundColor: 'var(--unifor-blue-soft)',
    color: 'var(--unifor-blue-primary)',
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    textTransform: 'uppercase',
  },
  routeTag: {
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: '#94a3b8',
  },
  cardTitle: {
    fontSize: '1.22rem',
    fontWeight: '700',
    color: 'var(--unifor-blue-dark)',
    marginBottom: '0.6rem',
    lineHeight: '1.35',
  },
  cardDesc: {
    color: 'var(--unifor-text-muted)',
    fontSize: '0.94rem',
    lineHeight: '1.55',
  },
  cardFooter: {
    padding: '0 1.5rem 1.5rem',
  },
  membersBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #edf2f7',
    borderRadius: '8px',
    padding: '0.75rem',
    marginBottom: '1.15rem',
  },
  membersLabel: {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: '0.2rem',
  },
  membersList: {
    fontSize: '0.84rem',
    color: 'var(--unifor-text-main)',
    fontWeight: '500',
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
    backgroundColor: 'var(--unifor-blue-primary)',
    color: '#ffffff',
    padding: '0.72rem 1rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.92rem',
    boxShadow: '0 2px 6px rgba(0, 75, 141, 0.25)',
  },
};