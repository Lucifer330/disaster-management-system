import { useState } from 'react'
import type { Screen } from './types'
import Sidebar from './components/Sidebar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import CitizenDashboard from './pages/CitizenDashboard'
import EmergencyReport from './pages/EmergencyReport'
import AIAnalysis from './pages/AIAnalysis'
import AuthorityDashboard from './pages/AuthorityDashboard'
import IncidentDetail from './pages/IncidentDetail'
import NGODashboard from './pages/NGODashboard'
import VolunteerDashboard from './pages/VolunteerDashboard'
import OfflineMode from './pages/OfflineMode'
import Analytics from './pages/Analytics'

const fullscreenPages: Screen[] = ['landing', 'login']

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [role, setRole] = useState('')

  const handleLogin = (r: string) => setRole(r)

  const fullscreen = fullscreenPages.includes(screen)

  const renderPage = () => {
    switch (screen) {
      case 'landing':
        return <LandingPage onNav={setScreen} />
      case 'login':
        return <LoginPage onNav={setScreen} onLogin={handleLogin} />
      case 'citizen':
        return <CitizenDashboard onNav={setScreen} />
      case 'report':
        return <EmergencyReport onNav={setScreen} />
      case 'ai-analysis':
        return <AIAnalysis onNav={setScreen} />
      case 'authority':
        return <AuthorityDashboard onNav={setScreen} />
      case 'incident':
        return <IncidentDetail onNav={setScreen} />
      case 'ngo':
        return <NGODashboard onNav={setScreen} />
      case 'volunteer':
        return <VolunteerDashboard onNav={setScreen} />
      case 'offline':
        return <OfflineMode onNav={setScreen} />
      case 'analytics':
        return <Analytics onNav={setScreen} />
      default:
        return <LandingPage onNav={setScreen} />
    }
  }

  if (fullscreen) {
    return (
      <div style={{ minHeight: '100vh', background: '#f1f5f9' }}>
        {renderPage()}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
      <Sidebar current={screen} onNav={setScreen} role={role} />
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        {/* Top bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: '#fff',
            borderBottom: '1px solid #e2e8f0',
            padding: '0 32px',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} className="live-dot" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#64748b', letterSpacing: '0.08em' }}>
              3 ACTIVE CRITICAL INCIDENTS
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94a3b8' }}>
              {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST
            </span>
            <button
              onClick={() => setScreen('report')}
              style={{
                padding: '5px 14px',
                background: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.06em',
              }}
            >
              🚨 SOS
            </button>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                cursor: 'pointer',
              }}
              onClick={() => setScreen('login')}
              title="Account"
            >
              👤
            </div>
          </div>
        </div>
        <div style={{ animation: 'slide-in 0.25s ease forwards' }}>
          {renderPage()}
        </div>
      </main>
    </div>
  )
}
