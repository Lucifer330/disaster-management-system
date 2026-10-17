import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const shelters = [
  { name: 'Government High School, Sector 12', dist: '0.8 km', cap: '85%', people: 340, status: 'OPEN' },
  { name: 'Municipal Community Hall, MG Road', dist: '1.4 km', cap: '62%', people: 248, status: 'OPEN' },
  { name: 'Stadium Relief Camp, Nehru Nagar', dist: '2.1 km', cap: '94%', people: 752, status: 'NEAR FULL' },
  { name: 'Primary School, Gandhi Colony', dist: '3.3 km', cap: '41%', people: 164, status: 'OPEN' },
]

const myRequests = [
  { id: 'REQ-4829', type: 'Medical Aid', status: 'IN PROGRESS', time: '45 min ago', team: 'NDRF Team B' },
  { id: 'REQ-4801', type: 'Food & Water', status: 'DELIVERED', time: '3 hrs ago', team: 'Red Cross' },
  { id: 'REQ-4756', type: 'Evacuation', status: 'COMPLETED', time: '1 day ago', team: 'Civil Defense' },
]

const contacts = [
  { name: 'NDMA Control Room', num: '1078', icon: '🏛️' },
  { name: 'National Disaster Helpline', num: '011-26701700', icon: '🆘' },
  { name: 'Ambulance', num: '108', icon: '🚑' },
  { name: 'Police Emergency', num: '100', icon: '👮' },
  { name: 'Fire Brigade', num: '101', icon: '🚒' },
]

const localAlerts = [
  { msg: 'FLOOD WARNING: Water level in Brahmaputra rising. Evacuate Zone-3 immediately.', level: 'CRITICAL', time: '8 min ago' },
  { msg: 'Relief camp at Stadium has food supplies. Proceed if nearby.', level: 'INFO', time: '22 min ago' },
  { msg: 'Road connectivity restored on NH-37. Medical convoy en route.', level: 'UPDATE', time: '1 hr ago' },
]

