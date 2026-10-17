import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const inventory = [
  { item: 'Food Packets', total: 12000, used: 8400, unit: 'packs', color: '#10b981' },
  { item: 'Water Bottles', total: 50000, used: 32000, unit: 'bottles', color: '#3b82f6' },
  { item: 'Blankets', total: 3200, used: 2100, unit: 'units', color: '#f59e0b' },
  { item: 'First Aid Kits', total: 800, used: 520, unit: 'kits', color: '#ef4444' },
  { item: 'Tarpaulins', total: 2400, used: 1800, unit: 'sheets', color: '#8b5cf6' },
  { item: 'Medicines', total: 5000, used: 2200, unit: 'units', color: '#06b6d4' },
]

const missions = [
  { id: 'MSN-142', name: 'Brahmaputra Flood Relief', status: 'ACTIVE', location: 'Guwahati, Assam', volunteers: 48, beneficiaries: 1240 },
  { id: 'MSN-138', name: 'Cyclone Preparedness — Odisha', status: 'ACTIVE', location: 'Puri, Odisha', volunteers: 32, beneficiaries: 860 },
  { id: 'MSN-131', name: 'Landslide Recovery — HP', status: 'WRAPPING', location: 'Kullu, HP', volunteers: 18, beneficiaries: 340 },
  { id: 'MSN-124', name: 'Drought Aid — Bundelkhand', status: 'COMPLETED', location: 'Jhansi, UP', volunteers: 12, beneficiaries: 2100 },
]

const shelters = [
  { name: 'Guwahati Community Center', cap: 800, occupied: 672, status: 'OPEN' },
  { name: 'Puri Stadium Camp', cap: 1200, occupied: 1140, status: 'NEAR FULL' },
  { name: 'Kolkata Relief Hub', cap: 600, occupied: 284, status: 'OPEN' },
  { name: 'Patna School Camp', cap: 400, occupied: 388, status: 'NEAR FULL' },
]

const distData = [
  { day: 'Mon', food: 1200, water: 4500, kits: 80 },
  { day: 'Tue', food: 1800, water: 6200, kits: 110 },
  { day: 'Wed', food: 2200, water: 7800, kits: 130 },
  { day: 'Thu', food: 1900, water: 6900, kits: 95 },
  { day: 'Fri', food: 2400, water: 8400, kits: 145 },
  { day: 'Sat', food: 2800, water: 9200, kits: 162 },
  { day: 'Sun', food: 3100, water: 10400, kits: 180 },
]

const pieColors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']

