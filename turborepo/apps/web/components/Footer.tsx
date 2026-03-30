export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid rgb(var(--border))',
            marginTop: '3rem',
            padding: '1.5rem 1rem',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'rgb(var(--muted))',
            lineHeight: 1.7,
        }}>
            <p style={{ margin: '0 0 0.35rem 0', fontWeight: 600, color: 'rgb(var(--text))' }}>
                © {new Date().getFullYear()} · Tibia Silk Road
            </p>
            <p style={{ margin: 0, maxWidth: '560px', marginInline: 'auto' }}>
                <a href="https://www.tibia.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Tibia
                </a>
                {' '}is a free massively multiplayer online role-playing game developed and published by{' '}
                <a href="https://www.cipsoft.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    CipSoft GmbH
                </a>
                . All Tibia-related content is &copy;{' '}
                <a href="https://www.tibia.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Tibia.com
                </a>
                {' '}/
                <a href="https://www.tibia.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    CipSoft GmbH
                </a>
                . This site is not affiliated with or endorsed by CipSoft.
            </p>
        </footer>
    );
}

const linkStyle: React.CSSProperties = {
    color: 'rgb(var(--accent))',
    textDecoration: 'none',
    fontWeight: 500,
};