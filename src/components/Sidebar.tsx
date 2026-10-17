import type { Screen } from '../types'

interface Props {
  current: Screen
  onNav: (s: Screen) => void
  role: string
}

const navGroups = [
  {
    label: 'PUBLIC',
    items: [
      { id: 'landing', icon: '⊕', label: 'Home' },
      { id: 'login', icon: '◉', label: 'Sign In / Register' },
    ],
  },
  {
    label: 'CITIZEN',
    items: [
      { id: 'citizen', icon: '◈', label: 'Citizen Dashboard' },
      { id: 'report', icon: '⚠', label: 'Report Emergency' },
      { id: 'ai-analysis', icon: '◆', label: 'AI Analysis' },
    ],
  },
  {
    label: 'AUTHORITY',
    items: [
      { id: 'authority', icon: '⊞', label: 'Command Center' },
      { id: 'incident', icon: '◎', label: 'Incident Detail' },
    ],
  },
  {
    label: 'PARTNERS',
    items: [
      { id: 'ngo', icon: '◇', label: 'NGO Dashboard' },
      { id: 'volunteer', icon: '◐', label: 'Volunteer Dashboard' },
    ],
  },
  {
    label: 'SYSTEM',
    items: [
      { id: 'offline', icon: '◌', label: 'Offline Mode' },
      { id: 'analytics', icon: '◩', label: 'Analytics' },
    ],
  },
]

export default function Sidebar({ current, onNav, role }: Props) {
  return (
    <aside
      style={{
        width: 220,
        minWidth: 220,
        background: '#0b1422',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '20px 18px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            🛡️
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                fontSize: 15,
                color: '#fff',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
              }}
            >
              DISASTER MANAGEMENT SYSTEM
            </div>
            <div
              style={{
                fontSize: 9,
                color: '#60a5fa',
                letterSpacing: '0.08em',
                fontFamily: 'JetBrains Mono, monospace',
                marginTop: 2,
              }}
            >
              EMERGENCY RESPONSE
            </div>
          </div>
        </div>
        {role && (
          <div
            style={{
              marginTop: 10,
              padding: '3px 8px',
              borderRadius: 4,
              background: 'rgba(37,99,235,0.2)',
              border: '1px solid rgba(96,165,250,0.3)',
              fontSize: 10,
              color: '#93c5fd',
              letterSpacing: '0.06em',
              fontFamily: 'JetBrains Mono, monospace',
              display: 'inline-block',
            }}
          >
            {role}
          </div>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        {navGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: 4 }}>
            <div
              style={{
                fontSize: 9,
                fontFamily: 'JetBrains Mono, monospace',
                color: 'rgba(148,163,184,0.5)',
                letterSpacing: '0.1em',
                padding: '10px 18px 4px',
              }}
            >
              {group.label}
            </div>
            {group.items.map((item) => {
              const active = current === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNav(item.id as Screen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: '8px 18px',
                    background: active ? 'rgba(220,38,38,0.15)' : 'transparent',
                    border: 'none',
                    borderLeft: active ? '3px solid #dc2626' : '3px solid transparent',
                    cursor: 'pointer',
                    color: active ? '#fff' : 'rgba(148,163,184,0.8)',
                    fontSize: 13,
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'
                      ;(e.currentTarget as HTMLButtonElement).style.color = '#e2e8f0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(148,163,184,0.8)'
                    }
                  }}
                >
                  <span style={{ fontSize: 14, width: 18, textAlign: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span style={{ fontWeight: active ? 600 : 400 }}>{item.label}</span>
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: '12px 18px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#10b981',
          }}
          className="live-dot"
        />
        <span style={{ fontSize: 10, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          SYSTEM OPERATIONAL
        </span>
      </div>
    </aside>
  )
}