export default function NGODashboard({ onNav }: Props) {
  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          NGO PORTAL / DASHBOARD
        </div>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
          NGO OPERATIONS HUB
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          Logged in as Anjali Mehta — Goonj Foundation · Member since 2019
        </p>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Active Missions', value: '2', color: '#10b981', icon: '◈' },
          { label: 'Beneficiaries', value: '4,540', color: '#2563eb', icon: '❤' },
          { label: 'Volunteers', value: '98', color: '#7c3aed', icon: '◉' },
          { label: 'Shelters Managed', value: '4', color: '#f59e0b', icon: '⊞' },
          { label: 'Resources Deployed', value: '₹18.4L', color: '#059669', icon: '◆' },
        ].map((k) => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderTop: `3px solid ${k.color}`, borderRadius: 8, padding: '16px' }}>
            <div style={{ fontSize: 18, color: k.color, marginBottom: 6 }}>{k.icon}</div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 28, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>{k.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Resource inventory */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
              RESOURCE INVENTORY
            </h3>
            <button
              style={{
                padding: '5px 12px',
                background: '#059669',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              + ADD STOCK
            </button>
          </div>
          {inventory.map((item) => {
            const pct = Math.round((item.used / item.total) * 100)
            return (
              <div key={item.item} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>{item.item}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#64748b' }}>
                    {item.used.toLocaleString()}/{item.total.toLocaleString()} {item.unit}
                  </span>
                </div>
                <div style={{ height: 7, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${pct}%`,
                      background: item.color,
                      borderRadius: 4,
                      transition: 'width 0.6s ease',
                    }}
                  />
                </div>
                <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2, fontFamily: 'JetBrains Mono, monospace', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{pct}% deployed</span>
                  <span>{(item.total - item.used).toLocaleString()} remaining</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Distribution chart */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            WEEKLY DISTRIBUTION
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={distData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
              <Bar dataKey="food" fill="#10b981" name="Food Packets" radius={2} />
              <Bar dataKey="kits" fill="#ef4444" name="Medical Kits" radius={2} />
            </BarChart>
          </ResponsiveContainer>
          {/* Pie */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
            <PieChart width={160} height={100}>
              <Pie
                data={inventory.map(i => ({ name: i.item, value: i.used }))}
                cx={80}
                cy={50}
                innerRadius={28}
                outerRadius={48}
                dataKey="value"
              >
                {inventory.map((_, i) => (
                  <Cell key={i} fill={pieColors[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
            </PieChart>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignContent: 'center', maxWidth: 180 }}>
              {inventory.map((item, i) => (
                <div key={item.item} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: pieColors[i], flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: '#64748b' }}>{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* Active missions */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: 0 }}>
              ACTIVE MISSIONS
            </h3>
            <button
              style={{
                padding: '5px 14px',
                background: '#0f172a',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              + NEW MISSION
            </button>
          </div>
          {missions.map((m) => (
            <div
              key={m.id}
              style={{
                padding: '16px',
                border: '1px solid #f1f5f9',
                borderLeft: `4px solid ${m.status === 'ACTIVE' ? '#10b981' : m.status === 'WRAPPING' ? '#f59e0b' : '#94a3b8'}`,
                borderRadius: 8,
                marginBottom: 12,
                background: '#f8fafc',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>{m.id}</span>
                    <span
                      style={{
                        padding: '2px 7px',
                        borderRadius: 3,
                        fontSize: 9,
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                        background: m.status === 'ACTIVE' ? 'rgba(16,185,129,0.1)' : m.status === 'WRAPPING' ? 'rgba(245,158,11,0.1)' : 'rgba(148,163,184,0.1)',
                        color: m.status === 'ACTIVE' ? '#10b981' : m.status === 'WRAPPING' ? '#f59e0b' : '#94a3b8',
                      }}
                    >
                      {m.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#0f172a', marginTop: 4 }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>📍 {m.location}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 12, color: '#64748b' }}>
                <span>🦺 {m.volunteers} volunteers</span>
                <span>❤ {m.beneficiaries.toLocaleString()} beneficiaries</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shelter management */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              SHELTER STATUS
            </h3>
            {shelters.map((s) => {
              const pct = Math.round((s.occupied / s.cap) * 100)
              return (
                <div key={s.name} style={{ padding: '12px', border: '1px solid #f1f5f9', borderRadius: 6, marginBottom: 10, background: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', lineHeight: 1.3, flex: 1 }}>{s.name}</span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                        color: pct >= 90 ? '#f59e0b' : '#10b981',
                        flexShrink: 0,
                        marginLeft: 8,
                      }}
                    >
                      {s.status}
                    </span>
                  </div>
                  <div style={{ fontSize: 11, color: '#64748b', marginBottom: 6 }}>
                    {s.occupied.toLocaleString()} / {s.cap.toLocaleString()} capacity
                  </div>
                  <div style={{ height: 5, background: '#e2e8f0', borderRadius: 3, overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${pct}%`,
                        background: pct >= 90 ? '#f59e0b' : '#10b981',
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Volunteer coordination */}
          <div style={{ background: '#0b1422', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 20 }}>
            <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', margin: '0 0 14px' }}>
              VOLUNTEER STATUS
            </h3>
            {[
              { label: 'On Active Mission', count: 98, color: '#10b981' },
              { label: 'Available / Standby', count: 34, color: '#2563eb' },
              { label: 'Training / Orientation', count: 12, color: '#f59e0b' },
              { label: 'Rest / Off-duty', count: 22, color: '#475569' },
            ].map((v) => (
              <div key={v.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: 12, color: '#94a3b8' }}>{v.label}</span>
                <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 20, fontWeight: 700, color: v.color }}>{v.count}</span>
              </div>
            ))}
            <button
              onClick={() => onNav('volunteer')}
              style={{
                width: '100%',
                marginTop: 14,
                padding: '10px',
                background: 'rgba(37,99,235,0.2)',
                color: '#93c5fd',
                border: '1px solid rgba(37,99,235,0.4)',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              VOLUNTEER DASHBOARD →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
