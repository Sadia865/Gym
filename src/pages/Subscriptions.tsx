import React from 'react';
import { Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const Subscriptions = () => {
  const currentPlan = {
    name: 'Premium',
    price: 999,
    features: [
      'Unlimited Members',
      'Online Payment Gateway',
      'WhatsApp Automation',
      'Advanced Analytics',
      'Priority Support',
      'Custom Branding'
    ],
    nextBilling: '2024-07-10',
    daysLeft: 36,
  };

  const plans = [
    {
      name: 'Basic',
      price: 299,
      description: 'Perfect for small gyms',
      features: ['Up to 100 Members', 'Cash Payments Only', 'WhatsApp Support', 'Basic Reports'],
      current: false
    },
    {
      name: 'Premium',
      price: 999,
      description: 'Most popular for growing gyms',
      features: ['Unlimited Members', 'Online Payments', 'Full Automation', 'Advanced Analytics', 'Priority Support'],
      current: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large gym chains',
      features: ['Multiple Locations', 'Custom Integration', 'Dedicated Support', 'SLA Guarantee'],
      current: false
    },
  ];

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-header-title">Subscription</h1>
          <p className="page-header-subtitle">Manage your GymFlow subscription</p>
        </div>
      </div>

      {/* Current Plan */}
      <div className="glass-card p-6 rounded-xl border border-[rgba(168,85,247,0.2)] bg-[rgba(168,85,247,0.05)]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display font-bold text-[var(--accent-primary-lt)] text-xl">{currentPlan.name} Plan</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1">Active since May 10, 2024</p>
          </div>
          <Zap size={24} className="text-[var(--accent-amber)]" />
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="font-display font-bold text-3xl text-[var(--text-primary)]">AED {currentPlan.price}</span>
          <span className="text-[var(--text-muted)">/month</span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentPlan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#6ee7b7] flex-shrink-0" />
              <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
            </div>
          ))}
        </div>

        {/* Next Billing */}
        <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.05)]">
          <div>
            <p className="text-xs text-[var(--text-muted)]">Next Billing Date</p>
            <p className="font-display font-bold text-[var(--text-primary)]">{currentPlan.nextBilling}</p>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">{currentPlan.daysLeft} days remaining</p>
          </div>
          <button className="btn btn-primary">Upgrade Plan</button>
        </div>
      </div>

      {/* All Plans */}
      <div className="space-y-3">
        <h3 className="font-display font-bold text-[var(--text-primary)]">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <div key={idx} className={`glass-card p-6 rounded-lg ${plan.current ? 'border-2 border-[var(--accent-primary)]' : ''}`}>
              <h3 className="font-display font-bold text-[var(--text-primary)] mb-1">{plan.name}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">{plan.description}</p>
              
              {typeof plan.price === 'number' ? (
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display font-bold text-2xl">AED {plan.price}</span>
                  <span className="text-xs text-[var(--text-muted)]">/month</span>
                </div>
              ) : (
                <p className="font-display font-bold text-lg text-[var(--accent-cyan)] mb-4">Custom Pricing</p>
              )}

              <ul className="space-y-2 mb-6 pb-6 border-b border-[rgba(255,255,255,0.05)]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={14} className="text-[#6ee7b7]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.current ? (
                <span className="badge badge-active w-full justify-center">
                  <span className="badge-dot"></span>
                  Current Plan
                </span>
              ) : (
                <button className="w-full btn btn-ghost">Select Plan</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="glass-card p-6 rounded-xl">
        <h3 className="font-display font-bold text-[var(--text-primary)] mb-4">Billing History</h3>
        <div className="space-y-2">
          {[
            { date: '2024-05-10', amount: 999, status: 'paid' },
            { date: '2024-04-10', amount: 999, status: 'paid' },
            { date: '2024-03-10', amount: 299, status: 'paid' },
          ].map((bill, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.02)]">
              <span className="text-sm text-[var(--text-secondary)]">{bill.date}</span>
              <span className="font-display font-bold">AED {bill.amount}</span>
              <span className="badge badge-success">
                <span className="badge-dot"></span>
                Paid
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;