import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Bell,
  MessageSquare,
  LogOut,
  Settings,
  User,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Focus search on open
  useEffect(() => {
    if (showMobileSearch) searchRef.current?.focus();
  }, [showMobileSearch]);

  const notifications = [
    { id: 1, type: 'warning', title: 'Expiring Memberships', msg: '5 members expire this week', time: '2m ago' },
    { id: 2, type: 'error',   title: 'Payment Pending',       msg: '3 online payments pending',   time: '15m ago' },
    { id: 3, type: 'success', title: 'WhatsApp Active',        msg: '153 messages sent today',     time: '1h ago' },
  ];

  const typeColors: Record<string, string> = {
    warning: 'rgba(245,158,11,0.12)',
    error:   'rgba(239,68,68,0.12)',
    success: 'rgba(16,185,129,0.12)',
  };
  const typeBorder: Record<string, string> = {
    warning: 'rgba(245,158,11,0.25)',
    error:   'rgba(239,68,68,0.25)',
    success: 'rgba(16,185,129,0.25)',
  };
  const typeText: Record<string, string> = {
    warning: '#fcd34d',
    error:   '#fca5a5',
    success: '#6ee7b7',
  };

  return (
    <>
      <nav className="navbar-root">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="navbar-icon-btn md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>

          {/* Desktop search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
              <input
                type="text"
                placeholder="Search members, payments..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)] focus:bg-[rgba(79,124,255,0.07)] focus:border-[rgba(79,124,255,0.5)] transition-all"
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Mobile search toggle */}
          <button
            className="navbar-icon-btn md:hidden"
            onClick={() => setShowMobileSearch(v => !v)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              className="navbar-icon-btn relative"
              onClick={() => { setShowNotifications(v => !v); setShowDropdown(false); }}
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent-red)] rounded-full animate-pulse" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-80 z-50 rounded-xl overflow-hidden shadow-2xl"
                style={{ background: 'rgba(8,10,15,0.98)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-sm font-display font-bold text-[var(--text-primary)]">Notifications</span>
                  <span className="text-xs text-[var(--accent-primary-lt)] cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="py-2 max-h-80 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className="mx-2 mb-2 p-3 rounded-lg"
                      style={{ background: typeColors[n.type], border: `1px solid ${typeBorder[n.type]}` }}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-bold" style={{ color: typeText[n.type] }}>{n.title}</p>
                        <span className="text-[10px] text-[var(--text-muted)] shrink-0">{n.time}</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">{n.msg}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] px-4 py-2">
                  <button className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1 w-full justify-center">
                    View all <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <button className="navbar-icon-btn relative" aria-label="Messages">
            <MessageSquare size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent-cyan)] rounded-full" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative ml-1" ref={dropdownRef}>
            <button
              onClick={() => { setShowDropdown(v => !v); setShowNotifications(false); }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.06)] transition"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-purple)] flex items-center justify-center text-white text-xs font-bold shrink-0">
                AR
              </div>
              <span className="hidden sm:block text-sm font-medium text-[var(--text-secondary)]">Admin</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-52 rounded-xl overflow-hidden shadow-2xl z-50"
                style={{ background: 'rgba(8,10,15,0.98)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="p-3 border-b border-[rgba(255,255,255,0.06)]">
                  <p className="font-display font-bold text-sm text-[var(--text-primary)]">Admin User</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">admin@gymflow.com</p>
                </div>
                <div className="py-1.5">
                  <Link to="/settings" onClick={() => setShowDropdown(false)}
                    className="w-full px-4 py-2.5 flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(79,124,255,0.08)] transition">
                    <User size={15} /><span>My Profile</span>
                  </Link>
                  <Link to="/settings" onClick={() => setShowDropdown(false)}
                    className="w-full px-4 py-2.5 flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(79,124,255,0.08)] transition">
                    <Settings size={15} /><span>Settings</span>
                  </Link>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] p-1.5">
                  <button
                    onClick={() => { setShowDropdown(false); /* handle logout */ }}
                    className="w-full px-4 py-2.5 flex items-center gap-2.5 text-sm text-[#fca5a5] hover:bg-[rgba(239,68,68,0.10)] transition rounded-lg"
                  >
                    <LogOut size={15} /><span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar (slides down) */}
      <div style={{
        maxHeight: showMobileSearch ? '56px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.22s cubic-bezier(0.4,0,0.2,1)',
      }}
        className="md:hidden border-b border-[var(--glass-border)] bg-[rgba(8,10,15,0.95)]"
      >
        <div className="relative px-3 py-2">
          <Search size={15} className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search members, payments..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="w-full pl-8 pr-8 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
          />
          {searchValue && (
            <button onClick={() => setSearchValue('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}