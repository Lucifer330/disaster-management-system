import { useState } from 'react'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
  onLogin: (role: string) => void
}

const roles = [
  { id: 'citizen', label: 'CITIZEN', icon: '👤', desc: 'Report emergencies, request help', color: '#dc2626', screen: 'citizen' as Screen },
  { id: 'volunteer', label: 'VOLUNTEER', icon: '🦺', desc: 'Join response missions', color: '#7c3aed', screen: 'volunteer' as Screen },
  { id: 'ngo', label: 'NGO', icon: '🤝', desc: 'Manage resources & relief', color: '#059669', screen: 'ngo' as Screen },
  { id: 'authority', label: 'AUTHORITY', icon: '🏛️', desc: 'Command & coordinate response', color: '#1d4ed8', screen: 'authority' as Screen },
]

export default function LoginPage({ onNav, onLogin }: Props) {
  const [selectedRole, setSelectedRole] = useState('citizen')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [form, setForm] = useState({ email: '', password: '', name: '', phone: '' })

  const role = roles.find((r) => r.id === selectedRole)!

  const handleSubmit = () => {
    onLogin(role.label)
    onNav(role.screen)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0b1422 0%, #0f1f35 60%, #142742 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
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

      <div style={{ position: 'relative', width: '100%', maxWidth: 840, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}>
        {/* Left panel */}
        <div
          style={{
            background: '#0b1422',
            padding: '48px 36px',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                fontSize: 24,
                color: '#fff',
                letterSpacing: '0.02em',
                lineHeight: 1.1,
              }}
            >
              🛡️ DISASTER MANAGEMENT SYSTEM
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                color: '#60a5fa',
                letterSpacing: '0.1em',
                marginTop: 4,
              }}
            >
              DISASTER RESPONSE PLATFORM
            </div>
          </div>

          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              color: '#64748b',
              letterSpacing: '0.08em',
              marginBottom: 14,
            }}
          >
            SELECT YOUR ROLE
          </div>

          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRole(r.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '14px 16px',
                marginBottom: 10,
                border: selectedRole === r.id ? `1.5px solid ${r.color}60` : '1.5px solid rgba(255,255,255,0.06)',
                borderRadius: 10,
                background: selectedRole === r.id ? r.color + '15' : 'rgba(255,255,255,0.02)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 22 }}>{r.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 15,
                    fontWeight: 700,
                    color: selectedRole === r.id ? '#fff' : '#94a3b8',
                    letterSpacing: '0.04em',
                  }}
                >
                  {r.label}
                </div>
                <div style={{ fontSize: 11, color: '#475569', marginTop: 1 }}>{r.desc}</div>
              </div>
              {selectedRole === r.id && (
                <div
                  style={{
                    marginLeft: 'auto',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: r.color,
                    flexShrink: 0,
                  }}
                />
              )}
            </button>
          ))}

          <div
            style={{
              marginTop: 32,
              padding: '16px',
              background: 'rgba(220,38,38,0.08)',
              border: '1px solid rgba(220,38,38,0.2)',
              borderRadius: 8,
            }}
          >
            <div style={{ fontSize: 12, color: '#fca5a5', fontWeight: 600, marginBottom: 4 }}>
              🚨 Emergency Access
            </div>
            <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.5 }}>
              Citizens can report emergencies without logging in. Tap "Report Emergency" from the home screen.
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div style={{ background: '#fff', padding: '48px 36px' }}>
          <div style={{ display: 'flex', gap: 0, marginBottom: 32, borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1,
                  padding: '10px',
                  border: 'none',
                  background: mode === m ? '#0f172a' : '#fff',
                  color: mode === m ? '#fff' : '#64748b',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}
              >
                {m === 'login' ? 'SIGN IN' : 'REGISTER'}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 22,
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: 6,
            }}
          >
            {mode === 'login' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
          </div>
          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 28 }}>
            {mode === 'login'
              ? `Signing in as ${role.label}`
              : `Registering as ${role.label} — ${role.desc}`}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {mode === 'register' && (
              <>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.06em', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>
                    FULL NAME
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rajesh Kumar"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: 6,
                      fontSize: 14,
                      color: '#0f172a',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.06em', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>
                    MOBILE NUMBER
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: 6,
                      fontSize: 14,
                      color: '#0f172a',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </div>
              </>
            )}
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.06em', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>
                EMAIL / AADHAAR ID
              </label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="rajesh@ndma.gov.in"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: 6,
                  fontSize: 14,
                  color: '#0f172a',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.06em', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>
                PASSWORD
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: 6,
                  fontSize: 14,
                  color: '#0f172a',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                marginTop: 8,
                padding: '13px',
                background: role.color,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
                cursor: 'pointer',
              }}
            >
              {mode === 'login' ? `SIGN IN AS ${role.label} →` : `CREATE ${role.label} ACCOUNT →`}
            </button>

            <div style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 8 }}>
              {mode === 'login' ? (
                <>No account? <button onClick={() => setMode('register')} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Register here</button></>
              ) : (
                <>Already registered? <button onClick={() => setMode('login')} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Sign in</button></>
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              padding: '12px 14px',
              background: '#f8fafc',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 16 }}>🔒</span>
            <span style={{ fontSize: 11, color: '#64748b', lineHeight: 1.5 }}>
              Secured by NIC Authentication Gateway. Your data is encrypted and stored on Government of India servers.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
