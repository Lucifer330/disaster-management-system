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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import type { Screen } from '../types'

interface Props {
  onNav: (s: Screen) => void
}

const monthlyData = [
  { month: 'Feb', incidents: 142, resolved: 138, lives: 1820, resources: 45 },
  { month: 'Mar', incidents: 189, resolved: 181, lives: 2340, resources: 62 },
  { month: 'Apr', incidents: 167, resolved: 162, lives: 2100, resources: 58 },
  { month: 'May', incidents: 234, resolved: 220, lives: 3200, resources: 78 },
  { month: 'Jun', incidents: 312, resolved: 289, lives: 4800, resources: 94 },
  { month: 'Jul', incidents: 428, resolved: 391, lives: 6400, resources: 118 },
  { month: 'Aug', incidents: 247, resolved: 210, lives: 3900, resources: 88 },
]

const responseTimeData = [
  { time: 'Week 1', ndrf: 42, sdrf: 68, ngo: 95 },
  { time: 'Week 2', ndrf: 38, sdrf: 61, ngo: 88 },
  { time: 'Week 3', ndrf: 35, sdrf: 55, ngo: 82 },
  { time: 'Week 4', ndrf: 31, sdrf: 49, ngo: 76 },
  { time: 'Week 5', ndrf: 28, sdrf: 44, ngo: 70 },
  { time: 'Week 6', ndrf: 25, sdrf: 40, ngo: 65 },
]

const disasterDistrib = [
  { name: 'Flood', value: 44, color: '#3b82f6' },
  { name: 'Cyclone', value: 22, color: '#06b6d4' },
  { name: 'Earthquake', value: 14, color: '#8b5cf6' },
  { name: 'Landslide', value: 12, color: '#f59e0b' },
  { name: 'Fire', value: 5, color: '#ef4444' },
  { name: 'Other', value: 3, color: '#64748b' },
]

const stateData = [
  { state: 'Assam', incidents: 82, resolved: 74, lives: 4200 },
  { state: 'Odisha', incidents: 61, resolved: 58, lives: 2800 },
  { state: 'Bihar', incidents: 49, resolved: 44, lives: 2100 },
  { state: 'W. Bengal', incidents: 38, resolved: 35, lives: 1600 },
  { state: 'Gujarat', incidents: 17, resolved: 17, lives: 800 },
]

const impactMetrics = [
  { label: 'Average AI Score Accuracy', value: '94.8%', trend: '+2.1%', color: '#10b981' },
  { label: 'Avg. First Response Time', value: '31 min', trend: '-8 min', color: '#10b981' },
  { label: 'Resource Wastage Reduction', value: '38%', trend: '+12%', color: '#10b981' },
  { label: 'Volunteer Engagement Rate', value: '87%', trend: '+5%', color: '#10b981' },
]

