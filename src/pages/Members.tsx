import React, { useState } from 'react';
import { Plus, Search, Filter, Edit2, Trash2, Mail, Phone } from 'lucide-react';

const Members = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [members] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+971 50 123 4567', joined: '2024-01-15', expiry: '2024-07-15', status: 'active', plan: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+971 50 234 5678', joined: '2024-02-20', expiry: '2024-08-20', status: 'active', plan: 'Basic' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', phone: '+971 50 345 6789', joined: '2024-03-10', expiry: '2024-06-10', status: 'expiring', plan: 'Premium' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+971 50 456 7890', joined: '2024-04-05', expiry: '2024-09-05', status: 'active', plan: 'Basic' },
    { id: 5, name: 'Ahmed Hassan', email: 'ahmed@example.com', phone: '+971 50 567 8901', joined: '2024-05-12', expiry: '2024-07-12', status: 'expiring', plan: 'Premium' },
    { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '+971 50 678 9012', joined: '2024-05-25', expiry: '2024-10-25', status: 'active', plan: 'Basic' },
  ]);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'badge-active';
      case 'expiring':
        return 'badge-warning';
      case 'expired':
        return 'badge badge-expired';
      default:
        return 'badge';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'expiring':
        return 'Expiring Soon';
      case 'expired':
        return 'Expired';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Members</h1>
          <p className="page-header-subtitle">Manage your gym members</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          <span>Add Member</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search members by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm placeholder-[var(--text-muted)]"
          />
        </div>
        <button className="btn btn-ghost gap-2">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* Members Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Name</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Contact</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Joined</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Expires</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Plan</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-center py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-display font-bold text-[var(--text-primary)]">{member.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-1 text-xs text-[var(--accent-primary)] hover:text-[var(--accent-primary-lt)]">
                        <Mail size={14} />
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Phone size={14} />
                        {member.phone}
                      </a>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-tertiary)] text-xs">{member.joined}</td>
                  <td className="py-3 px-4 text-[var(--text-tertiary)] text-xs">{member.expiry}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs font-bold text-[var(--accent-primary)]">{member.plan}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`badge ${getStatusBadgeClass(member.status)}`}>
                      <span className="badge-dot"></span>
                      {getStatusLabel(member.status)}
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[rgba(255,255,255,0.05)]">
          <p className="text-xs text-[var(--text-muted)]">Showing {filteredMembers.length} of {members.length} members</p>
          <div className="flex gap-2">
            <button className="btn btn-ghost text-sm">Previous</button>
            <button className="btn btn-primary text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;