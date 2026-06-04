import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Settings,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

const MOBILE_TABS = [
  { label: 'Home',     href: '/dashboard', icon: LayoutDashboard },
  { label: 'Members',  href: '/members',   icon: Users },
  { label: 'Payments', href: '/payments',  icon: CreditCard },
  { label: 'Reports',  href: '/reports',   icon: BarChart3 },
  { label: 'Settings', href: '/settings',  icon: Settings },
];

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const location = useLocation();
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Close sidebar on route change
  useEffect(() => {
    if (sidebarOpen) closeSidebar();
  }, [location.pathname]);

  // Prevent body scroll when sidebar open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const openSidebar = () => {
    setIsAnimatingOut(false);
    setSidebarOpen(true);
    requestAnimationFrame(() => setIsAnimatingIn(true));
  };

  const closeSidebar = () => {
    setIsAnimatingIn(false);
    setIsAnimatingOut(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setIsAnimatingOut(false);
    }, 280);
  };

  // Edge swipe to open
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    if (touchStartX.current < 24 && dx > 60 && dy < 60) openSidebar();
    if (sidebarOpen && dx < -60 && dy < 60) closeSidebar();
  };

  const drawerStyle: React.CSSProperties = {
    transform: isAnimatingIn ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
    willChange: 'transform',
  };

  const dimmerStyle: React.CSSProperties = {
    opacity: isAnimatingIn ? 1 : 0,
    transition: 'opacity 0.28s cubic-bezier(0.4,0,0.2,1)',
  };

  return (
    <div
      className="app-shell-outer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background orbs */}
      <div className="bg-orb bg-orb-1" style={{ opacity: 0.4 }} />
      <div className="bg-orb bg-orb-2" style={{ opacity: 0.35 }} />
      <div className="bg-orb bg-orb-3" style={{ opacity: 0.3 }} />

      {/* Desktop Sidebar */}
      <div className="sidebar-desktop-slot">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {(sidebarOpen || isAnimatingOut) && (
        <>
          <div
            className="sidebar-mobile-dimmer"
            style={dimmerStyle}
            onClick={closeSidebar}
          />
          <div className="sidebar-mobile-drawer" style={drawerStyle}>
            <Sidebar onClose={closeSidebar} isMobile />
          </div>
        </>
      )}

      {/* Main Content Column */}
      <div className="main-col">
        <Navbar onMenuClick={sidebarOpen ? closeSidebar : openSidebar} />

        <div className="page-scroll-area" style={{ paddingBottom: '72px' }}>
          <div className="page-motion-wrapper">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <MobileTabBar />
    </div>
  );
}

function MobileTabBar() {
  const location = useLocation();
  const isActive = (href: string) =>
    location.pathname === href || (href === '/dashboard' && location.pathname === '/');

  return (
    <nav className="mobile-tab-bar">
      {MOBILE_TABS.map(({ label, href, icon: Icon }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            to={href}
            className="mobile-tab-item"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              padding: '6px 4px',
              color: active ? 'var(--accent-primary-lt)' : 'var(--text-muted)',
              textDecoration: 'none',
              position: 'relative',
              transition: 'color 0.15s ease',
              fontSize: '0.6rem',
              fontFamily: 'var(--font-body)',
              fontWeight: active ? 600 : 400,
              letterSpacing: '0.03em',
            }}
          >
            {active && (
              <span style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '2px',
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-cyan))',
                borderRadius: '0 0 4px 4px',
                boxShadow: '0 0 8px rgba(79,124,255,0.6)',
              }} />
            )}
            <span style={{
              padding: '4px 8px',
              borderRadius: '10px',
              background: active ? 'rgba(79,124,255,0.12)' : 'transparent',
              transition: 'background 0.15s ease',
            }}>
              <Icon size={18} strokeWidth={active ? 2 : 1.5} />
            </span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}