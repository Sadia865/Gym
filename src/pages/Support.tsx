import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, HelpCircle, Send, Search } from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: 'How do I add a new member?',
      answer: 'Go to Members > Add Member and fill in the required information. You can also import members in bulk from a CSV file.'
    },
    {
      question: 'How do I set up WhatsApp automation?',
      answer: 'Navigate to WhatsApp > Configuration and enter your Twilio or Meta API credentials. Then enable the automations you want to use.'
    },
    {
      question: 'Can I upgrade my plan anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan anytime from the Subscriptions page. Changes take effect immediately.'
    },
    {
      question: 'How do I export reports?',
      answer: 'Go to Reports and click Export Report. Choose your date range and export format (PDF or Excel).'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, bank transfers, and online payment gateways. Contact our sales team for custom arrangements.'
    },
  ];

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Support & Help</h1>
          <p className="page-header-subtitle">Get help with GymFlow</p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveTab('contact')}
          className={`glass-card p-4 rounded-lg text-left transition border-2 ${activeTab === 'contact' ? 'border-[var(--accent-primary)]' : 'border-transparent'}`}
        >
          <MessageSquare size={24} className="text-[var(--accent-primary)] mb-2" />
          <h3 className="font-display font-bold text-[var(--text-primary)]">Live Chat</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">Chat with our team (9 AM - 6 PM)</p>
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={`glass-card p-4 rounded-lg text-left transition border-2 ${activeTab === 'email' ? 'border-[var(--accent-primary)]' : 'border-transparent'}`}
        >
          <Mail size={24} className="text-[var(--accent-cyan)] mb-2" />
          <h3 className="font-display font-bold text-[var(--text-primary)]">Email</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">support@gymflow.com</p>
        </button>
        <button
          onClick={() => setActiveTab('phone')}
          className={`glass-card p-4 rounded-lg text-left transition border-2 ${activeTab === 'phone' ? 'border-[var(--accent-primary)]' : 'border-transparent'}`}
        >
          <Phone size={24} className="text-[var(--accent-emerald)] mb-2" />
          <h3 className="font-display font-bold text-[var(--text-primary)]">Phone</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">+971 4 XXX XXXX</p>
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === 'contact' && (
        <div className="glass-card p-6 rounded-xl">
          <h2 className="font-display font-bold text-[var(--text-primary)] mb-4">Send us a message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[var(--text-secondary)] mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue..."
                rows={5}
                className="w-full px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm resize-none"
              />
            </div>
            <button className="btn btn-primary gap-2">
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="space-y-3">
        <h2 className="font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
          <HelpCircle size={20} />
          Frequently Asked Questions
        </h2>

        {/* FAQ Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full pl-9 pr-4 py-2 bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] rounded-lg text-sm"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <details key={idx} className="glass-card rounded-lg overflow-hidden group">
              <summary className="p-4 cursor-pointer flex items-center justify-between font-medium text-[var(--text-primary)] hover:bg-[rgba(79,124,255,0.05)] transition">
                <span className="text-sm">{faq.question}</span>
                <span className="text-[var(--text-muted)] group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-[var(--text-secondary)] border-t border-[rgba(255,255,255,0.05)]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="glass-card p-6 rounded-xl">
        <h2 className="font-display font-bold text-[var(--text-primary)] mb-4">Resources</h2>
        <div className="space-y-2">
          <a href="#" className="block p-3 border border-[var(--glass-border)] rounded-lg text-[var(--accent-primary)] hover:bg-[rgba(79,124,255,0.05)] transition">Documentation & Guides</a>
          <a href="#" className="block p-3 border border-[var(--glass-border)] rounded-lg text-[var(--accent-primary)] hover:bg-[rgba(79,124,255,0.05)] transition">Video Tutorials</a>
          <a href="#" className="block p-3 border border-[var(--glass-border)] rounded-lg text-[var(--accent-primary)] hover:bg-[rgba(79,124,255,0.05)] transition">API Documentation</a>
        </div>
      </div>
    </div>
  );
};

export default Support;