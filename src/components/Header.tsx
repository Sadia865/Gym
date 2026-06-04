import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onMobileMenuOpen: () => void;
}

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Overview of your gym performance' },
  '/members': { title: 'Members', subtitle: 'Manage gym members & memberships' },
  '/trainers': { title: 'Trainers', subtitle: 'Your team of fitness professionals' },
  '/payments': { title: 'Payments', subtitle: 'Financial transactions & billing' },
  '/attendance': { title: 'Attendance', subtitle: 'Track member check-ins & check-outs' },
  '/subscriptions': { title: 'Subscriptions', subtitle: 'Your IronCore SaaS subscription' },
  '/workout-plans': { title: 'Workout Plans', subtitle: 'Assigned training programs' },
  '/diet-plans': { title: 'Diet Plans', subtitle: 'Nutritional plans for members' },
  '/whatsapp': { title: 'WhatsApp Automation', subtitle: 'Automated messaging & logs' },
  '/reports': { title: 'Reports & Analytics', subtitle: 'Financial & performance insights' },
  '/settings': { title: 'Settings', subtitle: 'Configure your gym preferences' },
};

const Header: React.FC<HeaderProps> = ({ onMobileMenuOpen }) => {
  const location = useLocation();
  const pageInfo = pageTitles[location.pathname] || { title: 'IronCore', subtitle: '' };
  const [showNotifs, setShowNotifs] = useState(false);

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <header className="app-header">
      {/* Mobile menu */}
      <button className="mobile-menu-btn" onClick={onMobileMenuOpen} aria-label="Open menu">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Page title */}
      <div className="header-title-area">
        <h1 className="header-page-title">{pageInfo.title}</h1>
        <span className="header-page-subtitle">{pageInfo.subtitle}</span>
      </div>

      {/* Right actions */}
      <div className="header-actions">
        {/* Clock */}
        <div className="header-clock">
          <span className="clock-time">{timeStr}</span>
          <span className="clock-date">{dateStr}</span>
        </div>

        {/* Search */}
        <button className="header-icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            className="header-icon-btn"
            aria-label="Notifications"
            onClick={() => setShowNotifs(!showNotifs)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="notif-indicator" />
          </button>
          {showNotifs && (
            <div className="notif-dropdown animate-fade-down">
              <div className="notif-header">
                <span>Notifications</span>
                <span className="notif-count">3 new</span>
              </div>
              {[
                { icon: '⚠️', msg: '14 members expiring soon', time: '2h ago', type: 'warning' },
                { icon: '💬', msg: 'WhatsApp reminders sent to 12 members', time: '6h ago', type: 'success' },
                { icon: '💰', msg: 'Payment failed — Tariq Mahmoud', time: '1d ago', type: 'danger' },
              ].map((n, i) => (
                <div key={i} className={`notif-item notif-${n.type}`}>
                  <span className="notif-item-icon">{n.icon}</span>
                  <div className="notif-item-body">
                    <p className="notif-item-msg">{n.msg}</p>
                    <span className="notif-item-time">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="header-profile">
          <div className="avatar-placeholder" style={{ width: 36, height: 36, fontSize: '0.8rem' }}>OW</div>
          <div className="profile-info">
            <span className="profile-name">Omar Gym</span>
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>

      <style>{`
        .app-header {
          position: fixed;
          top: 0;
          left: var(--sidebar-w);
          right: 0;
          height: var(--header-h);
          background: rgba(11, 17, 32, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px;
          z-index: 40;
          transition: left var(--transition-slow);
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          padding: 7px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }

        @media (max-width: 900px) {
          .app-header { left: 0; }
          .mobile-menu-btn { display: flex; }
          .header-clock { display: none; }
        }

        .header-title-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .header-page-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .header-page-subtitle {
          font-size: 0.72rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .header-clock {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-right: 4px;
        }

        .clock-time {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .clock-date {
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .header-icon-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          border-radius: var(--radius-md);
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
          position: relative;
        }

        .header-icon-btn:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
          background: rgba(124,111,255,0.06);
        }

        .notif-indicator {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-red);
          border: 2px solid var(--bg-base);
          animation: pulse 2s infinite;
        }

        .notif-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-glow);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-elevated);
          width: 300px;
          overflow: hidden;
          z-index: 100;
        }

        .notif-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .notif-count {
          background: rgba(124,111,255,0.15);
          color: var(--accent-primary);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid rgba(124,111,255,0.25);
        }

        .notif-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 16px;
          transition: background var(--transition);
          cursor: pointer;
          border-left: 2px solid transparent;
        }

        .notif-item:hover { background: rgba(124,111,255,0.05); }
        .notif-warning { border-left-color: var(--accent-amber); }
        .notif-success { border-left-color: var(--accent-green); }
        .notif-danger { border-left-color: var(--accent-red); }

        .notif-item-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }

        .notif-item-msg {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 3px;
        }

        .notif-item-time { font-size: 0.7rem; color: var(--text-muted); }

        .header-profile {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 10px 4px 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all var(--transition);
        }

        .header-profile:hover {
          border-color: var(--border-hover);
          background: rgba(124,111,255,0.06);
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .profile-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .profile-role {
          font-size: 0.68rem;
          color: var(--accent-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </header>
  );
};

export default Header;