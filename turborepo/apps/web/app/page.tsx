import ThemeToggle from '@/components/ThemeToggle';
import RashidBanner from '@/components/RashidBanner';

export default function Page() {
    return (
        <main className="min-h-screen p-8" style={{backgroundColor: 'rgb(var(--bg))'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem'}}>
                <ThemeToggle/>
            </div>
            <header style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h1 style={{color: 'rgb(var(--accent-gold))'}} className="text-5xl font-black">
                    Tibia Silk Road
                </h1>
                <p style={{color: 'rgb(var(--muted))'}} className="mt-2 text-sm">
                    Merchant Market NPC Profit Tracker
                </p>
            </header>
            <div>
                <RashidBanner/>
            </div>
        </main>
    );
}