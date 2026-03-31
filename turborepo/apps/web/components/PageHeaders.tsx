'use client';

import Image from 'next/image';
import {useTranslation} from '@/lib/i18n';

export default function PageHeader() {
    const t = useTranslation();
    return (
        <header style={{textAlign: 'center', marginBottom: '2rem'}}>
            <Image
                src="/android-chrome-192x192.png"
                alt="Tibia Silk Road logo"
                width={52} height={52} priority
                style={{margin: '0 auto 0.5rem'}}
            />
            <h1 style={{color: 'rgb(var(--accent-gold))'}} className="text-3xl font-black">
                Tibia Silk Road
            </h1>
            <p style={{color: 'rgb(var(--muted))'}} className="mt-1 text-xs">
                {t('siteTagline')}
            </p>
        </header>
    );
}