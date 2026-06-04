import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Dumbbell, User } from 'lucide-react';

const WorkoutPlans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [plans] = useState([
    { id: 1, title: 'Chest & Triceps', member: 'John Doe', trainer: 'Alex Chen', days: 'Monday, Wednesday, Friday', created: '2024-05-15', status: 'active' },
    { id: 2, title: 'Back & Biceps', member: 'Jane Smith', trainer: 'Marcus Johnson', days: 'Tuesday, Thursday', created: '2024-05-20', status: 'active' },
    { id: 3, title: 'Leg Day Intensive', member: 'Mike Wilson', trainer: 'David Lee', days: 'Saturday', created: '2024-05-25', status: 'active' },
    { id: 4, title: 'Full Body HIIT', member: 'Sarah Johnson', trainer: 'Emma Wilson', days: 'Daily', created: '2024-06-01', status: 'active' },
  ]);

  const filteredPlans = plans.filter(plan =>
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Workout Plans</h1>
          <p className="page-header-subtitle">Create and manage member workout plans</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Plus size={16} />
          <span>Create Plan</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search workout plans..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
        />
      </div>

      {/* Plans Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Plan Title</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Member</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Trainer</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Schedule</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Created</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-center py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan) => (
                <tr key={plan.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Dumbbell size={14} className="text-[var(--accent-primary)]" />
                      <span className="font-display font-bold text-[var(--text-primary)]">{plan.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{plan.member}</td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{plan.trainer}</td>
                  <td className="py-3 px-4 text-xs text-[var(--text-muted)]">{plan.days}</td>
                  <td className="py-3 px-4 text-xs text-[var(--text-tertiary)]">{plan.created}</td>
                  <td className="py-3 px-4">
                    <span className="badge badge-active">
                      <span className="badge-dot"></span>
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 hover:bg-[rgba(79,124,255,0.2)] rounded transition text-[var(--accent-primary)]">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1 hover:bg-[rgba(239,68,68,0.2)] rounded transition text-[#fca5a5]">
                        <Trash2 size={16} />
                      </button>
                    </div>
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

export default WorkoutPlans;