import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const timeline = [
  { time: '06:14', event: 'Emergency report filed by citizen Priya Sharma', type: 'report', icon: '📋' },
  { time: '06:15', event: 'AI analysis complete — Severity: 87/100, Priority: P1', type: 'ai', icon: '🧠' },
  { time: '06:18', event: 'NDRF Battalion B-4 dispatched from Guwahati Base', type: 'dispatch', icon: '🚁' },
  { time: '06:22', event: 'Alert broadcast to 12,400 registered citizens in Zone-3', type: 'alert', icon: '🔔' },
  { time: '06:35', event: 'Medical unit requested — 1 AMB + 4 paramedics confirmed', type: 'medical', icon: '🏥' },
  { time: '07:02', event: 'NDRF team arrived on scene — 340 people evacuated', type: 'arrival', icon: '✅' },
  { time: '07:45', event: 'Temporary medical camp established at Zone-3 boundary', type: 'camp', icon: '⛺' },
  { time: '08:12', event: 'Water level still rising — additional boats requested', type: 'update', icon: '⚠️' },
]

const photos = [
  { label: 'Flood Scene 1', color: '#1e3a5f', icon: '🌊' },
  { label: 'Evacuation', color: '#1a2f4a', icon: '🚣' },
  { label: 'Damage', color: '#2a1a1a', icon: '🏚️' },
  { label: 'Camp Setup', color: '#1a2a1a', icon: '⛺' },
]

export default function IncidentDetail({ onNav }: Props) {
  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
            AUTHORITY / INCIDENT DETAIL / INC-7712
          </div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
            INCIDENT INC-7712
          </h1>
          <div style={{ display: 'flex', gap: 10, marginTop: 6, flexWrap: 'wrap' }}>
            <span style={{ padding: '3px 10px', borderRadius: 4, background: 'rgba(59,130,246,0.1)', color: '#3b82f6', fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>FLOOD</span>
            <span style={{ padding: '3px 10px', borderRadius: 4, background: 'rgba(239,68,68,0.1)', color: '#ef4444', fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>CRITICAL — P1</span>
            <span style={{ padding: '3px 10px', borderRadius: 4, background: 'rgba(245,158,11,0.1)', color: '#f59e0b', fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>IN PROGRESS</span>
            <span style={{ padding: '3px 10px', borderRadius: 4, background: '#f1f5f9', color: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' }}>Brahmaputra Basin, Assam</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => onNav('ai-analysis')}
            style={{ padding: '9px 18px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.04em', color: '#334155' }}
          >
            🧠 AI REPORT
          </button>
          <button
            onClick={() => onNav('authority')}
            style={{ padding: '9px 18px', background: '#0f172a', color: '#fff', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.04em' }}
          >
            ← BACK TO COMMAND
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Victim info */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 18px' }}>
              VICTIM & SITUATION DETAILS
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
              {[
                { label: 'TOTAL AFFECTED', value: '420', color: '#ef4444' },
                { label: 'EVACUATED', value: '340', color: '#10b981' },
                { label: 'STILL STRANDED', value: '80', color: '#f59e0b' },
                { label: 'INJURED', value: '23', color: '#dc2626' },
                { label: 'MISSING', value: '7', color: '#7c3aed' },
                { label: 'FATALITIES', value: '2', color: '#0f172a' },
              ].map((s) => (
                <div key={s.label} style={{ padding: '14px', background: '#f8fafc', borderRadius: 8, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 30, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 2, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { label: 'Report Filed By', value: 'Priya Sharma (Citizen)' },
                { label: 'GPS Coordinates', value: '26.1445°N, 91.7362°E' },
                { label: 'Water Level', value: '3.2m above danger mark' },
                { label: 'Area Affected', value: '~4.5 sq km' },
              ].map((r) => (
                <div key={r.label} style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', letterSpacing: '0.04em', marginBottom: 3 }}>{r.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{r.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Uploaded photos */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 14px' }}>
              UPLOADED EVIDENCE
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {photos.map((p) => (
                <div
                  key={p.label}
                  style={{
                    height: 90,
                    background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)`,
                    borderRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontFamily: 'JetBrains Mono, monospace' }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location map */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 14px' }}>
              INCIDENT LOCATION
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
                    'linear-gradient(rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.12) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Incident marker */}
              <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <div style={{ fontSize: 36 }}>📍</div>
                <div style={{ background: '#dc2626', color: '#fff', padding: '4px 10px', borderRadius: 4, fontSize: 10, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, marginTop: 4, whiteSpace: 'nowrap' }}>
                  INC-7712 · FLOOD ZONE
                </div>
              </div>
              {/* Response markers */}
              {[
                { top: '30%', left: '35%', icon: '🚁', label: 'NDRF' },
                { top: '60%', left: '60%', icon: '🏥', label: 'MED' },
                { top: '25%', left: '65%', icon: '⛺', label: 'CAMP' },
              ].map((m) => (
                <div key={m.label} style={{ position: 'absolute', top: m.top, left: m.left }}>
                  <div style={{ fontSize: 18 }}>{m.icon}</div>
                  <div style={{ fontSize: 8, color: '#93c5fd', fontFamily: 'JetBrains Mono, monospace' }}>{m.label}</div>
                </div>
              ))}
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: 10, color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                26.1445°N  91.7362°E · Zoom 12
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Timeline */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              INCIDENT TIMELINE
            </h3>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 15, top: 0, bottom: 0, width: 1, background: '#f1f5f9' }} />
              {timeline.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14, position: 'relative' }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: '#fff',
                      border: '2px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {t.icon}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8', marginBottom: 2 }}>{t.time}</div>
                    <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.5 }}>{t.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assign team */}
          <div style={{ background: '#0b1422', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              ASSIGN RESPONSE TEAM
            </h3>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#64748b', letterSpacing: '0.06em', display: 'block', marginBottom: 5 }}>SELECT TEAM</label>
              <select
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  background: '#142742',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  color: '#e2e8f0',
                  fontSize: 13,
                  outline: 'none',
                }}
              >
                <option>NDRF Battalion A-1 (12 available)</option>
                <option>NDRF Battalion B-4 (8 available) — Deployed</option>
                <option>SDRF Assam Unit (20 available)</option>
                <option>Coast Guard Rescue (6 available)</option>
              </select>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#64748b', letterSpacing: '0.06em', display: 'block', marginBottom: 5 }}>PRIORITY OVERRIDE</label>
              <select
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  background: '#142742',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  color: '#e2e8f0',
                  fontSize: 13,
                  outline: 'none',
                }}
              >
                <option>P1 — IMMEDIATE (Current)</option>
                <option>P2 — URGENT</option>
                <option>P3 — STANDARD</option>
              </select>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#64748b', letterSpacing: '0.06em', display: 'block', marginBottom: 5 }}>NOTES</label>
              <textarea
                placeholder="Additional instructions for team..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  background: '#142742',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  color: '#e2e8f0',
                  fontSize: 12,
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  resize: 'vertical',
                }}
              />
            </div>
            <button
              style={{
                width: '100%',
                padding: '11px',
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
                marginBottom: 8,
              }}
            >
              DISPATCH TEAM →
            </button>
            <button
              style={{
                width: '100%',
                padding: '9px',
                background: 'rgba(255,255,255,0.06)',
                color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              CLOSE INCIDENT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
