import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const tasks = [
  { id: 'TSK-891', title: 'Water distribution — Zone 3A', priority: 'HIGH', status: 'IN PROGRESS', location: 'Jalukbari, Guwahati', due: '2 hrs', items: 'Distribute 200 water packets to 50 households' },
  { id: 'TSK-887', title: 'Evacuation assistance — Block B', priority: 'CRITICAL', status: 'PENDING', location: 'Silpukhuri, Guwahati', due: '45 min', items: 'Help evacuate 12 elderly residents to shelter' },
  { id: 'TSK-880', title: 'Medical camp support', priority: 'MEDIUM', status: 'COMPLETED', location: 'Zone-3 Boundary Camp', due: 'Done', items: 'Assisted medical team — registered 84 patients' },
]

const updates = [
  { msg: 'New task assigned: Evacuation assistance — Block B. Report immediately.', time: '5 min ago', urgent: true },
  { msg: 'Relief supplies truck arriving at Zone-3 depot in 30 minutes. Coordinate receipt.', time: '18 min ago', urgent: false },
  { msg: 'Team leader Ramesh Yadav requests update on water distribution status.', time: '35 min ago', urgent: false },
  { msg: 'NDRF team moving to your sector. Coordinate for joint operation.', time: '1 hr ago', urgent: false },
]

const missionInfo = {
  name: 'Brahmaputra Flood Relief — Guwahati',
  id: 'MSN-142',
  start: '13 Aug 2026',
  org: 'Goonj Foundation',
  lead: 'Ramesh Yadav',
  teammates: 47,
}

