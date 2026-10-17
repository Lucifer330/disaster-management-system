import { useState, useEffect } from 'react'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const pendingReports = [
  { id: 'OFF-001', type: 'FLOOD', loc: 'Jalukbari, Guwahati', time: '12:34 PM', severity: 5, size: '2.3 MB', status: 'QUEUED' },
  { id: 'OFF-002', type: 'MEDICAL', loc: 'Silpukhuri, Guwahati', time: '12:41 PM', severity: 4, size: '1.1 MB', status: 'QUEUED' },
  { id: 'OFF-003', type: 'FLOOD', loc: 'Noonmati, Guwahati', time: '1:02 PM', severity: 3, size: '0.8 MB', status: 'QUEUED' },
  { id: 'OFF-004', type: 'FIRE', loc: 'Dispur, Guwahati', time: '1:18 PM', severity: 4, size: '3.4 MB', status: 'QUEUED' },
  { id: 'OFF-005', type: 'LANDSLIDE', loc: 'Khanapara, Guwahati', time: '1:35 PM', severity: 5, size: '1.9 MB', status: 'SYNCING' },
]

const localData = [
  { label: 'Emergency Contacts', items: 24, size: '4 KB', icon: '📞' },
  { label: 'Shelter Locations', items: 18, size: '12 KB', icon: '🏕️' },
  { label: 'Disaster Guidelines', items: 8, size: '280 KB', icon: '📋' },
  { label: 'District Maps', items: 6, size: '4.2 MB', icon: '🗺️' },
  { label: 'First Aid Manual', items: 1, size: '1.1 MB', icon: '🏥' },
]

