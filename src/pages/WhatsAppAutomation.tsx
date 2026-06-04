import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Clock, AlertCircle, ToggleLeft } from 'lucide-react';

const WhatsAppAutomation = () => {
  const [automations] = useState([
    { id: 1, type: 'Fee Expiry Reminder', description: 'Sent 3 days before membership expires', enabled: true, recipients: 145, sent: 1240 },
    { id: 2, type: 'Subscription Warning', description: 'Owner notifications at 7, 3, and 1 day before', enabled: true, recipients: 1, sent: 156 },
    { id: 3, type: 'Daily Workout Plan', description: 'Send assigned workout plans every morning', enabled: true, recipients: 82, sent: 523 },
    { id: 4, type: 'Daily Diet Plan', description: 'Send assigned diet plans every morning', enabled: true, recipients: 75, sent: 478 },
  ]);

  const [logs] = useState([
    { id: 1, type: 'Fee Reminder', recipient: 'John Doe', status: 'sent', time: '2024-06-04 06:15 AM' },
    { id: 2, type: 'Workout Plan', recipient: 'Jane Smith', status: 'sent', time: '2024-06-04 07:00 AM' },
    { id: 3, type: 'Diet Plan', recipient: 'Mike Wilson', status: 'failed', time: '2024-06-04 08:00 AM' },
    { id: 4, type: 'Fee Reminder', recipient: 'Sarah Johnson', status: 'sent', time: '2024-06-04 06:15 AM' },
    { id: 5, type: 'Subscription Warning', recipient: 'Gym Owner', status: 'sent', time: '2024-06-04 09:00 AM' },
  ]);

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">WhatsApp Automation</h1>
          <p className="page-header-subtitle">Manage automated WhatsApp messages to members</p>
        </div>
      </div>

      {/* Automations */}
      <div className="space-y-3">
        <h2 className="text-sm font-display font-bold text-[var(--text-primary)]">Active Automations</h2>
        {automations.map((automation) => (
          <div key={automation.id} className="glass-card p-4 rounded-lg flex items-center justify-between">
            <div className="flex-1 flex items-start gap-3">
              <MessageCircle size={20} className="text-[#25d366] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-display font-bold text-[var(--text-primary)] text-sm">{automation.type}</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">{automation.description}</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-xs text-[var(--text-secondary)]">Recipients: <span className="font-bold">{automation.recipients}</span></span>
                  <span className="text-xs text-[var(--text-secondary)]">Sent: <span className="font-bold">{automation.sent}</span></span>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-[rgba(37,211,102,0.2)] rounded transition text-[#25d366]">
<ToggleLeft size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* WhatsApp Configuration */}
      <div className="glass-card p-6 rounded-lg">
        <h2 className="text-sm font-display font-bold text-[var(--text-primary)] mb-4">WhatsApp Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">WhatsApp API Key</label>
            <input
              type="password"
              defaultValue="twilio_***_***_***"
              className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Sender Number</label>
            <input
              type="text"
              defaultValue="+971 50 123 4567"
              className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
            />
          </div>
          <div className="flex gap-2 pt-4">
            <button className="btn btn-primary">Save Configuration</button>
            <button className="btn btn-ghost">Test Connection</button>
          </div>
        </div>
      </div>

      {/* Recent Logs */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-4 border-b border-[rgba(255,255,255,0.05)]">
          <h2 className="text-sm font-display font-bold text-[var(--text-primary)]">Message Logs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Type</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Recipient</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-mono font-bold text-[var(--text-muted)] uppercase">Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(79,124,255,0.05)] transition">
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{log.type}</td>
                  <td className="py-3 px-4 text-[var(--text-secondary)]">{log.recipient}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {log.status === 'sent' ? (
                        <>
                          <CheckCircle2 size={14} className="text-[#6ee7b7]" />
                          <span className="badge badge-success">Sent</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle size={14} className="text-[#fca5a5]" />
                          <span className="badge badge-expired">Failed</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-[var(--text-muted)]">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAutomation;