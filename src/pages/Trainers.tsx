import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Star, Users } from 'lucide-react';

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trainers] = useState([
    { id: 1, name: 'Alex Chen', specialization: 'Bodybuilding', members: 12, rating: 4.8, email: 'alex@gym.com', phone: '+971 50 111 1111' },
    { id: 2, name: 'Emma Wilson', specialization: 'Weight Loss', members: 15, rating: 4.9, email: 'emma@gym.com', phone: '+971 50 222 2222' },
    { id: 3, name: 'Marcus Johnson', specialization: 'Cardio Training', members: 8, rating: 4.7, email: 'marcus@gym.com', phone: '+971 50 333 3333' },
    { id: 4, name: 'Sophia Brown', specialization: 'Yoga & Flexibility', members: 20, rating: 4.9, email: 'sophia@gym.com', phone: '+971 50 444 4444' },
    { id: 5, name: 'David Lee', specialization: 'Strength Training', members: 10, rating: 4.6, email: 'david@gym.com', phone: '+971 50 555 5555' },
  ]);

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Trainers</h1>
          <p className="page-header-subtitle">Manage your fitness trainers</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Plus size={16} />
          <span>Add Trainer</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search trainers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
        />
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTrainers.map((trainer) => (
          <div key={trainer.id} className="glass-card p-6 rounded-lg group hover:border-[rgba(79,124,255,0.3)] transition">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-display font-bold">
                {trainer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition">
                <Star size={16} className="fill-[var(--accent-amber)] text-[var(--accent-amber)]" />
              </button>
            </div>

            {/* Info */}
            <h3 className="font-display font-bold text-[var(--text-primary)] mb-1">{trainer.name}</h3>
            <p className="text-xs text-[var(--accent-cyan)] mb-4 font-mono">{trainer.specialization}</p>

            {/* Stats */}
            <div className="space-y-3 mb-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Members</span>
                <div className="flex items-center gap-1">
                  <Users size={14} className="text-[var(--accent-primary)]" />
                  <span className="font-bold text-[var(--text-primary)]">{trainer.members}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Rating</span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-[var(--accent-amber)] text-[var(--accent-amber)]" />
                  <span className="font-bold text-[var(--text-primary)]">{trainer.rating}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 btn btn-primary text-sm gap-1">
                <Edit2 size={14} />
                Edit
              </button>
              <button className="btn btn-ghost text-sm p-2">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;