export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <strong style={styles.title}>UNIFOR — Universidade de Fortaleza</strong>
          <p style={styles.subtitle}>
            Centro de Ciências Tecnológicas (CCT) • Curso de Ciência da Computação
          </p>
        </div>
        <div style={styles.right}>
          <span>Desafio Integrador — Portfólio Coletivo</span>
          <span style={styles.tech}>React • Vite • GitHub • Vercel</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--unifor-blue-dark)',
    color: '#cbd5e1',
    borderTop: '3px solid var(--unifor-blue-accent)',
    padding: '2rem 1.5rem',
    marginTop: '4rem',
  },
  container: {
    maxWidth: '1160px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  title: {
    color: '#ffffff',
    fontSize: '1rem',
    display: 'block',
    marginBottom: '0.25rem',
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
  right: {
    textAlign: 'right',
    fontSize: '0.85rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  tech: {
    color: '#38bdf8',
    fontWeight: '600',
    fontSize: '0.8rem',
  },
};