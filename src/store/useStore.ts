import { create } from 'zustand';

interface AppState {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  currentGym: {
    name: string;
    plan: 'basic' | 'premium';
    logo: string;
  };
  notifications: Notification[];
  toggleSidebar: () => void;
  toggleCollapse: () => void;
  setSidebarOpen: (open: boolean) => void;
  markAllRead: () => void;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  time: string;
}

export const useStore = create<AppState>((set) => ({
  sidebarOpen: true,
  sidebarCollapsed: false,
  currentGym: {
    name: 'IronCore Gym',
    plan: 'premium',
    logo: 'IC',
  },
  notifications: [
    { id: '1', title: 'Membership Expiring', message: 'Sarah Chen membership expires in 3 days', type: 'warning', read: false, time: '5m ago' },
    { id: '2', title: 'Payment Received', message: 'Alex Morrison paid $199 via Stripe', type: 'success', read: false, time: '1h ago' },
    { id: '3', title: 'WhatsApp Sent', message: '47 diet plan messages delivered successfully', type: 'info', read: false, time: '2h ago' },
    { id: '4', title: 'New Member', message: 'Tyler Brooks joined Premium plan', type: 'success', read: true, time: '5h ago' },
    { id: '5', title: 'Payment Failed', message: 'Michael Zhang payment failed — retry needed', type: 'error', read: true, time: '1d ago' },
  ],
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleCollapse: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  markAllRead: () =>
    set((s) => ({
      notifications: s.notifications.map((n) => ({ ...n, read: true })),
    })),
}));