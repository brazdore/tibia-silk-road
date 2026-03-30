import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import RashidBanner from '@/components/RashidBanner';

export default function Page() {
    return (
        <main className="min-h-screen p-8" style={{backgroundColor: 'rgb(var(--bg))'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem'}}>
                <ThemeToggle />
            </div>
            <header style={{textAlign: 'center', marginBottom: '2rem'}}>
                <Image
                    src="/android-chrome-192x192.png"
                    alt="Tibia Silk Road logo"
                    width={52}
                    height={52}
                    priority
                    style={{margin: '0 auto 0.5rem'}}
                />
                <h1 style={{color: 'rgb(var(--accent-gold))'}} className="text-3xl font-black">
                    Tibia Silk Road
                </h1>
                <p style={{color: 'rgb(var(--muted))'}} className="mt-1 text-xs">
                    Merchant Market NPC Profit Tracker
                </p>
            </header>
            <div>
                <RashidBanner />
            </div>
        </main>
    );
}