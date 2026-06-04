import React, { useState, useEffect } from 'react';
import {
  Users,
  Dumbbell,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  UserPlus,
  Download,
  ChevronRight,
} from 'lucide-react';
import MetricCard from '../components/cards/MetricCard';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const monthlyData = [
    { name: 'Jan', members: 85,  revenue: 8500 },
    { name: 'Feb', members: 92,  revenue: 9200 },
    { name: 'Mar', members: 110, revenue: 11000 },
    { name: 'Apr', members: 128, revenue: 12800 },
    { name: 'May', members: 142, revenue: 14200 },
    { name: 'Jun', members: 155, revenue: 15500 },
  ];

  const paymentMethodData = [
    { name: 'Cash',   value: 65, color: '#4F7CFF' },
    { name: 'Online', value: 35, color: '#00D4FF' },
  ];

  const recentMembers = [
    { id: 1, name: 'John Doe',     email: 'john@example.com', joined: '2024-06-10', plan: 'Premium', status: 'active' },
    { id: 2, name: 'Jane Smith',   email: 'jane@example.com', joined: '2024-06-08', plan: 'Basic',   status: 'active' },
    { id: 3, name: 'Mike Wilson',  email: 'mike@example.com', joined: '2024-06-05', plan: 'Premium', status: 'expiring' },
    { id: 4, name: 'Sara Al-Hajj', email: 'sara@example.com', joined: '2024-06-03', plan: 'Basic',   status: 'active' },
  ];

  const quickActions = [
    { label: 'Add Member',    href: '/members',   icon: UserPlus,   color: 'var(--accent-primary)' },
    { label: 'Record Payment', href: '/payments',  icon: DollarSign, color: 'var(--accent-cyan)' },
    { label: 'View Reports',  href: '/reports',   icon: TrendingUp, color: 'var(--accent-emerald)' },
    { label: 'Export Data',   href: '/reports',   icon: Download,   color: 'var(--accent-amber)' },
  ];

  const metrics = [
    { title: 'Total Members',    value: '155',     change: 12,   icon: Users,      color: 'var(--accent-primary)' },
    { title: 'Monthly Revenue',  value: '$15,500', change: 8.5,  icon: DollarSign, color: 'var(--accent-cyan)' },
    { title: 'Attendance Today', value: '82',      change: -3,   icon: Activity,   color: 'var(--accent-emerald)' },
    { title: 'Active Trainers',  value: '5',       change: 0,    icon: Dumbbell,   color: 'var(--accent-amber)' },
  ];

  const timeStr = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div style={{
        background: 'rgba(8,10,15,0.98)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '10px',
        padding: '10px 14px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} style={{ color: p.stroke, fontSize: '0.8rem', fontWeight: 600, marginBottom: '2px' }}>
            {p.name === 'revenue' ? `$${p.value.toLocaleString()}` : p.value} {p.name}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-5 fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Dashboard</h1>
          <p className="page-header-subtitle">Welcome back — here's your gym overview</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Live clock */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '6px 12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--glass-border)',
            borderRadius: '8px',
          }}>
            <Clock size={13} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              {timeStr}
            </span>
            <span style={{ width: 1, height: 12, background: 'var(--glass-border)' }} />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{dateStr}</span>
          </div>
          <button className="btn btn-ghost" style={{ fontSize: '0.8rem' }}>Last 30 Days</button>
          <button className="btn btn-primary" style={{ fontSize: '0.8rem' }}>
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="stats-grid stagger-children">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
        {quickActions.map(({ label, href, icon: Icon, color }) => (
          <Link key={href + label} to={href}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 14px',
              background: 'var(--glass-sm)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 500,
              transition: 'all 0.15s ease',
              boxShadow: 'var(--card-shine)',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--glass-md)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,124,255,0.2)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--glass-sm)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: '7px',
              background: `${color}1a`,
              border: `1px solid ${color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={14} style={{ color }} />
            </span>
            <span className="truncate-1">{label}</span>
          </Link>
        ))}
      </div>

      {/* Alerts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="responsive-2col">
        <div className="glass-card" style={{ padding: '14px 16px', border: '1px solid rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <AlertCircle size={18} style={{ color: '#fca5a5', flexShrink: 0, marginTop: 1 }} />
            <div>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fca5a5', fontFamily: 'var(--font-display)' }}>
                Expiring Memberships
              </h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: 3 }}>
                5 members expire this week
              </p>
            </div>
            <Link to="/members" style={{ marginLeft: 'auto', color: '#fca5a5', opacity: 0.7, flexShrink: 0 }}>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '14px 16px', border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={18} style={{ color: '#6ee7b7', flexShrink: 0, marginTop: 1 }} />
            <div>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6ee7b7', fontFamily: 'var(--font-display)' }}>
                WhatsApp Active
              </h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: 3 }}>
                153 messages sent today
              </p>
            </div>
            <Link to="/whatsapp" style={{ marginLeft: 'auto', color: '#6ee7b7', opacity: 0.7, flexShrink: 0 }}>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="responsive-charts">
        {/* Revenue & Members Chart */}
        <div className="glass-card" style={{ padding: '20px 20px 12px', gridColumn: 'span 2' }}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Revenue & Member Growth
              </h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>Last 6 months</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['1M', '3M', '6M'].map(t => (
                <button key={t} className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: '0.7rem', minHeight: 'unset' }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
              <YAxis stroke="var(--text-muted)" tick={{ fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} width={40} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '0.75rem', paddingTop: '8px' }} />
              <Line type="monotone" dataKey="revenue" name="revenue" stroke="var(--accent-primary)" strokeWidth={2.5}
                dot={{ fill: 'var(--accent-primary)', r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: 'var(--accent-primary)', strokeWidth: 0 }} />
              <Line type="monotone" dataKey="members" name="members" stroke="var(--accent-cyan)" strokeWidth={2.5}
                dot={{ fill: 'var(--accent-cyan)', r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: 'var(--accent-cyan)', strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Methods */}
        <div className="glass-card" style={{ padding: '20px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 16 }}>
            Payment Methods
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={paymentMethodData} cx="50%" cy="50%" innerRadius={48} outerRadius={75} paddingAngle={5} dataKey="value">
                {paymentMethodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: 'rgba(8,10,15,0.98)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
                formatter={(v: any) => [`${v}%`]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {paymentMethodData.map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.name}</span>
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Members */}
      <div className="glass-card" style={{ borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              Recent Members
            </h3>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>Latest signups</p>
          </div>
          <Link to="/members" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary-lt)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}>
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: '0.82rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.15)' }}>
                {['Name', 'Email', 'Plan', 'Joined', 'Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentMembers.map(member => (
                <tr key={member.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.025)' }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(79,124,255,0.04)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ padding: '11px 16px', color: 'var(--text-primary)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: `linear-gradient(135deg, var(--accent-primary), var(--accent-purple))`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.65rem', fontWeight: 700, color: '#fff', flexShrink: 0,
                      }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {member.name}
                    </div>
                  </td>
                  <td style={{ padding: '11px 16px', color: 'var(--text-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{member.email}</td>
                  <td style={{ padding: '11px 16px', whiteSpace: 'nowrap' }}>
                    <span style={{
                      fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
                      padding: '2px 8px', borderRadius: 999,
                      background: member.plan === 'Premium' ? 'rgba(168,85,247,0.12)' : 'rgba(79,124,255,0.10)',
                      border: `1px solid ${member.plan === 'Premium' ? 'rgba(168,85,247,0.3)' : 'rgba(79,124,255,0.25)'}`,
                      color: member.plan === 'Premium' ? '#c084fc' : 'var(--accent-primary-lt)',
                    }}>{member.plan}</span>
                  </td>
                  <td style={{ padding: '11px 16px', color: 'var(--text-tertiary)', fontSize: '0.72rem', whiteSpace: 'nowrap' }}>{member.joined}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <span className={`badge ${member.status === 'active' ? 'badge-active' : 'badge-warning'}`}>
                      <span className="badge-dot" />
                      {member.status === 'active' ? 'Active' : 'Expiring'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom spacer for mobile tab bar */}
      <div style={{ height: 8 }} />
    </div>
  );
};

export default Dashboard;