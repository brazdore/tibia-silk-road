import type {Metadata} from 'next';
import {Cinzel, EB_Garamond} from 'next/font/google';
import './globals.css';
import {LocaleProvider} from '@/lib/i18n';

const display = Cinzel({subsets: ['latin'], variable: '--font-display', weight: ['400', '600', '700', '900']});
const body = EB_Garamond({subsets: ['latin'], variable: '--font-body'});

export const metadata: Metadata = {
    title: 'Tibia Silk Road',
    description: 'Merchant Market NPC Profit Tracker',
    icons: {
        icon: [
            {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
            {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
        <body>
        <LocaleProvider>
            {children}
        </LocaleProvider>
        </body>
        </html>
    );
}