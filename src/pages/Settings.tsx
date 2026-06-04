import React, { useState } from 'react';
import { Save, Shield, Bell, Palette } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    gymName: 'GymFlow Premium',
    email: 'admin@gymflow.com',
    phone: '+971 50 123 4567',
    address: 'Downtown Dubai, Dubai, UAE',
    city: 'Dubai',
    currency: 'AED',
    timezone: 'GST (UTC+4)',
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Settings</h1>
          <p className="page-header-subtitle">Manage your gym and account settings</p>
        </div>
      </div>

      {/* Gym Settings */}
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Palette size={20} className="text-[var(--accent-primary)]" />
          <h2 className="font-display font-bold text-[var(--text-primary)]">Gym Information</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Gym Name</label>
            <input
              type="text"
              value={settings.gymName}
              onChange={(e) => handleChange('gymName', e.target.value)}
              className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Phone</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Address</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">City</label>
              <input
                type="text"
                value={settings.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              >
                <option>AED</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              >
                <option>GST (UTC+4)</option>
                <option>IST (UTC+5:30)</option>
                <option>EST (UTC-5)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Bell size={20} className="text-[var(--accent-cyan)]" />
          <h2 className="font-display font-bold text-[var(--text-primary)]">Notifications</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-[rgba(255,255,255,0.05)] rounded-lg">
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Email Notifications</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Receive alerts via email</p>
            </div>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleChange('emailNotifications', e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 border border-[rgba(255,255,255,0.05)] rounded-lg">
            <div>
              <p className="text-sm text-[var(--text-secondary)]">SMS Notifications</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Receive alerts via SMS</p>
            </div>
            <input
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={(e) => handleChange('smsNotifications', e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3 border border-[rgba(255,255,255,0.05)] rounded-lg">
            <div>
              <p className="text-sm text-[var(--text-secondary)]">WhatsApp Notifications</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Receive alerts via WhatsApp</p>
            </div>
            <input
              type="checkbox"
              checked={settings.whatsappNotifications}
              onChange={(e) => handleChange('whatsappNotifications', e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="glass-card p-6 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} className="text-[var(--accent-emerald)]" />
          <h2 className="font-display font-bold text-[var(--text-primary)]">Security</h2>
        </div>

        <div className="space-y-3">
          <button className="w-full p-3 border border-[var(--glass-border)] rounded-lg text-left hover:bg-[rgba(79,124,255,0.05)] transition">
            <p className="text-sm text-[var(--text-secondary)] font-medium">Change Password</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">Update your account password</p>
          </button>
          <button className="w-full p-3 border border-[var(--glass-border)] rounded-lg text-left hover:bg-[rgba(79,124,255,0.05)] transition">
            <p className="text-sm text-[var(--text-secondary)] font-medium">Two-Factor Authentication</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">Enable 2FA for added security</p>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button className="btn btn-primary gap-2 w-full justify-center">
        <Save size={16} />
        <span>Save Changes</span>
      </button>
    </div>
  );
};

export default Settings;