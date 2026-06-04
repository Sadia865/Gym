import React, { useState } from 'react';
import { Plus, Search, Download, CheckCircle2, Clock, X as XIcon } from 'lucide-react';

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [payments] = useState([
    { id: 1, member: 'John Doe', amount: 500, method: 'Cash', date: '2024-06-01', status: 'success', reference: 'INV-001' },
    { id: 2, member: 'Jane Smith', amount: 400, method: 'Online', date: '2024-06-02', status: 'success', reference: 'INV-002' },
    { id: 3, member: 'Mike Wilson', amount: 500, method: 'Online', date: '2024-06-03', status: 'pending', reference: 'INV-003' },
    { id: 4, member: 'Sarah Johnson', amount: 400, method: 'Cash', date: '2024-06-04', status: 'success', reference: 'INV-004' },
    { id: 5, member: 'Ahmed Hassan', amount: 500, method: 'Online', date: '2024-06-05', status: 'failed', reference: 'INV-005' },
  ]);

  const filteredPayments = payments.filter(p =>
    p.member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: 2200,
    pending: 500,
    failed: 500,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 size={16} className="text-[#6ee7b7]" />;
      case 'pending':
        return <Clock size={16} className="text-[#fcd34d]" />;
      case 'failed':
        return <XIcon size={16} className="text-[#fca5a5]" />;
      default:
        return null;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'success':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'failed':
        return 'badge badge-expired';
      default:
        return 'badge';
    }
  };

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Payments</h1>
          <p className="page-header-subtitle">Track member payments and transactions</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost gap-2">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="btn btn-primary gap-2">
            <Plus size={16} />
            <span>Record Payment</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <p className="text-xs text-[var(--text-muted)] mb-2">Total Revenue</p>
          <p className="font-display font-bold text-2xl text-[var(--text-primary)]">AED {stats.total}</p>
        </div>
        <div className="glass-card p-4 rounded-lg border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.05)]">
          <p className="text-xs text-[var(--text-muted)] mb-2">Pending</p>
          <p className="font-display font-bold text-2xl text-[#fcd34d]">AED {stats.pending}</p>
        </div>
        <div className="glass-card p-4 rounded-lg border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)]">
          <p className="text-xs text-[var(--text-muted)] mb-2">Failed</p>
          <p className="font-display font-bold text-2xl text-[#fca5a5]">AED {stats.failed}</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search by member name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
        />
      </div>

      {/* Payments Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Reference</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Member</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Method</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4 font-mono text-[var(--accent-primary)] text-xs">{payment.reference}</td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{payment.member}</td>
                  <td className="py-3 px-4 font-display font-bold text-[var(--text-primary)]">AED {payment.amount}</td>
                  <td className="py-3 px-4 text-xs text-[var(--text-muted)]">{payment.method}</td>
                  <td className="py-3 px-4 text-xs text-[var(--text-tertiary)]">{payment.date}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(payment.status)}
                      <span className={`badge ${getStatusBadgeClass(payment.status)}`}>
                        {payment.status === 'success' ? 'Completed' : payment.status === 'pending' ? 'Pending' : 'Failed'}
                      </span>
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

export default Payments;