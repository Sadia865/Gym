import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const Expenses = () => {
  const [expenses] = useState([
    { id: 1, title: 'Equipment Purchase', category: 'Equipment', amount: 5000, date: '2024-06-01', status: 'paid' },
    { id: 2, title: 'Rent - June', category: 'Rent', amount: 3000, date: '2024-06-01', status: 'paid' },
    { id: 3, title: 'Staff Salaries', category: 'Payroll', amount: 4500, date: '2024-06-05', status: 'pending' },
    { id: 4, title: 'Utilities Bill', category: 'Utilities', amount: 800, date: '2024-06-03', status: 'paid' },
    { id: 5, title: 'Marketing Campaign', category: 'Marketing', amount: 1200, date: '2024-06-04', status: 'paid' },
  ]);

  const stats = {
    totalExpenses: 14500,
    thisMonth: 14500,
    pending: 4500,
  };

  const categories = [
    { name: 'Rent', amount: 3000, color: 'var(--accent-primary)' },
    { name: 'Equipment', amount: 5000, color: 'var(--accent-cyan)' },
    { name: 'Payroll', amount: 4500, color: 'var(--accent-emerald)' },
    { name: 'Utilities', amount: 800, color: 'var(--accent-amber)' },
    { name: 'Marketing', amount: 1200, color: 'var(--accent-purple)' },
  ];

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Expenses</h1>
          <p className="page-header-subtitle">Track and manage gym expenses</p>
        </div>
        <button className="btn btn-primary gap-2">
          <Plus size={16} />
          <span>Add Expense</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Total Expenses</p>
          <p className="font-display font-bold text-2xl text-[var(--text-primary)]">AED {stats.totalExpenses}</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">This Month</p>
          <p className="font-display font-bold text-2xl text-[var(--accent-cyan)]">AED {stats.thisMonth}</p>
        </div>
        <div className="glass-card p-4 rounded-lg border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)]">
          <p className="text-xs text-[var(--text-muted)] mb-2">Pending Payment</p>
          <p className="font-display font-bold text-2xl text-[#fcd34d]">AED {stats.pending}</p>
        </div>
      </div>

      {/* Categories */}
      <div className="glass-card p-6 rounded-xl">
        <h3 className="font-display font-bold text-[var(--text-primary)] mb-4">Expenses by Category</h3>
        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-[var(--text-secondary)]">{cat.name}</span>
                <span className="font-display font-bold text-[var(--text-primary)]">AED {cat.amount}</span>
              </div>
              <div className="h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(cat.amount / stats.totalExpenses) * 100}%`,
                    backgroundColor: cat.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expenses List */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Title</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Category</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-center py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{expense.title}</td>
                  <td className="py-3 px-4 text-xs text-[var(--accent-primary)]">{expense.category}</td>
                  <td className="py-3 px-4 font-display font-bold text-[var(--text-primary)]">AED {expense.amount}</td>
                  <td className="py-3 px-4 text-xs text-[var(--text-tertiary)]">{expense.date}</td>
                  <td className="py-3 px-4">
                    <span className={`badge ${expense.status === 'paid' ? 'badge-success' : 'badge-warning'}`}>
                      <span className="badge-dot"></span>
                      {expense.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="p-1 hover:bg-[rgba(239,68,68,0.2)] rounded transition text-[#fca5a5]">
                      <Trash2 size={16} />
                    </button>
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

export default Expenses;