export default function Analytics({ onNav }: Props) {
  return (
    <div style={{ padding: '28px 32px', background: '#f1f5f9', minHeight: '100vh' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.1em', marginBottom: 4 }}>
          SYSTEM / ANALYTICS DASHBOARD
        </div>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 32, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
          ANALYTICS & IMPACT CENTER
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>
          Platform-wide disaster response metrics · Fiscal Year 2026 · Updated Aug 13, 2026
        </p>
      </div>

      {/* Top KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Total Incidents', value: '1,719', delta: 'YTD 2026', color: '#ef4444' },
          { label: 'Lives Assisted', value: '24,560', delta: '↑ 41% vs 2025', color: '#10b981' },
          { label: 'Resources Deployed', value: '₹84.2 Cr', delta: '↓ 18% waste', color: '#2563eb' },
          { label: 'Avg Response Time', value: '31 min', delta: '↓ from 89 min', color: '#f59e0b' },
          { label: 'Resolution Rate', value: '91.8%', delta: '↑ from 76%', color: '#7c3aed' },
        ].map((k) => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderTop: `3px solid ${k.color}`, borderRadius: 8, padding: '16px' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 28, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#334155', marginTop: 4 }}>{k.label}</div>
            <div style={{ fontSize: 10, color: k.color, marginTop: 3, fontFamily: 'JetBrains Mono, monospace' }}>{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Monthly trend */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            MONTHLY INCIDENT TREND
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="incGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="resGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
              <Area type="monotone" dataKey="incidents" stroke="#dc2626" strokeWidth={2} fill="url(#incGrad2)" name="Incidents" />
              <Area type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} fill="url(#resGrad2)" name="Resolved" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Response time */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            RESPONSE TIME IMPROVEMENT (MIN)
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
              <Line type="monotone" dataKey="ndrf" stroke="#dc2626" strokeWidth={2.5} dot={{ fill: '#dc2626', r: 3 }} name="NDRF" />
              <Line type="monotone" dataKey="sdrf" stroke="#2563eb" strokeWidth={2.5} dot={{ fill: '#2563eb', r: 3 }} name="SDRF" />
              <Line type="monotone" dataKey="ngo" stroke="#10b981" strokeWidth={2.5} dot={{ fill: '#10b981', r: 3 }} name="NGO" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 280px', gap: 20, marginBottom: 20 }}>
        {/* Disaster distribution */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            DISASTER TYPE DISTRIBUTION
          </h3>
          <PieChart width={220} height={180}>
            <Pie
              data={disasterDistrib}
              cx={110}
              cy={90}
              innerRadius={45}
              outerRadius={80}
              dataKey="value"
              paddingAngle={2}
            >
              {disasterDistrib.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} formatter={(v) => `${v}%`} />
          </PieChart>
          <div style={{ marginTop: 8 }}>
            {disasterDistrib.map((d) => (
              <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: '#475569', flex: 1 }}>{d.name}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600, color: '#334155' }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* State-wise */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            STATE-WISE RESPONSE PERFORMANCE
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={stateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="state" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
              <Bar dataKey="incidents" fill="#ef4444" name="Incidents" radius={[3, 3, 0, 0]} />
              <Bar dataKey="resolved" fill="#10b981" name="Resolved" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
            <thead>
              <tr>
                {['STATE', 'INCIDENTS', 'RESOLVED', 'LIVES', 'RATE'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '4px 8px', fontSize: 9, fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', letterSpacing: '0.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stateData.map((s) => (
                <tr key={s.state} style={{ borderTop: '1px solid #f8fafc' }}>
                  <td style={{ padding: '6px 8px', fontSize: 12, fontWeight: 600, color: '#334155' }}>{s.state}</td>
                  <td style={{ padding: '6px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#ef4444' }}>{s.incidents}</td>
                  <td style={{ padding: '6px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#10b981' }}>{s.resolved}</td>
                  <td style={{ padding: '6px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#475569' }}>{s.lives.toLocaleString()}</td>
                  <td style={{ padding: '6px 8px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#334155' }}>
                    {Math.round((s.resolved / s.incidents) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Impact metrics */}
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
            PLATFORM IMPACT
          </h3>
          {impactMetrics.map((m) => (
            <div key={m.label} style={{ padding: '14px', border: '1px solid #f1f5f9', borderRadius: 8, marginBottom: 10, background: '#f8fafc' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 26, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 3, lineHeight: 1.3 }}>{m.label}</div>
              <div style={{ fontSize: 11, color: m.color, marginTop: 4, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{m.trend}</div>
            </div>
          ))}

          <div
            style={{
              padding: '14px',
              background: '#0b1422',
              borderRadius: 8,
              marginTop: 4,
            }}
          >
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              AI ENGINE STATS
            </div>
            {[
              { label: 'Reports analyzed', value: '1,719' },
              { label: 'Avg processing time', value: '1.4 sec' },
              { label: 'False positive rate', value: '2.1%' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: '#64748b' }}>{s.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#93c5fd', fontWeight: 600 }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lives assisted chart */}
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
        <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '0.04em', margin: '0 0 16px' }}>
          LIVES ASSISTED — MONTHLY TREND
        </h3>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="livesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 6, fontSize: 11, color: '#e2e8f0', fontFamily: 'JetBrains Mono' }} />
            <Area type="monotone" dataKey="lives" stroke="#10b981" strokeWidth={2.5} fill="url(#livesGrad)" name="Lives Assisted" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
