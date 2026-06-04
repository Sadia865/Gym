import React, { useState } from 'react';
import { Search, LogIn, LogOut, Calendar } from 'lucide-react';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState('2024-06-04');
  const [attendance] = useState([
    { id: 1, member: 'John Doe', checkIn: '06:30 AM', checkOut: '07:45 AM', duration: '1h 15m', status: 'completed' },
    { id: 2, member: 'Jane Smith', checkIn: '07:00 AM', checkOut: '08:30 AM', duration: '1h 30m', status: 'completed' },
    { id: 3, member: 'Mike Wilson', checkIn: '06:45 AM', checkOut: null, duration: 'Still inside', status: 'active' },
    { id: 4, member: 'Sarah Johnson', checkIn: '05:30 AM', checkOut: '06:45 AM', duration: '1h 15m', status: 'completed' },
    { id: 5, member: 'Ahmed Hassan', checkIn: '08:00 AM', checkOut: '09:15 AM', duration: '1h 15m', status: 'completed' },
    { id: 6, member: 'Lisa Anderson', checkIn: '06:15 AM', checkOut: '07:30 AM', duration: '1h 15m', status: 'completed' },
  ]);

  const stats = {
    totalCheckins: 82,
    avgDuration: '1h 22m',
    activeMembers: 3,
  };

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Attendance</h1>
          <p className="page-header-subtitle">Monitor gym check-ins and member activity</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Today's Check-ins</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-cyan)]">{stats.totalCheckins}</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Avg Duration</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-emerald)]">{stats.avgDuration}</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Currently Active</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-amber)]">{stats.activeMembers}</p>
        </div>
      </div>

      {/* Date Filter */}
      <div className="flex gap-4">
        <div className="flex-1 flex items-center gap-2">
          <Calendar size={16} className="text-[var(--text-muted)]" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm text-[var(--text-primary)]"
          />
        </div>
      </div>

      {/* Attendance Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Member</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Check In</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Check Out</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Duration</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((record) => (
                <tr key={record.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4 font-display font-bold text-[var(--text-primary)]">{record.member}</td>
                  <td className="py-3 px-4 text-[var(--text-secondary)] text-sm flex items-center gap-2">
                    <LogIn size={14} className="text-[var(--accent-cyan)]" />
                    {record.checkIn}
                  </td>
                  <td className="py-3 px-4 text-[var(--text-secondary)] text-sm flex items-center gap-2">
                    {record.checkOut ? (
                      <>
                        <LogOut size={14} className="text-[var(--accent-amber)]" />
                        {record.checkOut}
                      </>
                    ) : (
                      <span className="text-[var(--accent-cyan)]">Still inside</span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono text-[var(--text-primary)]">{record.duration}</td>
                  <td className="py-3 px-4">
                    {record.status === 'completed' ? (
                      <span className="badge badge-success">
                        <span className="badge-dot"></span>
                        Completed
                      </span>
                    ) : (
                      <span className="badge badge-active">
                        <span className="badge-dot"></span>
                        Active
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;