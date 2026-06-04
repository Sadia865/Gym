import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Dumbbell,
  Calendar,
  CreditCard,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  MessageCircle,
  UtensilsCrossed,
  TrendingUp,
  Receipt,
  Crown,
  X,
  ChevronDown,
  Zap,
} from 'lucide-react';

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  count?: number;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
  collapsible?: boolean;
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Main',
    items: [
      { label: 'Dashboard',  href: '/dashboard',  icon: LayoutDashboard },
      { label: 'Members',    href: '/members',    icon: Users,          count: 12 },
      { label: 'Attendance', href: '/attendance', icon: Calendar },
      { label: 'Trainers',   href: '/trainers',   icon: Dumbbell },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Payments',      href: '/payments',      icon: CreditCard },
      { label: 'Reports',       href: '/reports',       icon: BarChart3 },
      { label: 'Expenses',      href: '/expenses',      icon: Receipt },
      { label: 'Subscriptions', href: '/subscriptions', icon: Crown },
    ],
  },
  {
    title: 'Training',
    collapsible: true,
    items: [
      { label: 'Workout Plans', href: '/workouts', icon: TrendingUp },
      { label: 'Diet Plans',    href: '/diets',    icon: UtensilsCrossed },
    ],
  },
  {
    title: 'Automation',
    items: [
      { label: 'WhatsApp',  href: '/whatsapp',  icon: MessageCircle, badge: 'Live' },
      { label: 'Messages',  href: '/messages',  icon: MessageSquare },
    ],
  },
  {
    title: 'General',
    items: [
      { label: 'Settings', href: '/settings', icon: Settings },
      { label: 'Support',  href: '/support',  icon: HelpCircle },
    ],
  },
];

export default function Sidebar({ isMobile = false, onClose }: SidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const isActive = (href: string) =>
    location.pathname === href || (href === '/dashboard' && location.pathname === '/');

  const toggleSection = (title: string) =>
    setCollapsed(prev => ({ ...prev, [title]: !prev[title] }));

  return (
    <aside className="sidebar-root">
      {/* Logo */}
      <div style={{
        padding: '18px 16px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div>
          <h1 className="sidebar-logo" style={{ fontSize: '1.2rem' }}>
            GYMFLOW AI
          </h1>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
            Fitness Platform
          </p>
        </div>
        {isMobile && onClose && (
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'transparent',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Nav sections */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 8px' }}>
        {NAV_SECTIONS.map(section => {
          const isCollapsed = section.collapsible && collapsed[section.title];
          return (
            <div key={section.title} style={{ marginBottom: '4px' }}>
              {/* Section header */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 8px 4px',
                  cursor: section.collapsible ? 'pointer' : 'default',
                }}
                onClick={section.collapsible ? () => toggleSection(section.title) : undefined}
              >
                <span className="sidebar-section-title" style={{ padding: 0, margin: 0 }}>
                  {section.title}
                </span>
                {section.collapsible && (
                  <ChevronDown
                    size={12}
                    style={{
                      color: 'var(--text-muted)',
                      transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                )}
              </div>

              {/* Items */}
              {!isCollapsed && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {section.items.map(item => {
                    const active = isActive(item.href);
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`nav-item ${active ? 'nav-active' : ''}`}
                        onClick={isMobile ? onClose : undefined}
                        style={{ minHeight: 40, padding: '8px 12px' }}
                      >
                        <span className="nav-icon" style={{ flexShrink: 0 }}>
                          <Icon size={17} strokeWidth={active ? 2 : 1.75} />
                        </span>
                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.label}
                        </span>
                        {item.badge && (
                          <span style={{
                            fontSize: '0.55rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '999px',
                            background: 'rgba(37,211,102,0.15)',
                            border: '1px solid rgba(37,211,102,0.3)',
                            color: '#4ade80',
                            letterSpacing: '0.04em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}>
                            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 4px #4ade80' }} />
                            {item.badge}
                          </span>
                        )}
                        {item.count != null && !item.badge && (
                          <span className="nav-count">{item.count}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Upgrade Banner */}
      <div style={{
        padding: '12px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(79,124,255,0.12) 0%, rgba(168,85,247,0.08) 100%)',
          border: '1px solid rgba(79,124,255,0.18)',
          borderRadius: '12px',
          padding: '12px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.065)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Zap size={13} style={{ color: 'var(--accent-amber)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              PRO VERSION
            </span>
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.4 }}>
            Unlimited members + WhatsApp automation
          </p>
          <button style={{
            width: '100%',
            padding: '7px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: 700,
            fontFamily: 'var(--font-body)',
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-purple) 100%)',
            color: '#fff',
            boxShadow: '0 4px 16px rgba(79,124,255,0.35)',
            transition: 'opacity 0.15s ease, transform 0.15s ease',
          }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}