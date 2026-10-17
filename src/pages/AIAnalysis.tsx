import { useState, useEffect } from 'react'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const radarData = [
  { label: 'Severity', value: 87 },
  { label: 'Urgency', value: 92 },
  { label: 'Scale', value: 74 },
  { label: 'Access', value: 61 },
  { label: 'Vulnerability', value: 83 },
  { label: 'Resources', value: 70 },
]

const recommendations = [
  {
    priority: 1,
    action: 'Deploy NDRF Battalion for water rescue operations',
    resource: '2 rescue boats, 8 personnel',
    eta: '35 min',
    status: 'DISPATCHED',
  },
  {
    priority: 2,
    action: 'Establish temporary medical camp at Zone-3 boundary',
    resource: '1 medical unit, 4 paramedics',
    eta: '50 min',
    status: 'CONFIRMED',
  },
  {
    priority: 3,
    action: 'Distribute emergency food kits via Air Drop',
    resource: '200 kits, 1 helicopter',
    eta: '2 hrs',
    status: 'PENDING',
  },
  {
    priority: 4,
    action: 'Coordinate NGO volunteers for shelter management',
    resource: '30 volunteers',
    eta: '1.5 hrs',
    status: 'PENDING',
  },
]

export default function AIAnalysis({ onNav }: Props) {
  const [score, setScore] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 400)
    const interval = setInterval(() => {
      setScore((prev) => {
        if (prev >= 87) { clearInterval(interval); return 87 }
        return prev + 2
      })
    }, 30)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  const scoreColor = score >= 80 ? '#ef4444' : score >= 60 ? '#f59e0b' : '#10b981'

  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          AI ENGINE / EMERGENCY ANALYSIS — RPT-2024-8841
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
          AI EMERGENCY ANALYSIS
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          Flood — Zone 3, Guwahati, Assam · Analyzed in 1.4 seconds
        </p>
      </div>

      {/* Top scores row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'AI SEVERITY SCORE', value: `${score}/100`, sub: 'CRITICAL', color: '#ef4444', icon: '🧠' },
          { label: 'PRIORITY LEVEL', value: 'P1', sub: 'IMMEDIATE', color: '#dc2626', icon: '🚨' },
          { label: 'CONFIDENCE SCORE', value: '94.2%', sub: 'HIGH CONFIDENCE', color: '#10b981', icon: '◈' },
          { label: 'AFFECTED ESTIMATE', value: '340–420', sub: 'PEOPLE', color: '#f59e0b', icon: '👥' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderTop: `3px solid ${stat.color}`,
              borderRadius: 10,
              padding: '20px',
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 8 }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 36,
                fontWeight: 800,
                color: stat.color,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                color: stat.color,
                letterSpacing: '0.06em',
                marginTop: 4,
              }}
            >
              {stat.sub}
            </div>
            <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 300px', gap: 20 }}>
        {/* Score visualization */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 20px' }}>
            SEVERITY BREAKDOWN
          </h3>
          {radarData.map((item) => (
            <div key={item.label} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#475569' }}>{item.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: item.value >= 80 ? '#ef4444' : item.value >= 60 ? '#f59e0b' : '#10b981' }}>
                  {ready ? item.value : 0}
                </span>
              </div>
              <div style={{ height: 8, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: ready ? `${item.value}%` : '0%',
                    background: item.value >= 80 ? 'linear-gradient(90deg, #dc2626, #ef4444)' : item.value >= 60 ? 'linear-gradient(90deg, #d97706, #f59e0b)' : 'linear-gradient(90deg, #059669, #10b981)',
                    borderRadius: 4,
                    transition: 'width 0.8s ease',
                  }}
                />
              </div>
            </div>
          ))}

          {/* Circular score */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <div style={{ position: 'relative', width: 140, height: 140 }}>
              <svg viewBox="0 0 140 140" style={{ width: 140, height: 140, transform: 'rotate(-90deg)' }}>
                <circle cx="70" cy="70" r="56" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                <circle
                  cx="70"
                  cy="70"
                  r="56"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - score / 100)}`}
                  style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 40,
                    fontWeight: 800,
                    color: scoreColor,
                    lineHeight: 1,
                  }}
                >
                  {score}
                </div>
                <div style={{ fontSize: 10, color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                  /100
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 20,
                background: 'rgba(239,68,68,0.1)',
                color: '#ef4444',
                fontSize: 12,
                fontWeight: 700,
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              CRITICAL EMERGENCY
            </span>
          </div>
        </div>

        {/* Recommendations */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 20px' }}>
            AI RECOMMENDED ACTIONS
          </h3>
          {recommendations.map((r) => (
            <div
              key={r.priority}
              style={{
                padding: '14px',
                border: '1px solid #f1f5f9',
                borderLeft: `3px solid ${r.status === 'DISPATCHED' ? '#10b981' : r.status === 'CONFIRMED' ? '#2563eb' : '#e2e8f0'}`,
                borderRadius: 6,
                marginBottom: 12,
                background: r.status === 'DISPATCHED' ? 'rgba(16,185,129,0.03)' : '#f8fafc',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#0f172a',
                      color: '#fff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    P{r.priority}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', lineHeight: 1.3 }}>
                    {r.action}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    fontFamily: 'JetBrains Mono, monospace',
                    color: r.status === 'DISPATCHED' ? '#10b981' : r.status === 'CONFIRMED' ? '#2563eb' : '#94a3b8',
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {r.status}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 14, fontSize: 11, color: '#64748b', marginTop: 4 }}>
                <span>📦 {r.resource}</span>
                <span>⏱ ETA: {r.eta}</span>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 8,
              padding: '12px 14px',
              background: '#0b1422',
              borderRadius: 8,
              fontSize: 12,
              color: '#93c5fd',
              lineHeight: 1.6,
            }}
          >
            🧠 AI Model: NDMA-DRT v2.4 · Last trained: Aug 2026 · Dataset: 14,200 historical incidents across India
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Resource prediction */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              RESOURCE PREDICTION
            </h3>
            {[
              { item: 'Rescue Personnel', req: 24, avail: 31, unit: 'people' },
              { item: 'Rescue Boats', req: 6, avail: 4, unit: 'boats' },
              { item: 'Food Kits', req: 450, avail: 800, unit: 'kits' },
              { item: 'Medical Kits', req: 80, avail: 120, unit: 'kits' },
              { item: 'Tents', req: 60, avail: 45, unit: 'units' },
            ].map((r) => (
              <div key={r.item} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>{r.item}</span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 11,
                      color: r.avail >= r.req ? '#10b981' : '#ef4444',
                    }}
                  >
                    {r.avail}/{r.req}
                  </span>
                </div>
                <div style={{ height: 5, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${Math.min(100, (r.avail / r.req) * 100)}%`,
                      background: r.avail >= r.req ? '#10b981' : '#ef4444',
                      borderRadius: 3,
                    }}
                  />
                </div>
                {r.avail < r.req && (
                  <div style={{ fontSize: 10, color: '#ef4444', marginTop: 2, fontFamily: 'JetBrains Mono, monospace' }}>
                    SHORTAGE: {r.req - r.avail} {r.unit}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: '#0b1422', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              RESPONSE ACTIONS
            </h3>
            <button
              onClick={() => onNav('incident')}
              style={{
                width: '100%',
                padding: '11px',
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
                marginBottom: 8,
              }}
            >
              VIEW INCIDENT DETAIL
            </button>
            <button
              onClick={() => onNav('authority')}
              style={{
                width: '100%',
                padding: '11px',
                background: 'rgba(37,99,235,0.2)',
                color: '#93c5fd',
                border: '1px solid rgba(37,99,235,0.4)',
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
                marginBottom: 8,
              }}
            >
              ESCALATE TO AUTHORITY
            </button>
            <button
              onClick={() => onNav('citizen')}
              style={{
                width: '100%',
                padding: '11px',
                background: 'rgba(255,255,255,0.04)',
                color: '#64748b',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              BACK TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
