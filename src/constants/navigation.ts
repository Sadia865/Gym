import {
  LayoutDashboard,
  Users,
  ScanLine,
  Dumbbell,
  Apple,
  CreditCard,
  Bell,
  MessageCircle,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Flame,
} from "lucide-react";

export const navigation = [
  {
    section: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        id: "members",
        label: "Members",
        path: "/members",
        icon: Users,
      },
      {
        id: "attendance",
        label: "Attendance",
        path: "/attendance",
        icon: ScanLine,
      },
      {
        id: "trainers",
        label: "Trainers",
        path: "/trainers",
        icon: Dumbbell,
      },
      {
        id: "workouts",
        label: "Workout Plans",
        path: "/workout",
        icon: Flame,
      },
      {
        id: "diets",
        label: "Diet Plans",
        path: "/diet",
        icon: Apple,
      },
      {
        id: "payments",
        label: "Payments",
        path: "/payments",
        icon: CreditCard,
      },
      {
        id: "subscriptions",
        label: "Subscriptions",
        path: "/subscriptions",
        icon: Bell,
      },
      {
        id: "whatsapp",
        label: "WhatsApp Automation",
        path: "/whatsapp",
        icon: MessageCircle,
      },
      {
        id: "reports",
        label: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],
  },

  {
    section: "System",
    items: [
      {
        id: "settings",
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
      {
        id: "support",
        label: "Support",
        path: "/support",
        icon: HelpCircle,
      },
      {
        id: "logout",
        label: "Logout",
        path: "/logout",
        icon: LogOut,
      },
    ],
  },
];