export default function OfflineMode({ onNav }: Props) {
  const [syncProgress, setSyncProgress] = useState(0)
  const [syncing, setSyncing] = useState(false)
  const [synced, setSynced] = useState(false)
  const [storageUsed] = useState(72)

  const handleSync = () => {
    setSyncing(true)
    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setSyncing(false)
          setSynced(true)
          return 100
        }
        return prev + 5
      })
    }, 120)
  }

  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          SYSTEM / OFFLINE MODE
        </div>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
          OFFLINE MODE
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          Network unavailable. Reports stored locally and will sync when connected.
        </p>
      </div>

      {/* Status banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
          border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: 10,
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 48 }}>📡</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 22, fontWeight: 800, color: '#fbbf24', letterSpacing: '0.02em' }}>
            NO INTERNET CONNECTION
          </div>
          <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4, lineHeight: 1.5 }}>
            Disaster Management System is running in offline mode. You can still file emergency reports — they are saved locally and will automatically sync when connectivity is restored.
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', marginBottom: 4 }}>LAST CONNECTED</div>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>42 min ago</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#f59e0b' }}>1:14 PM IST</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 300px', gap: 20 }}>
        {/* Pending reports */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
              PENDING REPORTS QUEUE
            </h3>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 12,
                background: 'rgba(245,158,11,0.1)',
                color: '#f59e0b',
                fontSize: 12,
                fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              5 QUEUED
            </span>
          </div>
          {pendingReports.map((r, i) => (
            <div
              key={r.id}
              style={{
                padding: '14px',
                border: '1px solid #f1f5f9',
                borderLeft: `3px solid ${r.status === 'SYNCING' ? '#10b981' : '#f59e0b'}`,
                borderRadius: 6,
                marginBottom: 10,
                background: '#f8fafc',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>{r.id}</span>
                  <span
                    style={{
                      padding: '1px 6px',
                      borderRadius: 3,
                      fontSize: 9,
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                      background:
                        r.type === 'FLOOD' ? 'rgba(59,130,246,0.1)' :
                        r.type === 'MEDICAL' ? 'rgba(16,185,129,0.1)' :
                        r.type === 'FIRE' ? 'rgba(220,38,38,0.1)' :
                        'rgba(161,98,7,0.1)',
                      color:
                        r.type === 'FLOOD' ? '#3b82f6' :
                        r.type === 'MEDICAL' ? '#10b981' :
                        r.type === 'FIRE' ? '#dc2626' :
                        '#a16207',
                    }}
                  >
                    {r.type}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    color: r.status === 'SYNCING' ? '#10b981' : '#f59e0b',
                  }}
                >
                  {r.status === 'SYNCING' ? '⟳ SYNCING...' : '⏳ ' + r.status}
                </span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{r.loc}</div>
              <div style={{ display: 'flex', gap: 14, marginTop: 4, fontSize: 11, color: '#94a3b8' }}>
                <span>⏱ {r.time}</span>
                <span>💾 {r.size}</span>
                <span>{'🔴'.repeat(Math.min(r.severity, 5))}</span>
              </div>
            </div>
          ))}
          <button
            onClick={() => onNav('report')}
            style={{
              width: '100%',
              padding: '10px',
              background: '#0f172a',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif',
              letterSpacing: '0.06em',
              marginTop: 4,
            }}
          >
            + FILE NEW OFFLINE REPORT
          </button>
        </div>

        {/* Local storage */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
              LOCAL DATA STORAGE
            </h3>
            {/* Storage gauge */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                <span style={{ color: '#64748b' }}>Device Storage Used</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: storageUsed > 80 ? '#ef4444' : '#0f172a' }}>
                  {storageUsed}% ({(storageUsed * 0.5).toFixed(0)} MB / 50 MB)
                </span>
              </div>
              <div style={{ height: 12, background: '#f1f5f9', borderRadius: 6, overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${storageUsed}%`,
                    background: storageUsed > 80 ? 'linear-gradient(90deg, #dc2626, #ef4444)' : 'linear-gradient(90deg, #2563eb, #3b82f6)',
                    borderRadius: 6,
                    transition: 'width 0.6s ease',
                  }}
                />
              </div>
            </div>

            {localData.map((d) => (
              <div
                key={d.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  border: '1px solid #f1f5f9',
                  borderRadius: 6,
                  marginBottom: 8,
                  background: '#f8fafc',
                }}
              >
                <span style={{ fontSize: 20 }}>{d.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{d.label}</div>
                  <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1 }}>{d.items} items · {d.size}</div>
                </div>
                <span style={{ fontSize: 11, color: '#10b981', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                  ✓ CACHED
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sync status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              AUTO SYNC STATUS
            </h3>
            {[
              { label: 'Sync Mode', value: 'AUTO', color: '#10b981' },
              { label: 'Retry Interval', value: '30 seconds', color: '#2563eb' },
              { label: 'Data Compressed', value: 'YES', color: '#10b981' },
              { label: 'Encryption', value: 'AES-256', color: '#10b981' },
              { label: 'Reports Queued', value: '5', color: '#f59e0b' },
              { label: 'Total Size', value: '9.5 MB', color: '#475569' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f8fafc' }}>
                <span style={{ fontSize: 12, color: '#475569' }}>{s.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: s.color }}>{s.value}</span>
              </div>
            ))}

            {/* Manual sync */}
            <div style={{ marginTop: 16 }}>
              {syncing && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#64748b', marginBottom: 5, fontFamily: 'JetBrains Mono, monospace' }}>
                    <span>SYNCING... {Math.round(syncProgress / 20)}/5 reports</span>
                    <span>{syncProgress}%</span>
                  </div>
                  <div style={{ height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${syncProgress}%`,
                        background: 'linear-gradient(90deg, #10b981, #34d399)',
                        borderRadius: 3,
                        transition: 'width 0.2s ease',
                      }}
                    />
                  </div>
                </div>
              )}
              {synced ? (
                <div
                  style={{
                    padding: '12px',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: 6,
                    textAlign: 'center',
                    color: '#10b981',
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: 'Barlow Condensed, sans-serif',
                  }}
                >
                  ✓ ALL REPORTS SYNCED
                </div>
              ) : (
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  style={{
                    width: '100%',
                    padding: '11px',
                    background: syncing ? '#e2e8f0' : '#0f172a',
                    color: syncing ? '#94a3b8' : '#fff',
                    border: 'none',
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: syncing ? 'default' : 'pointer',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    letterSpacing: '0.06em',
                  }}
                >
                  {syncing ? '⟳ SYNCING...' : '⟳ MANUAL SYNC NOW'}
                </button>
              )}
            </div>
          </div>

          {/* Offline capabilities */}
          <div style={{ background: '#0b1422', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 12px' }}>
              OFFLINE CAPABILITIES
            </h3>
            {[
              { label: 'File emergency reports', ok: true },
              { label: 'View cached alerts', ok: true },
              { label: 'Access shelter locations', ok: true },
              { label: 'Emergency contacts', ok: true },
              { label: 'First aid guidelines', ok: true },
              { label: 'Live incident map', ok: false },
              { label: 'Real-time updates', ok: false },
              { label: 'AI analysis', ok: false },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0' }}>
                <span style={{ fontSize: 12, color: item.ok ? '#10b981' : '#475569' }}>
                  {item.ok ? '✓' : '✗'}
                </span>
                <span style={{ fontSize: 12, color: item.ok ? '#e2e8f0' : '#475569' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
