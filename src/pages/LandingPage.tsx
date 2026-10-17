import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const stats = [
  { value: '2,847', label: 'Active Incidents', color: '#ef4444', icon: '⚠' },
  { value: '18,392', label: 'Lives Assisted', color: '#10b981', icon: '❤' },
  { value: '4,219', label: 'Volunteers Deployed', color: '#60a5fa', icon: '◉' },
  { value: '312', label: 'Relief Camps Active', color: '#f59e0b', icon: '⊞' },
]

const alerts = [
  {
    type: 'FLOOD',
    level: 'CRITICAL',
    location: 'Assam — Brahmaputra Basin',
    time: '12 min ago',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
  },
  {
    type: 'CYCLONE',
    level: 'HIGH',
    location: 'Odisha — Coastal Districts',
    time: '34 min ago',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    type: 'LANDSLIDE',
    level: 'CRITICAL',
    location: 'Himachal Pradesh — Kullu',
    time: '1 hr ago',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
  },
  {
    type: 'EARTHQUAKE',
    level: 'MODERATE',
    location: 'Gujarat — Kutch Region',
    time: '2 hr ago',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
  },
]

const features = [
  {
    icon: '🧠',
    title: 'AI Priority Scoring',
    desc: 'Machine learning triage assigns severity scores to incoming reports in under 2 seconds',
  },
  {
    icon: '📡',
    title: 'Offline Reporting',
    desc: 'Citizens file reports without internet. Data syncs automatically when connectivity resumes',
  },
  {
    icon: '🗺️',
    title: 'Live Disaster Heatmap',
    desc: 'Real-time geospatial visualization of all active incidents across India',
  },
  {
    icon: '🤝',
    title: 'NGO & Volunteer Hub',
    desc: 'Centralized coordination platform for 4,000+ registered relief organizations',
  },
  {
    icon: '📦',
    title: 'Resource Allocation',
    desc: 'Predictive resource matching between incident demand and available inventory',
  },
  {
    icon: '🔔',
    title: 'Multi-channel Alerts',
    desc: 'Push, SMS, and IVR alerts in 12 regional languages across all disaster zones',
  },
]