export default function VolunteerDashboard({ onNav }: Props) {
  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          VOLUNTEER PORTAL / DASHBOARD
        </div>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
          VOLUNTEER HUB
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          Logged in as Vikram Tiwari — Volunteer ID: VOL-2847 · Verified Relief Worker
        </p>
      </div>

      {/* Status cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Tasks Today', value: '3', sub: '1 completed', color: '#10b981' },
          { label: 'Mission Hours', value: '14.5', sub: 'This deployment', color: '#2563eb' },
          { label: 'People Helped', value: '234', sub: 'All-time', color: '#f59e0b' },
          { label: 'Mission Status', value: 'ACTIVE', sub: missionInfo.name, color: '#dc2626' },
        ].map((k) => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderTop: `3px solid ${k.color}`, borderRadius: 8, padding: '16px' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 30, fontWeight: 800, color: k.color, lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', marginTop: 4 }}>{k.label}</div>
            <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        {/* Main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Current mission */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0f172a, #142742)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 10,
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#60a5fa', letterSpacing: '0.08em', marginBottom: 6 }}>
                  CURRENT MISSION · {missionInfo.id}
                </div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>
                  {missionInfo.name}
                </div>
                <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 12, color: '#94a3b8' }}>
                  <span>📅 Since {missionInfo.start}</span>
                  <span>🏢 {missionInfo.org}</span>
                  <span>👤 Lead: {missionInfo.lead}</span>
                  <span>👥 {missionInfo.teammates} teammates</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} className="live-dot" />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#10b981' }}>ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Assigned tasks */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
                ASSIGNED TASKS
              </h3>
              <span style={{ fontSize: 12, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                2 pending · 1 completed
              </span>
            </div>
            {tasks.map((t) => (
              <div
                key={t.id}
                style={{
                  padding: '18px',
                  border: `1px solid ${t.status === 'COMPLETED' ? '#f1f5f9' : t.priority === 'CRITICAL' ? 'rgba(220,38,38,0.2)' : '#f1f5f9'}`,
                  borderLeft: `4px solid ${t.status === 'COMPLETED' ? '#10b981' : t.priority === 'CRITICAL' ? '#dc2626' : '#f59e0b'}`,
                  borderRadius: 8,
                  marginBottom: 12,
                  background: t.status === 'COMPLETED' ? '#f8fafc' : t.priority === 'CRITICAL' ? 'rgba(220,38,38,0.03)' : '#f8fafc',
                  opacity: t.status === 'COMPLETED' ? 0.7 : 1,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>{t.id}</span>
                      <span
                        style={{
                          padding: '2px 7px',
                          borderRadius: 3,
                          fontSize: 9,
                          fontWeight: 700,
                          fontFamily: 'JetBrains Mono, monospace',
                          background: t.priority === 'CRITICAL' ? 'rgba(220,38,38,0.1)' : t.priority === 'HIGH' ? 'rgba(245,158,11,0.1)' : 'rgba(148,163,184,0.1)',
                          color: t.priority === 'CRITICAL' ? '#dc2626' : t.priority === 'HIGH' ? '#f59e0b' : '#94a3b8',
                        }}
                      >
                        {t.priority}
                      </span>
                      <span
                        style={{
                          padding: '2px 7px',
                          borderRadius: 3,
                          fontSize: 9,
                          fontWeight: 700,
                          fontFamily: 'JetBrains Mono, monospace',
                          background: t.status === 'COMPLETED' ? 'rgba(16,185,129,0.1)' : t.status === 'IN PROGRESS' ? 'rgba(37,99,235,0.1)' : 'rgba(148,163,184,0.1)',
                          color: t.status === 'COMPLETED' ? '#10b981' : t.status === 'IN PROGRESS' ? '#2563eb' : '#94a3b8',
                        }}
                      >
                        {t.status}
                      </span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a' }}>{t.title}</div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>{t.items}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>DUE</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: t.due === 'Done' ? '#10b981' : '#0f172a' }}>{t.due}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, fontSize: 11, color: '#64748b' }}>
                  <span>📍 {t.location}</span>
                </div>
                {t.status !== 'COMPLETED' && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                    <button
                      style={{
                        flex: 1,
                        padding: '8px',
                        background: '#0f172a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 5,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        letterSpacing: '0.04em',
                      }}
                    >
                      🗺️ GET DIRECTIONS
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: '8px',
                        background: '#10b981',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 5,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        letterSpacing: '0.04em',
                      }}
                    >
                      ✓ MARK COMPLETE
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation map */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 14px' }}>
              NAVIGATION MAP
            </h3>
            <div
              style={{
                height: 200,
                background: 'linear-gradient(160deg, #0f172a, #1e3a5f)',
                borderRadius: 8,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              {/* Route line */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 60">
                <path d="M 30 45 L 55 30 L 70 22" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                <circle cx="30" cy="45" r="3" fill="#7c3aed" />
                <text x="22" y="52" fontSize="4" fill="#a78bfa">YOU</text>
                <circle cx="55" cy="30" r="2.5" fill="#f59e0b" />
                <text x="48" y="40" fontSize="4" fill="#f59e0b">TASK 1</text>
                <circle cx="70" cy="22" r="2.5" fill="#dc2626" />
                <text x="64" y="32" fontSize="4" fill="#ef4444">TASK 2</text>
              </svg>
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: 10, color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                Guwahati · Zone 3A · Route optimized
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Updates */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              EMERGENCY UPDATES
            </h3>
            {updates.map((u, i) => (
              <div
                key={i}
                style={{
                  padding: '12px',
                  border: '1px solid #f1f5f9',
                  borderLeft: `3px solid ${u.urgent ? '#dc2626' : '#e2e8f0'}`,
                  borderRadius: 6,
                  marginBottom: 10,
                  background: u.urgent ? 'rgba(220,38,38,0.03)' : '#f8fafc',
                }}
              >
                <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.5 }}>{u.msg}</div>
                <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>{u.time}</div>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div style={{ background: '#0b1422', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              QUICK CONTACT
            </h3>
            {[
              { name: 'Mission Lead: Ramesh Yadav', icon: '👤', color: '#2563eb' },
              { name: 'NDRF Control Room', icon: '🏛️', color: '#ef4444' },
              { name: 'Medical Emergency', icon: '🚑', color: '#10b981' },
              { name: 'NGO Logistics', icon: '📦', color: '#f59e0b' },
            ].map((c) => (
              <button
                key={c.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.03)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  marginBottom: 8,
                  color: '#e2e8f0',
                  fontSize: 12,
                }}
              >
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <span>{c.name}</span>
                <span style={{ marginLeft: 'auto', fontSize: 14 }}>📞</span>
              </button>
            ))}
          </div>

          {/* Check in */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              padding: 20,
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', marginBottom: 12 }}>
              DAILY CHECK-IN
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 16 }}>
              Mark your status so the mission lead knows you're active
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {['CHECKED IN', 'TAKING BREAK', 'NEED HELP', 'OFF DUTY'].map((s) => (
                <button
                  key={s}
                  style={{
                    padding: '9px 6px',
                    border: `1.5px solid ${s === 'CHECKED IN' ? '#10b981' : s === 'NEED HELP' ? '#dc2626' : '#e2e8f0'}`,
                    borderRadius: 6,
                    background: s === 'CHECKED IN' ? 'rgba(16,185,129,0.08)' : s === 'NEED HELP' ? 'rgba(220,38,38,0.08)' : '#f8fafc',
                    color: s === 'CHECKED IN' ? '#059669' : s === 'NEED HELP' ? '#dc2626' : '#64748b',
                    fontSize: 10,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.03em',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
