import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const trendData = [
  { time: '00:00', incidents: 12, resolved: 8 },
  { time: '02:00', incidents: 18, resolved: 11 },
  { time: '04:00', incidents: 24, resolved: 14 },
  { time: '06:00', incidents: 45, resolved: 22 },
  { time: '08:00', incidents: 67, resolved: 38 },
  { time: '10:00', incidents: 89, resolved: 54 },
  { time: '12:00', incidents: 112, resolved: 71 },
  { time: '14:00', incidents: 98, resolved: 82 },
  { time: '16:00', incidents: 134, resolved: 97 },
  { time: '18:00', incidents: 156, resolved: 118 },
  { time: '20:00', incidents: 143, resolved: 129 },
  { time: '22:00', incidents: 128, resolved: 134 },
]

const resourceData = [
  { name: 'Assam', boats: 12, tents: 400, kits: 1200 },
  { name: 'Odisha', boats: 8, tents: 300, kits: 900 },
  { name: 'Bihar', boats: 6, tents: 200, kits: 650 },
  { name: 'W. Bengal', boats: 10, tents: 350, kits: 1000 },
  { name: 'Gujarat', boats: 4, tents: 150, kits: 450 },
]

const activeIncidents = [
  { id: 'INC-7712', type: 'FLOOD', loc: 'Brahmaputra Basin, Assam', severity: 5, victims: 420, team: 'NDRF B-4', status: 'IN PROGRESS', time: '8 min' },
  { id: 'INC-7698', type: 'CYCLONE', loc: 'Paradip Port, Odisha', severity: 4, victims: 280, team: 'SDRF-OD', status: 'RESPONDING', time: '32 min' },
  { id: 'INC-7681', type: 'LANDSLIDE', loc: 'Kullu Valley, HP', severity: 5, victims: 145, team: 'NDRF A-2', status: 'CRITICAL', time: '1 hr' },
  { id: 'INC-7670', type: 'FLOOD', loc: 'Patna, Bihar', severity: 3, victims: 190, team: 'SDRF-BR', status: 'STABLE', time: '2 hr' },
  { id: 'INC-7655', type: 'EARTHQUAKE', loc: 'Bhuj, Gujarat', severity: 2, victims: 40, team: 'Civil Defense', status: 'CONTAINED', time: '4 hr' },
]

const heatmapCells = [
  { x: 28, y: 22, r: 40, intensity: 0.9, label: 'Assam' },
  { x: 62, y: 55, r: 30, intensity: 0.75, label: 'Odisha' },
  { x: 38, y: 38, r: 25, intensity: 0.6, label: 'Bihar' },
  { x: 55, y: 40, r: 22, intensity: 0.55, label: 'W. Bengal' },
  { x: 18, y: 45, r: 20, intensity: 0.4, label: 'Gujarat' },
  { x: 34, y: 28, r: 15, intensity: 0.35, label: 'Himachal' },
  { x: 45, y: 32, r: 12, intensity: 0.25, label: 'UP' },
]