export default function CitizenDashboard({ onNav }: Props) {
  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
            CITIZEN PORTAL / DASHBOARD
          </div>
          <h1
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 32,
              fontWeight: 800,
              color: '#0f172a',
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            YOUR SAFETY HUB
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
            Logged in as Priya Sharma — Guwahati, Assam
          </p>
        </div>
        {/* SOS */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onNav('report')}
            style={{
              position: 'relative',
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              color: '#fff',
              border: '3px solid #ef4444',
              fontSize: 14,
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              boxShadow: '0 0 0 0 rgba(220,38,38,0.4)',
            }}
            className="sos-pulse"
          >
            SOS
          </button>
          <div style={{ fontSize: 10, color: '#dc2626', marginTop: 6, fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
            TAP TO CALL HELP
          </div>
        </div>
      </div>

      {/* Alert banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #7f1d1d, #991b1b)',
          border: '1px solid rgba(220,38,38,0.4)',
          borderRadius: 8,
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 24,
        }}
      >
        <span style={{ fontSize: 18 }}>⚠️</span>
        <div>
          <span style={{ fontWeight: 600, color: '#fecaca', fontSize: 14 }}>FLOOD ALERT — ZONE 3, GUWAHATI: </span>
          <span style={{ color: '#fca5a5', fontSize: 13 }}>Water level critical. Move to designated shelters immediately. NDRF deployed.</span>
        </div>
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            color: '#f87171',
            flexShrink: 0,
          }}
        >
          8 MIN AGO
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 300px', gap: 20 }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Quick actions */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 20 }}>
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
              QUICK ACTIONS
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { label: 'Report Emergency', icon: '🚨', color: '#dc2626', screen: 'report' as Screen },
                { label: 'Find Shelter', icon: '🏕️', color: '#2563eb', screen: 'citizen' as Screen },
                { label: 'Request Medical', icon: '🏥', color: '#059669', screen: 'report' as Screen },
                { label: 'Request Food', icon: '🍱', color: '#7c3aed', screen: 'report' as Screen },
                { label: 'Missing Person', icon: '🔍', color: '#0891b2', screen: 'report' as Screen },
                { label: 'Volunteer', icon: '🤝', color: '#d97706', screen: 'volunteer' as Screen },
              ].map((a) => (
                <button
                  key={a.label}
                  onClick={() => onNav(a.screen)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    padding: '14px 8px',
                    border: `1.5px solid ${a.color}25`,
                    borderRadius: 8,
                    background: a.color + '08',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <span style={{ fontSize: 22 }}>{a.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#334155', textAlign: 'center', lineHeight: 1.3 }}>
                    {a.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 20 }}>
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
              LOCAL ALERTS
            </h3>
            {localAlerts.map((a, i) => (
              <div
                key={i}
                style={{
                  padding: '12px 0',
                  borderBottom: i < localAlerts.length - 1 ? '1px solid #f1f5f9' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span
                    style={{
                      padding: '2px 7px',
                      borderRadius: 3,
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                      flexShrink: 0,
                      background:
                        a.level === 'CRITICAL'
                          ? 'rgba(239,68,68,0.1)'
                          : a.level === 'INFO'
                          ? 'rgba(37,99,235,0.1)'
                          : 'rgba(16,185,129,0.1)',
                      color:
                        a.level === 'CRITICAL' ? '#ef4444' : a.level === 'INFO' ? '#2563eb' : '#10b981',
                    }}
                  >
                    {a.level}
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.5 }}>{a.msg}</div>
                    <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 3 }}>{a.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle column — Shelters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 20 }}>
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
              NEAREST SHELTERS
            </h3>
            {shelters.map((s) => (
              <div
                key={s.name}
                style={{
                  padding: '14px',
                  border: '1px solid #f1f5f9',
                  borderRadius: 8,
                  marginBottom: 10,
                  background: '#f8fafc',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#0f172a', lineHeight: 1.3, flex: 1 }}>
                    {s.name}
                  </div>
                  <span
                    style={{
                      padding: '2px 7px',
                      borderRadius: 3,
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                      marginLeft: 8,
                      background: s.status === 'NEAR FULL' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)',
                      color: s.status === 'NEAR FULL' ? '#f59e0b' : '#10b981',
                      flexShrink: 0,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#64748b' }}>
                  <span>📍 {s.dist}</span>
                  <span>👥 {s.people} people</span>
                </div>
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#94a3b8', marginBottom: 4, fontFamily: 'JetBrains Mono, monospace' }}>
                    <span>CAPACITY</span>
                    <span>{s.cap}</span>
                  </div>
                  <div style={{ height: 4, background: '#e2e8f0', borderRadius: 2, overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: s.cap,
                        background: parseInt(s.cap) > 90 ? '#ef4444' : parseInt(s.cap) > 70 ? '#f59e0b' : '#10b981',
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </div>
                <button
                  style={{
                    marginTop: 10,
                    width: '100%',
                    padding: '7px',
                    background: '#0f172a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  GET DIRECTIONS →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* My requests */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 20 }}>
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
              MY REQUESTS
            </h3>
            {myRequests.map((r) => (
              <div
                key={r.id}
                onClick={() => onNav('incident')}
                style={{
                  padding: '12px',
                  border: '1px solid #f1f5f9',
                  borderRadius: 6,
                  marginBottom: 8,
                  cursor: 'pointer',
                  background: '#f8fafc',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>{r.id}</span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, monospace',
                      color:
                        r.status === 'IN PROGRESS'
                          ? '#f59e0b'
                          : r.status === 'DELIVERED'
                          ? '#2563eb'
                          : '#10b981',
                    }}
                  >
                    {r.status}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#0f172a', marginTop: 4 }}>{r.type}</div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{r.team} · {r.time}</div>
              </div>
            ))}
            <button
              onClick={() => onNav('report')}
              style={{
                width: '100%',
                padding: '9px',
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.04em',
                marginTop: 4,
              }}
            >
              + NEW REQUEST
            </button>
          </div>

          {/* Emergency contacts */}
          <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e2e8f0', padding: 20 }}>
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
              EMERGENCY CONTACTS
            </h3>
            {contacts.map((c) => (
              <div
                key={c.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 0',
                  borderBottom: '1px solid #f8fafc',
                }}
              >
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>{c.name}</div>
                </div>
                <a
                  href={`tel:${c.num}`}
                  style={{
                    padding: '4px 10px',
                    background: '#0f172a',
                    color: '#fff',
                    borderRadius: 4,
                    fontSize: 12,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {c.num}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
