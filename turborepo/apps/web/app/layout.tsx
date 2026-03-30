import type { Metadata } from 'next';
import { Cinzel, EB_Garamond } from 'next/font/google';
import './globals.css';

const display = Cinzel({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '600', '700', '900'],
});

const body = EB_Garamond({
    subsets: ['latin'],
    variable: '--font-body',
});

export const metadata: Metadata = {
    title: 'Tibia Silk Road',
    description: 'Merchant Market NPC Profit Tracker',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
        <body>{children}</body>
        </html>
    );
}