'use client';

import {useTranslation} from '@/lib/i18n';

export default function Footer() {
    const t = useTranslation();
    const year = new Date().getFullYear();
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
            <p style={{margin: '0 0 0.35rem 0', fontWeight: 600, color: 'rgb(var(--text))'}}>
                {t('footerCopyright').replace('{year}', String(year))}
            </p>
            <p style={{margin: 0, maxWidth: '560px', marginInline: 'auto'}}>
                <a href="https://www.tibia.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Tibia
                </a>
                {' '}{t('footerIsA')}{' '}
                <a href="https://www.cipsoft.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    CipSoft GmbH
                </a>
                . {t('footerAllContent')}{' '}
                <a href="https://www.tibia.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    Tibia.com
                </a>
                {' '}/
                <a href="https://www.cipsoft.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    CipSoft GmbH
                </a>
                . {t('footerNotAffiliated')}
            </p>
        </footer>
    );
}

const linkStyle: React.CSSProperties = {
    color: 'rgb(var(--accent))',
    textDecoration: 'none',
    fontWeight: 500,
};