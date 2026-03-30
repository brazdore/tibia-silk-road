'use client';

import {useEffect, useState} from 'react';
import {getRashidLocation, isGermanySummerTime, type RashidInfo} from '@/lib/rashid';

const DEV_DATES = [
    {label: 'Sunday – Carlin', value: '2026-03-29T12:00:00Z'},
    {label: 'Monday – Svargrond', value: '2026-03-30T12:00:00Z'},
    {label: 'Tuesday – Liberty Bay', value: '2026-03-31T12:00:00Z'},
    {label: 'Wednesday – Port Hope', value: '2026-04-01T12:00:00Z'},
    {label: 'Thursday – Ankrahmun', value: '2026-04-02T12:00:00Z'},
    {label: 'Friday – Darashia', value: '2026-04-03T12:00:00Z'},
    {label: 'Saturday – Edron', value: '2026-04-04T12:00:00Z'},
];

function getSecondsUntilNextSave(): number {
    const now = new Date();
    const saveHourUTC = isGermanySummerTime(now) ? 8 : 9;
    const todaySave = new Date(Date.UTC(
        now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        saveHourUTC, 0, 0, 0
    ));
    const nextSave = now < todaySave
        ? todaySave
        : new Date(Date.UTC(
            now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1,
            saveHourUTC, 0, 0, 0
        ));
    return Math.floor((nextSave.getTime() - now.getTime()) / 1000);
}

function formatCountdown(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function RashidBanner() {
    const [info, setInfo] = useState<RashidInfo | null>(null);
    const [countdown, setCountdown] = useState(0);
    const [mapOpen, setMapOpen] = useState(false);
    const [mockDate, setMockDate] = useState<Date | undefined>(undefined);

    useEffect(() => {
        function tick() {
            setInfo(getRashidLocation(mockDate ?? new Date()));
            setCountdown(getSecondsUntilNextSave());
        }

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [mockDate]);

    if (!info) return null;

    return (
        <>
            <div style={{
                position: 'fixed',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 50,
                width: '200px',
                borderRadius: '0.75rem',
                border: '1px solid rgb(var(--border))',
                background: 'rgb(var(--panel-strong))',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                padding: '0.75rem 1rem',
                fontFamily: 'var(--font-body)',
            }}>
                {/* DEV only*/}
                {process.env.NODE_ENV === 'development' && (
                    <select
                        value={mockDate?.toISOString() ?? ''}
                        onChange={e => setMockDate(e.target.value ? new Date(e.target.value) : undefined)}
                        style={{
                            width: '100%',
                            marginBottom: '0.5rem',
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.3rem',
                            borderRadius: '0.3rem',
                            border: '1px dashed rgb(var(--border))',
                            background: 'rgba(255,200,0,0.08)',
                            color: 'rgb(var(--muted))',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="">🕐 Now (real time)</option>
                        {DEV_DATES.map(d => (
                            <option key={d.value} value={d.value}>{d.label}</option>
                        ))}
                    </select>
                )}

                <div style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'rgb(var(--muted))'
                }}>
                    🗺️ Rashid is in
                </div>
                <div style={{
                    fontFamily: 'var(--font-display)',
                    color: 'rgb(var(--accent-gold))',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginTop: '0.15rem'
                }}>
                    {info.city}
                </div>
                <div style={{color: 'rgb(var(--soft))', fontSize: '0.72rem', marginTop: '0.1rem', lineHeight: 1.3}}>
                    {info.location}
                </div>
                <div style={{marginTop: '0.5rem', borderTop: '1px solid rgb(var(--border))', paddingTop: '0.4rem'}}>
                    <div style={{
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'rgb(var(--muted))'
                    }}>
                        Next server save
                    </div>
                    <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'rgb(var(--text))',
                        letterSpacing: '0.04em'
                    }}>
                        {formatCountdown(countdown)}
                    </div>
                </div>
                <button
                    onClick={() => setMapOpen(true)}
                    style={{
                        marginTop: '0.6rem',
                        width: '100%',
                        padding: '0.35rem 0',
                        borderRadius: '0.4rem',
                        border: '1px solid rgb(var(--border))',
                        background: 'rgba(var(--accent), 0.08)',
                        color: 'rgb(var(--accent))',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                    }}
                >
                    📍 View on map
                </button>
            </div>

            {/* Map */}
            {mapOpen && (
                <div
                    onClick={() => setMapOpen(false)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 100,
                        background: 'rgba(0,0,0,0.65)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            width: '90vw', maxWidth: '900px', height: '75vh',
                            borderRadius: '1rem',
                            border: '1px solid rgb(var(--border))',
                            overflow: 'hidden',
                            display: 'flex', flexDirection: 'column',
                            background: 'rgb(var(--panel-strong))',
                        }}
                    >
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '0.6rem 1rem',
                            borderBottom: '1px solid rgb(var(--border))',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                color: 'rgb(var(--accent-gold))',
                                fontWeight: 700
                            }}>
                                {info.city} — {info.location}
                            </span>
                            <button
                                onClick={() => setMapOpen(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.25rem',
                                    cursor: 'pointer',
                                    color: 'rgb(var(--muted))'
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <iframe
                            src={info.mapUrl}
                            style={{flex: 1, border: 'none', width: '100%'}}
                            title={`Map — ${info.city}`}
                        />
                    </div>
                </div>
            )}
        </>
    );
}