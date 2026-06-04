import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Apple, Zap } from 'lucide-react';

const DietPlans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [plans] = useState([
    { id: 1, title: 'Weight Loss Diet', member: 'John Doe', calories: 1800, protein: 120, status: 'active', created: '2024-05-10' },
    { id: 2, title: 'Muscle Gain Diet', member: 'Jane Smith', calories: 2800, protein: 200, status: 'active', created: '2024-05-15' },
    { id: 3, title: 'Maintenance Diet', member: 'Mike Wilson', calories: 2200, protein: 150, status: 'paused', created: '2024-05-20' },
    { id: 4, title: 'Low Carb Diet', member: 'Sarah Johnson', calories: 2000, protein: 160, status: 'active', created: '2024-05-25' },
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
          <h1 className="page-header-title">Diet Plans</h1>
          <p className="page-header-subtitle">Manage member nutrition plans</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Plus size={16} />
          <span>Create Diet Plan</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search diet plans..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
        />
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="glass-card p-6 rounded-lg group hover:border-[rgba(79,124,255,0.3)] transition">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Apple size={18} className="text-[var(--accent-emerald)]" />
                <div>
                  <h3 className="font-display font-bold text-[var(--text-primary)]">{plan.title}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{plan.member}</p>
                </div>
              </div>
              <Zap size={16} className="text-[var(--accent-amber)]" />
            </div>

            {/* Nutrients */}
            <div className="space-y-3 mb-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Calories</span>
                <span className="font-display font-bold text-[var(--accent-cyan)]">{plan.calories} kcal</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Protein</span>
                <span className="font-display font-bold text-[var(--accent-emerald)]">{plan.protein}g</span>
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <span className={`badge ${plan.status === 'active' ? 'badge-active' : 'badge-warning'}`}>
                <span className="badge-dot"></span>
                {plan.status === 'active' ? 'Active' : 'Paused'}
              </span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-[rgba(79,124,255,0.2)] rounded transition text-[var(--accent-primary)]">
                  <Edit2 size={14} />
                </button>
                <button className="p-1 hover:bg-[rgba(239,68,68,0.2)] rounded transition text-[#fca5a5]">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlans;