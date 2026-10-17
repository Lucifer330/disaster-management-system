import { useState } from 'react'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const disasterTypes = [
  { id: 'flood', label: 'FLOOD', icon: '🌊', color: '#3b82f6' },
  { id: 'earthquake', label: 'EARTHQUAKE', icon: '🌍', color: '#8b5cf6' },
  { id: 'cyclone', label: 'CYCLONE', icon: '🌀', color: '#06b6d4' },
  { id: 'landslide', label: 'LANDSLIDE', icon: '⛰️', color: '#a16207' },
  { id: 'fire', label: 'FIRE', icon: '🔥', color: '#dc2626' },
  { id: 'drought', label: 'DROUGHT', icon: '☀️', color: '#d97706' },
  { id: 'heatwave', label: 'HEAT WAVE', icon: '🌡️', color: '#f97316' },
  { id: 'other', label: 'OTHER', icon: '⚠️', color: '#64748b' },
]

export default function EmergencyReport({ onNav }: Props) {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState('flood')
  const [severity, setSeverity] = useState(3)
  const [desc, setDesc] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [recording, setRecording] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => onNav('ai-analysis'), 1800)
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 400 }}>
          <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 28,
              fontWeight: 800,
              color: '#10b981',
              letterSpacing: '0.02em',
            }}
          >
            REPORT SUBMITTED
          </div>
          <div style={{ fontSize: 14, color: '#64748b', marginTop: 8, lineHeight: 1.6 }}>
            Your emergency report has been logged. AI analysis running... Redirecting to analysis results.
          </div>
          <div
            style={{
              marginTop: 24,
              padding: '12px 20px',
              background: '#fff',
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 13,
              color: '#2563eb',
              fontWeight: 600,
            }}
          >
            Report ID: RPT-2024-8841
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          CITIZEN PORTAL / REPORT EMERGENCY
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
          EMERGENCY REPORT
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          File a disaster report. Our AI will analyze and dispatch the right response team.
        </p>
      </div>

      {/* Progress */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          marginBottom: 28,
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        {[
          { n: 1, label: 'Disaster Type' },
          { n: 2, label: 'Details & Location' },
          { n: 3, label: 'Media & Description' },
          { n: 4, label: 'Review & Submit' },
        ].map((s) => (
          <button
            key={s.n}
            onClick={() => setStep(s.n)}
            style={{
              flex: 1,
              padding: '12px 8px',
              border: 'none',
              borderRight: '1px solid #e2e8f0',
              background: step === s.n ? '#0f172a' : step > s.n ? '#f1f5f9' : '#fff',
              color: step === s.n ? '#fff' : step > s.n ? '#10b981' : '#94a3b8',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: step === s.n ? '#dc2626' : step > s.n ? '#10b981' : '#e2e8f0',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                color: step >= s.n ? '#fff' : '#94a3b8',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {step > s.n ? '✓' : s.n}
            </span>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
        {/* Main form */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 28 }}>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 20px',
                  letterSpacing: '0.04em',
                }}
              >
                SELECT DISASTER TYPE
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {disasterTypes.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelected(d.id)}
                    style={{
                      padding: '20px 12px',
                      border: selected === d.id ? `2px solid ${d.color}` : '2px solid #e2e8f0',
                      borderRadius: 10,
                      background: selected === d.id ? d.color + '12' : '#f8fafc',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      transition: 'all 0.15s',
                    }}
                  >
                    <span style={{ fontSize: 32 }}>{d.icon}</span>
                    <span
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontSize: 12,
                        fontWeight: 700,
                        color: selected === d.id ? d.color : '#475569',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {d.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Severity */}
              <div style={{ marginTop: 28 }}>
                <h3
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#0f172a',
                    margin: '0 0 16px',
                    letterSpacing: '0.04em',
                  }}
                >
                  SEVERITY INDICATOR
                </h3>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setSeverity(n)}
                      style={{
                        flex: 1,
                        padding: '14px 8px',
                        border: `2px solid ${severity >= n ? (n <= 2 ? '#10b981' : n === 3 ? '#f59e0b' : '#ef4444') : '#e2e8f0'}`,
                        borderRadius: 8,
                        background:
                          severity >= n
                            ? (n <= 2 ? 'rgba(16,185,129,0.1)' : n === 3 ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)')
                            : '#f8fafc',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        transition: 'all 0.1s',
                      }}
                    >
                      <span style={{ fontSize: 20 }}>
                        {n === 1 ? '🟢' : n === 2 ? '🟡' : n === 3 ? '🟠' : n === 4 ? '🔴' : '🆘'}
                      </span>
                      <span style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: '#64748b' }}>
                        {n === 1 ? 'MINOR' : n === 2 ? 'LOW' : n === 3 ? 'MOD' : n === 4 ? 'HIGH' : 'CRIT'}
                      </span>
                    </button>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    padding: '10px 14px',
                    background: severity >= 4 ? 'rgba(239,68,68,0.05)' : 'rgba(245,158,11,0.05)',
                    border: `1px solid ${severity >= 4 ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)'}`,
                    borderRadius: 6,
                    fontSize: 12,
                    color: severity >= 4 ? '#dc2626' : '#92400e',
                  }}
                >
                  {severity <= 2
                    ? 'Low severity — Situation is manageable. Aid will be dispatched within 4 hours.'
                    : severity === 3
                    ? 'Moderate severity — Response team will be dispatched within 2 hours.'
                    : severity === 4
                    ? '⚠️ High severity — Priority dispatch. Response team en route within 1 hour.'
                    : '🆘 CRITICAL — Immediate emergency response. NDRF being alerted NOW.'}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 20px',
                  letterSpacing: '0.04em',
                }}
              >
                LOCATION & DETAILS
              </h2>

              {/* Map placeholder */}
              <div
                style={{
                  height: 220,
                  background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
                  borderRadius: 10,
                  border: '1px solid #334155',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: 20,
                }}
              >
                {/* Grid */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Pin */}
                <div
                  style={{
                    position: 'absolute',
                    top: '45%',
                    left: '55%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 32 }}>📍</div>
                  <div
                    style={{
                      background: '#dc2626',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: 4,
                      fontSize: 10,
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: 600,
                      marginTop: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    GPS: 26.1445° N, 91.7362° E
                  </div>
                </div>
                {/* Top bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    right: 12,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '5px 10px',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: 4,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} className="live-dot" />
                    <span style={{ fontSize: 10, color: '#10b981', fontFamily: 'JetBrains Mono, monospace' }}>GPS ACTIVE</span>
                  </div>
                  <div
                    style={{
                      padding: '5px 10px',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: 4,
                      fontSize: 10,
                      color: '#93c5fd',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    Guwahati, Assam
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  { label: 'DISTRICT', placeholder: 'Kamrup Metropolitan' },
                  { label: 'STATE', placeholder: 'Assam' },
                  { label: 'WARD / LOCALITY', placeholder: 'Zone 3, Jalukbari' },
                  { label: 'PINCODE', placeholder: '781014' },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ fontSize: 10, fontWeight: 600, color: '#475569', letterSpacing: '0.08em', display: 'block', marginBottom: 5, fontFamily: 'JetBrains Mono, monospace' }}>
                      {f.label}
                    </label>
                    <input
                      placeholder={f.placeholder}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: 6,
                        fontSize: 13,
                        color: '#0f172a',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14 }}>
                <label style={{ fontSize: 10, fontWeight: 600, color: '#475569', letterSpacing: '0.08em', display: 'block', marginBottom: 5, fontFamily: 'JetBrains Mono, monospace' }}>
                  NUMBER OF AFFECTED PEOPLE (ESTIMATE)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 45"
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: 6,
                    fontSize: 13,
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 20px',
                  letterSpacing: '0.04em',
                }}
              >
                MEDIA & DESCRIPTION
              </h2>

              {/* Image upload */}
              <div
                onClick={() => {
                  setUploading(true)
                  setTimeout(() => { setUploading(false); setUploaded(true) }, 1500)
                }}
                style={{
                  border: `2px dashed ${uploaded ? '#10b981' : '#cbd5e1'}`,
                  borderRadius: 10,
                  padding: 32,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: uploaded ? 'rgba(16,185,129,0.05)' : '#f8fafc',
                  marginBottom: 20,
                  transition: 'all 0.2s',
                }}
              >
                {uploading ? (
                  <div>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>⏳</div>
                    <div style={{ fontSize: 13, color: '#64748b' }}>Uploading...</div>
                  </div>
                ) : uploaded ? (
                  <div>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
                    <div style={{ fontSize: 13, color: '#10b981', fontWeight: 600 }}>3 images uploaded</div>
                    <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>flood_zone_1.jpg, flood_zone_2.jpg, damage_roof.jpg</div>
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize: 40, marginBottom: 8 }}>📷</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#334155' }}>Upload Photos / Videos</div>
                    <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>Click to select or drag & drop files here</div>
                    <div style={{ fontSize: 11, color: '#cbd5e1', marginTop: 6 }}>JPG, PNG, MP4 — Max 50 MB</div>
                  </div>
                )}
              </div>

              {/* Voice report */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 10, fontWeight: 600, color: '#475569', letterSpacing: '0.08em', display: 'block', marginBottom: 8, fontFamily: 'JetBrains Mono, monospace' }}>
                  VOICE REPORT
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 16px',
                    border: `1.5px solid ${recording ? '#dc2626' : '#e2e8f0'}`,
                    borderRadius: 8,
                    background: recording ? 'rgba(220,38,38,0.05)' : '#f8fafc',
                  }}
                >
                  <button
                    onClick={() => setRecording(!recording)}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      border: 'none',
                      background: recording ? '#dc2626' : '#0f172a',
                      color: '#fff',
                      fontSize: 18,
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {recording ? '⏹' : '🎙️'}
                  </button>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: recording ? '#dc2626' : '#334155' }}>
                      {recording ? 'Recording... 0:12' : 'Record voice description'}
                    </div>
                    <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>
                      {recording ? 'Tap stop when done' : 'Describe the situation in your local language'}
                    </div>
                  </div>
                  {recording && (
                    <div
                      style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        gap: 3,
                        alignItems: 'flex-end',
                        height: 20,
                      }}
                    >
                      {[4, 8, 14, 10, 6, 12, 8, 16, 10, 4].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            width: 3,
                            height: h,
                            background: '#dc2626',
                            borderRadius: 1,
                            opacity: 0.7 + (i % 3) * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label style={{ fontSize: 10, fontWeight: 600, color: '#475569', letterSpacing: '0.08em', display: 'block', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>
                  WRITTEN DESCRIPTION
                </label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Describe the situation in detail — water level, people stranded, access roads blocked, injuries observed..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: 8,
                    fontSize: 13,
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6,
                    resize: 'vertical',
                  }}
                />
                <div style={{ textAlign: 'right', fontSize: 11, color: '#94a3b8', marginTop: 4, fontFamily: 'JetBrains Mono, monospace' }}>
                  {desc.length}/1000
                </div>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 20px',
                  letterSpacing: '0.04em',
                }}
              >
                REVIEW & SUBMIT
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Disaster Type', value: disasterTypes.find(d => d.id === selected)?.label || 'FLOOD' },
                  { label: 'Severity Level', value: `${severity}/5 — ${severity >= 4 ? 'CRITICAL' : severity === 3 ? 'MODERATE' : 'LOW'}` },
                  { label: 'Location', value: 'Zone 3, Jalukbari, Guwahati, Assam — 26.1445°N 91.7362°E' },
                  { label: 'Affected People', value: '45 estimated' },
                  { label: 'Media Attached', value: uploaded ? '3 images' : 'None' },
                  { label: 'Voice Report', value: recording ? 'Recorded' : 'Not recorded' },
                  { label: 'Description', value: desc || 'Not provided' },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      gap: 16,
                      padding: '12px 14px',
                      background: '#f8fafc',
                      borderRadius: 6,
                      border: '1px solid #f1f5f9',
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b', fontFamily: 'JetBrains Mono, monospace', minWidth: 130 }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: 13, color: '#0f172a', flex: 1 }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: '14px 16px',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  borderRadius: 8,
                  fontSize: 12,
                  color: '#065f46',
                  lineHeight: 1.5,
                }}
              >
                ✓ Your report will be analyzed by our AI system and priority-scored within 30 seconds. The nearest available response team will be dispatched automatically.
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
            <button
              onClick={() => step > 1 ? setStep(step - 1) : onNav('citizen')}
              style={{
                padding: '10px 24px',
                border: '1.5px solid #e2e8f0',
                borderRadius: 6,
                background: '#fff',
                color: '#475569',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              ← {step > 1 ? 'BACK' : 'CANCEL'}
            </button>
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                style={{
                  padding: '10px 28px',
                  background: '#0f172a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.04em',
                }}
              >
                NEXT STEP →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                style={{
                  padding: '10px 28px',
                  background: '#dc2626',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.06em',
                }}
              >
                🚨 SUBMIT EMERGENCY REPORT
              </button>
            )}
          </div>
        </div>

        {/* Side panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              REPORTING TIPS
            </h3>
            {[
              { icon: '📍', tip: 'Enable GPS for accurate location' },
              { icon: '📷', tip: 'Photos speed up response by 40%' },
              { icon: '🔢', tip: 'Exact headcount helps allocation' },
              { icon: '🛑', tip: 'Do NOT file false reports' },
              { icon: '📶', tip: 'Works offline — auto-syncs later' },
            ].map((t) => (
              <div key={t.tip} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{t.icon}</span>
                <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>{t.tip}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: '#0b1422',
              border: '1px solid rgba(220,38,38,0.3)',
              borderRadius: 10,
              padding: 20,
            }}
          >
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 12px' }}>
              AI WILL ANALYZE
            </h3>
            {[
              'Disaster type classification',
              'Severity score (0–100)',
              'Priority ranking',
              'Resource requirement',
              'Response team matching',
              'Estimated response time',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#60a5fa', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: 12, color: '#94a3b8' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
