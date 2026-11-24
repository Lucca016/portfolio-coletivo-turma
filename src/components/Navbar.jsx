import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <div style={styles.topBarContent}>
          <span>UNIVERSIDADE DE FORTALEZA • CENTRO DE CIÊNCIAS TECNOLÓGICAS (CCT)</span>
          <span>DESENVOLVIMENTO DE PLATAFORMAS WEB</span>
        </div>
      </div>

      <div style={styles.container}>
        <Link to="/" style={styles.brandGroup}>
          <div style={styles.logoBadge}>U</div>
          <div>
            <span style={styles.brandTitle}>Portfólio Coletivo</span>
            <span style={styles.brandSub}>Desafio Integrador • 2026</span>
          </div>
        </Link>

        <nav style={styles.nav}>
          <Link
            to="/"
            style={{
              ...styles.link,
              ...(location.pathname === '/' ? styles.activeLink : {}),
            }}
          >
            Vitrine Geral
          </Link>
          <Link
            to="/equipe/equipe-base"
            style={{
              ...styles.link,
              ...(location.pathname === '/equipe/equipe-base' ? styles.activeLink : {}),
            }}
          >
            Equipe Base
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--unifor-blue-dark)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 40, 85, 0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  topBar: {
    backgroundColor: '#001d3d',
    fontSize: '0.72rem',
    letterSpacing: '0.05em',
    color: '#93c5fd',
    padding: '0.35rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  topBarContent: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  container: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0.9rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  logoBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, var(--unifor-blue-primary), var(--unifor-blue-accent))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '1.35rem',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0, 159, 227, 0.35)',
  },
  brandTitle: {
    display: 'block',
    fontWeight: '700',
    fontSize: '1.15rem',
    lineHeight: '1.2',
    color: '#ffffff',
  },
  brandSub: {
    display: 'block',
    fontSize: '0.78rem',
    color: '#7dd3fc',
  },
  nav: {
    display: 'flex',
    gap: '0.75rem',
  },
  link: {
    color: '#e2e8f0',
    fontSize: '0.92rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
  },
  activeLink: {
    backgroundColor: 'var(--unifor-blue-primary)',
    color: '#ffffff',
    boxShadow: 'inset 0 -2px 0 var(--unifor-blue-accent)',
  },
};