export default function LandingPage({ onNav }: Props) {
  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh' }}>
      {/* Top bar */}
      <div
        style={{
          background: '#0b1422',
          padding: '0 40px',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(220,38,38,0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#ef4444',
              display: 'inline-block',
              animation: 'blink 1.2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: '#ef4444',
              letterSpacing: '0.1em',
            }}
          >
            NATIONAL DISASTER RESPONSE SYSTEM — LIVE
          </span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            3 CRITICAL ALERTS ACTIVE
          </span>
          <button
            onClick={() => onNav('login')}
            style={{
              background: '#dc2626',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(160deg, #0b1422 0%, #0f1f35 50%, #142742 100%)',
          padding: '80px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Red accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, #dc2626, #b91c1c, transparent)',
          }}
        />

        <div style={{ position: 'relative', maxWidth: 900 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              borderRadius: 4,
              background: 'rgba(220,38,38,0.15)',
              border: '1px solid rgba(220,38,38,0.4)',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} className="live-dot" />
            <span style={{ fontSize: 11, color: '#fca5a5', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}>
              POWERED BY AI — NATIONAL DISASTER RESPONSE AUTHORITY OF INDIA
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 800,
              fontSize: 72,
              color: '#fff',
              margin: 0,
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
            }}
          >
            DISASTER
            <span style={{ color: '#dc2626' }}> MANAGEMENT SYSTEM</span>
          </h1>
          <p
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 500,
              fontSize: 24,
              color: '#93c5fd',
              marginTop: 8,
              letterSpacing: '0.12em',
            }}
          >
            UNIFIED DISASTER RESPONSE PLATFORM
          </p>
          <p
            style={{
              fontSize: 16,
              color: 'rgba(203,213,225,0.8)',
              marginTop: 20,
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Connecting Citizens, Government Authorities, NGOs, and Volunteers in real-time
            during floods, earthquakes, cyclones, and landslides across India.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <button
              onClick={() => onNav('citizen')}
              style={{
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '14px 28px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                fontFamily: 'Barlow Condensed, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              🚨 REPORT EMERGENCY
            </button>
            <button
              onClick={() => onNav('authority')}
              style={{
                background: 'rgba(37,99,235,0.2)',
                color: '#93c5fd',
                border: '1px solid rgba(37,99,235,0.5)',
                borderRadius: 6,
                padding: '14px 28px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                fontFamily: 'Barlow Condensed, sans-serif',
              }}
            >
              COMMAND CENTER →
            </button>
            <button
              onClick={() => onNav('analytics')}
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#cbd5e1',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 6,
                padding: '14px 28px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                fontFamily: 'Barlow Condensed, sans-serif',
              }}
            >
              VIEW ANALYTICS
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid #e2e8f0',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: '24px 20px',
              borderRight: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: s.color + '18',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                color: s.color,
                flexShrink: 0,
              }}
            >
              {s.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '48px 40px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 28 }}>
          {/* Active Alerts */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '0.04em',
                  margin: 0,
                }}
              >
                ACTIVE DISASTER ALERTS
              </h2>
              <span style={{ fontSize: 11, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                Updated 2 min ago
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {alerts.map((a) => (
                <div
                  key={a.location}
                  style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderLeft: `4px solid ${a.color}`,
                    borderRadius: 8,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={() => onNav('incident')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: 4,
                        background: a.bg,
                        color: a.color,
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {a.type}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 14 }}>{a.location}</div>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{a.time}</div>
                    </div>
                  </div>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 4,
                      background: a.level === 'CRITICAL' ? 'rgba(239,68,68,0.1)' : a.level === 'HIGH' ? 'rgba(245,158,11,0.1)' : 'rgba(167,139,250,0.1)',
                      color: a.level === 'CRITICAL' ? '#ef4444' : a.level === 'HIGH' ? '#f59e0b' : '#a78bfa',
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {a.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Features */}
            <h2
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '0.04em',
                margin: '40px 0 20px',
              }}
            >
              PLATFORM CAPABILITIES
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 10,
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a', marginBottom: 6 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Quick Access */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '0.04em',
                  margin: '0 0 16px',
                }}
              >
                QUICK ACCESS
              </h3>
              {[
                { label: 'Citizen Dashboard', screen: 'citizen' as Screen, color: '#dc2626', icon: '👤' },
                { label: 'Authority Command', screen: 'authority' as Screen, color: '#1d4ed8', icon: '🏛️' },
                { label: 'NGO Dashboard', screen: 'ngo' as Screen, color: '#059669', icon: '🤝' },
                { label: 'Volunteer Portal', screen: 'volunteer' as Screen, color: '#7c3aed', icon: '🦺' },
                { label: 'Analytics Center', screen: 'analytics' as Screen, color: '#0891b2', icon: '📊' },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNav(item.screen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #f1f5f9',
                    borderRadius: 6,
                    background: '#f8fafc',
                    cursor: 'pointer',
                    marginBottom: 8,
                    textAlign: 'left',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = item.color + '10'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = item.color + '40'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#f8fafc'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#f1f5f9'
                  }}
                >
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#334155' }}>{item.label}</span>
                  <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: 12 }}>→</span>
                </button>
              ))}
            </div>

            {/* Emergency SOS */}
            <div
              style={{
                background: 'linear-gradient(135deg, #7f1d1d, #991b1b)',
                border: '1px solid rgba(220,38,38,0.4)',
                borderRadius: 10,
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 14,
                  color: '#fca5a5',
                  letterSpacing: '0.1em',
                  marginBottom: 12,
                }}
              >
                IN IMMEDIATE DANGER?
              </div>
              <button
                onClick={() => onNav('report')}
                style={{
                  position: 'relative',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: '#dc2626',
                  color: '#fff',
                  border: '3px solid #ef4444',
                  fontSize: 13,
                  fontWeight: 800,
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  marginBottom: 12,
                }}
                className="sos-pulse"
              >
                SOS
              </button>
              <div style={{ fontSize: 12, color: '#fca5a5', lineHeight: 1.5 }}>
                Tap to send emergency alert with your GPS location to nearest response team
              </div>
            </div>

            {/* System Status */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                padding: '20px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '0.06em',
                  margin: '0 0 14px',
                }}
              >
                SYSTEM STATUS
              </h3>
              {[
                { label: 'AI Analysis Engine', status: 'OPERATIONAL', color: '#10b981' },
                { label: 'Alert Dispatch', status: 'OPERATIONAL', color: '#10b981' },
                { label: 'GPS Tracking', status: 'OPERATIONAL', color: '#10b981' },
                { label: 'Offline Sync', status: 'DEGRADED', color: '#f59e0b' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '6px 0',
                    borderBottom: '1px solid #f8fafc',
                  }}
                >
                  <span style={{ fontSize: 12, color: '#475569' }}>{item.label}</span>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: 'JetBrains Mono, monospace',
                      color: item.color,
                      fontWeight: 600,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: '#0b1422',
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#475569', fontSize: 13, letterSpacing: '0.04em' }}>
          © 2026 DISASTER MANAGEMENT SYSTEM — NATIONAL DISASTER MANAGEMENT AUTHORITY OF INDIA
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#334155' }}>
          v3.2.1 — SMART INDIA HACKATHON 2025
        </div>
      </div>
    </div>
  )
}