export default function AuthorityDashboard({ onNav }: Props) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
            AUTHORITY PORTAL / COMMAND CENTER
          </div>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
            COMMAND CENTER
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
            Logged in as DM Suresh Menon — NDMA HQ, New Delhi · {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{
              padding: '8px 14px',
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 12,
              color: '#0f172a',
              fontFamily: 'JetBrains Mono, monospace',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} className="live-dot" />
            LIVE MODE
          </div>
          <button
            style={{
              padding: '8px 16px',
              background: '#dc2626',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif',
              letterSpacing: '0.06em',
            }}
          >
            🔔 BROADCAST ALERT
          </button>
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Active Incidents', value: '247', delta: '+12', color: '#ef4444', icon: '⚠' },
          { label: 'Critical Cases', value: '38', delta: '+5', color: '#dc2626', icon: '🆘' },
          { label: 'Lives Assisted', value: '18,392', delta: '+842', color: '#10b981', icon: '❤' },
          { label: 'Teams Deployed', value: '142', delta: '+8', color: '#2563eb', icon: '◉' },
          { label: 'Relief Camps', value: '312', delta: '+22', color: '#f59e0b', icon: '⊞' },
          { label: 'Volunteers Active', value: '4,219', delta: '+341', color: '#7c3aed', icon: '◈' },
        ].map((k) => (
          <div
            key={k.label}
            style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderTop: `3px solid ${k.color}`,
              borderRadius: 8,
              padding: '14px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 16, color: k.color }}>{k.icon}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '1px 5px', borderRadius: 3 }}>
                {k.delta}
              </span>
            </div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 26, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
              {k.value}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 3, lineHeight: 1.3 }}>{k.label}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Heatmap */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
              LIVE DISASTER HEATMAP — INDIA
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} className="live-dot" />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#ef4444' }}>LIVE</span>
            </div>
          </div>
          <div
            style={{
              height: 260,
              background: 'linear-gradient(160deg, #0f172a, #0b1f3a)',
              borderRadius: 8,
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
                  'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* SVG heatmap */}
            <svg viewBox="0 0 100 80" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {/* India rough outline — simplified */}
              <path
                d="M 30 10 L 60 10 L 75 25 L 78 45 L 65 65 L 55 72 L 45 68 L 30 55 L 20 45 L 18 30 Z"
                fill="rgba(30,58,95,0.4)"
                stroke="rgba(96,165,250,0.3)"
                strokeWidth="0.5"
              />
              {/* Heat blobs */}
              {heatmapCells.map((cell, i) => (
                <g key={i}>
                  <circle
                    cx={cell.x}
                    cy={cell.y}
                    r={cell.r}
                    fill={`rgba(220, 38, 38, ${cell.intensity * 0.35})`}
                    style={{ filter: 'blur(6px)' }}
                  />
                  <circle
                    cx={cell.x}
                    cy={cell.y}
                    r={cell.r * 0.4}
                    fill={`rgba(239, 68, 68, ${cell.intensity * 0.7})`}
                    style={{ filter: 'blur(2px)' }}
                  />
                  <circle cx={cell.x} cy={cell.y} r={3} fill="#fff" opacity={0.9} />
                  <text x={cell.x + 4} y={cell.y - 4} fontSize="3.5" fill="rgba(255,255,255,0.7)">
                    {cell.label}
                  </text>
                </g>
              ))}
            </svg>
            {/* Legend */}
            <div
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                padding: '5px 8px',
                background: 'rgba(0,0,0,0.5)',
                borderRadius: 4,
              }}
            >
              <div style={{ display: 'flex', gap: 3 }}>
                {['rgba(220,38,38,0.2)', 'rgba(220,38,38,0.5)', 'rgba(220,38,38,0.8)', '#ef4444'].map((c, i) => (
                  <div key={i} style={{ width: 12, height: 6, background: c, borderRadius: 1 }} />
                ))}
              </div>
              <span style={{ fontSize: 8, color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>LOW → CRITICAL</span>
            </div>
          </div>
        </div>

        {/* Trend chart */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            24H INCIDENT TREND
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="incGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="resGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <Tooltip
                contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }}
              />
              <Area type="monotone" dataKey="incidents" stroke="#dc2626" strokeWidth={2} fill="url(#incGrad)" name="Incidents" />
              <Area type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} fill="url(#resGrad)" name="Resolved" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resource chart + Active incidents */}
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 20 }}>
        {/* Resource chart */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            RESOURCE BY STATE
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={resourceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 9, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} width={60} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
              <Bar dataKey="boats" fill="#2563eb" name="Boats" radius={2} />
              <Bar dataKey="tents" fill="#10b981" name="Tents" radius={2} />
            </BarChart>
          </ResponsiveContainer>

          {/* Volunteer/camp status */}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: 'Volunteers Available', value: '1,842', color: '#10b981' },
              { label: 'Volunteers Deployed', value: '2,377', color: '#2563eb' },
              { label: 'Camps at Capacity', value: '47', color: '#ef4444' },
              { label: 'Camps Available', value: '265', color: '#10b981' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '10px', background: '#f8fafc', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#64748b', marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Active incidents table */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
              ACTIVE INCIDENTS
            </h3>
            <div style={{ display: 'flex', gap: 8 }}>
              {['ALL', 'CRITICAL', 'FLOOD', 'CYCLONE'].map((f) => (
                <button
                  key={f}
                  style={{
                    padding: '4px 10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: 4,
                    background: f === 'ALL' ? '#0f172a' : '#fff',
                    color: f === 'ALL' ? '#fff' : '#64748b',
                    fontSize: 10,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.04em',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                {['ID', 'TYPE', 'LOCATION', 'SEV', 'VICTIMS', 'TEAM', 'STATUS', 'AGE'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '6px 8px',
                      fontSize: 9,
                      fontFamily: 'JetBrains Mono, monospace',
                      color: '#94a3b8',
                      letterSpacing: '0.06em',
                      fontWeight: 600,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeIncidents.map((inc) => (
                <tr
                  key={inc.id}
                  onClick={() => onNav('incident')}
                  style={{ borderBottom: '1px solid #f8fafc', cursor: 'pointer' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = '#f8fafc')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = 'transparent')}
                >
                  <td style={{ padding: '10px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#2563eb', fontWeight: 600 }}>
                    {inc.id}
                  </td>
                  <td style={{ padding: '10px 8px' }}>
                    <span
                      style={{
                        padding: '2px 6px',
                        borderRadius: 3,
                        fontSize: 9,
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                        background: inc.type === 'FLOOD' ? 'rgba(59,130,246,0.1)' : inc.type === 'CYCLONE' ? 'rgba(6,182,212,0.1)' : inc.type === 'LANDSLIDE' ? 'rgba(161,98,7,0.1)' : 'rgba(124,58,237,0.1)',
                        color: inc.type === 'FLOOD' ? '#3b82f6' : inc.type === 'CYCLONE' ? '#06b6d4' : inc.type === 'LANDSLIDE' ? '#a16207' : '#7c3aed',
                      }}
                    >
                      {inc.type}
                    </span>
                  </td>
                  <td style={{ padding: '10px 8px', fontSize: 12, color: '#334155', maxWidth: 160 }}>
                    {inc.loc}
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: 1 }}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: 1,
                            background: n <= inc.severity ? (inc.severity >= 4 ? '#ef4444' : inc.severity >= 3 ? '#f59e0b' : '#10b981') : '#e2e8f0',
                          }}
                        />
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: '10px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#475569' }}>
                    {inc.victims}
                  </td>
                  <td style={{ padding: '10px 8px', fontSize: 11, color: '#64748b' }}>{inc.team}</td>
                  <td style={{ padding: '10px 8px' }}>
                    <span
                      style={{
                        padding: '2px 6px',
                        borderRadius: 3,
                        fontSize: 9,
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                        background:
                          inc.status === 'CRITICAL'
                            ? 'rgba(239,68,68,0.1)'
                            : inc.status === 'IN PROGRESS' || inc.status === 'RESPONDING'
                            ? 'rgba(245,158,11,0.1)'
                            : 'rgba(16,185,129,0.1)',
                        color:
                          inc.status === 'CRITICAL'
                            ? '#ef4444'
                            : inc.status === 'IN PROGRESS' || inc.status === 'RESPONDING'
                            ? '#f59e0b'
                            : '#10b981',
                      }}
                    >
                      {inc.status}
                    </span>
                  </td>
                  <td style={{ padding: '10px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>
                    {inc.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
