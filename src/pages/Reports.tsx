import React from 'react';
import { Download, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const monthlyData = [
    { month: 'Jan', members: 85, revenue: 8500, attendance: 320 },
    { month: 'Feb', members: 92, revenue: 9200, attendance: 350 },
    { month: 'Mar', members: 110, revenue: 11000, attendance: 420 },
    { month: 'Apr', members: 128, revenue: 12800, attendance: 480 },
    { month: 'May', members: 142, revenue: 14200, attendance: 520 },
    { month: 'Jun', members: 155, revenue: 15500, attendance: 550 },
  ];

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Reports</h1>
          <p className="page-header-subtitle">View detailed analytics and performance metrics</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Download size={16} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Date Range Filter */}
      <div className="flex gap-2">
        <button className="btn btn-ghost">Last 30 Days</button>
        <button className="btn btn-ghost">Last 3 Months</button>
        <button className="btn btn-ghost">Last Year</button>
        <div className="flex items-center gap-2 ml-auto">
          <Calendar size={16} className="text-[var(--text-muted)]" />
          <input type="date" className="px-3 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm" />
        </div>
      </div>

      {/* Revenue & Members Chart */}
      <div className="glass-card p-6 rounded-xl">
        <div className="mb-6">
          <h3 className="font-display font-bold text-[var(--text-primary)]">Revenue & Member Growth</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">Last 6 months</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" stroke="var(--text-muted)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-muted)" style={{ fontSize: '12px' }} yAxisId="left" />
            <YAxis stroke="var(--text-muted)" style={{ fontSize: '12px' }} yAxisId="right" orientation="right" />
            <Tooltip contentStyle={{
              backgroundColor: 'rgba(8,10,15,0.98)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="members" stroke="var(--accent-primary)" strokeWidth={2} name="Members" />
            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="var(--accent-cyan)" strokeWidth={2} name="Revenue" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Attendance Chart */}
      <div className="glass-card p-6 rounded-xl">
        <div className="mb-6">
          <h3 className="font-display font-bold text-[var(--text-primary)]">Monthly Attendance</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">Member check-ins per month</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" stroke="var(--text-muted)" style={{ fontSize: '12px' }} />
            <YAxis stroke="var(--text-muted)" style={{ fontSize: '12px' }} />
            <Tooltip contentStyle={{
              backgroundColor: 'rgba(8,10,15,0.98)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }} />
            <Legend />
            <Bar dataKey="attendance" fill="var(--accent-emerald)" name="Attendance" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Avg Monthly Growth</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-emerald)]">+8.2%</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Avg Attendance Rate</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-cyan)]">72%</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Revenue per Member</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-amber)]">AED 100</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Member Retention</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-primary)]">94%</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;