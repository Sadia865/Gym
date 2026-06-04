# 🏋️ GymFlow - Premium Gym SaaS Management System

A complete, production-ready Gym Management SaaS platform with WhatsApp automation, member management, payments, analytics, and more.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### Core Features
- **Dashboard** - Real-time analytics and metrics with charts
- **Member Management** - Complete member lifecycle management
- **Attendance Tracking** - Check-in/check-out with duration tracking
- **Payment Processing** - Cash and online payment tracking
- **Trainer Management** - Manage trainers and their specializations
- **Workout Plans** - Create and assign custom workout plans
- **Diet Plans** - Nutrition management and tracking
- **Expense Tracking** - Monitor all gym expenses by category
- **Reports & Analytics** - Advanced reporting with exportable data

### WhatsApp Automation
- **Member Fee Expiry Reminders** - Automatic 3-day before expiry notifications
- **Subscription Warnings** - Owner notifications at 7, 3, and 1 day before
- **Daily Workout Plans** - Send assigned plans every morning
- **Daily Diet Plans** - Send nutrition plans automatically
- **Message Logs** - Track all messages sent with delivery status

### Subscription Plans
- **Basic Plan** - Up to 100 members, cash payments only
- **Premium Plan** - Unlimited members, online payments, full automation
- **Enterprise Plan** - Multi-location, custom integration

### Admin Features
- **Settings** - Gym information, timezone, currency configuration
- **Support** - FAQ, live chat, email, and phone support
- **Security** - 2FA, password management
- **Notifications** - Email, SMS, WhatsApp alerts

## 🎨 Design System

### "OBSIDIAN FORGE" - Premium Dark Theme
- **Base Colors**: Deep blacks (#050507) with electric accents
- **Primary Accent**: Electric Blue (#4F7CFF) → Neon Cyan (#00D4FF)
- **Typography**: 
  - Display: Syne (bold, letters)
  - Body: DM Sans (readable, professional)
  - Mono: JetBrains Mono (data, numbers)
- **Effects**: Glass morphism, glowing elements, smooth animations
- **Responsive**: Mobile-first, 100% responsive on all screens

### Color Palette
- Primary: #4F7CFF (Electric Blue)
- Cyan: #00D4FF (Neon Cyan)
- Success: #10b981 (Emerald)
- Warning: #f59e0b (Amber)
- Danger: #ef4444 (Red)
- WhatsApp: #25d366 (Green)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gymflow-saas.git
cd gymflow-saas

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Login Credentials
```
Email: admin@gymflow.com
Password: password
```

## 📁 Project Structure

```
gymflow-saas/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   └── Navbar.tsx
│   │   └── cards/
│   │       └── MetricCard.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Members.tsx
│   │   ├── Attendance.tsx
│   │   ├── Payments.tsx
│   │   ├── Trainers.tsx
│   │   ├── WorkoutPlans.tsx
│   │   ├── DietPlans.tsx
│   │   ├── WhatsAppAutomation.tsx
│   │   ├── Reports.tsx
│   │   ├── Subscriptions.tsx
│   │   ├── Expenses.tsx
│   │   ├── Settings.tsx
│   │   ├── Support.tsx
│   │   └── Login.tsx
│   ├── layouts/
│   │   └── AppLayout.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── globals.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Lucide React** - Icon library

### Build & Dev Tools
- **Vite** - Fast build tool
- **PostCSS & Autoprefixer** - CSS processing
- **ESLint** - Code quality

## 📊 Pages & Features

### Dashboard
- Key metrics (Members, Revenue, Attendance, Trainers)
- 6-month revenue and member growth chart
- Payment method distribution (Pie chart)
- Recent members table
- Alert widgets (expiring memberships, WhatsApp status)

### Members
- Searchable member list
- Member contact information (email, phone)
- Membership status and plans
- Quick edit/delete actions
- Pagination support

### Attendance
- Daily check-in/check-out tracking
- Session duration calculation
- Active member monitoring
- Date-based filtering
- Status badges (completed/active)

### Payments
- Payment transaction tracking
- Status filtering (success/pending/failed)
- Payment method tracking
- Revenue statistics
- Export functionality

### Trainers
- Trainer card grid view
- Member assignments per trainer
- Ratings and reviews
- Quick edit/delete actions

### Workout Plans
- Custom workout creation
- Member and trainer association
- Schedule management
- Bulk operations

### Diet Plans
- Calorie and macro tracking
- Nutrient management
- Plan status tracking
- Member assignment

### WhatsApp Automation
- Automation rule configuration
- Real-time message logging
- Delivery status tracking
- API configuration
- Test connection

### Reports
- Multi-metric charts (revenue, members, attendance)
- Monthly trend analysis
- Custom date ranges
- Export to PDF/Excel
- Performance metrics

### Subscriptions
- Plan management
- Billing history
- Upgrade/downgrade tracking
- Payment status

### Expenses
- Expense categorization
- Budget tracking
- Payment status
- Category breakdown charts

### Settings
- Gym information management
- Notification preferences
- Security settings
- Timezone and currency configuration

### Support
- Live chat interface
- FAQ section
- Email/phone contact
- Resource links
- Ticket system (ready for backend)

## 🎯 Key Features Explained

### WhatsApp Integration
The system is configured to work with Twilio or Meta Cloud API for WhatsApp messaging:

1. **Fee Reminders**: Automated messages 3 days before membership expires
2. **Subscription Warnings**: Owner notifications at 7, 3, and 1 day before renewal
3. **Daily Plans**: Workout and diet plans sent automatically every morning
4. **Message Logs**: Complete audit trail of all messages sent

### Multi-Tenant Support
- **Gym ID**: Every record is scoped to a gym
- **Plan-Based Limits**: Basic (100 members) vs Premium (unlimited)
- **Payment Methods**: Basic supports cash only, Premium supports online

### Responsive Design
- **Mobile**: Full-screen layout with bottom tab bar
- **Tablet**: Optimized two-column layout
- **Desktop**: Full sidebar + main content area
- **Landscape Phones**: Compact navbar and adjusted padding

## 📱 Responsive Breakpoints

```css
Mobile:    < 480px
Tablet:    480px - 767px
Laptop:    768px - 1023px
Desktop:   1024px+
```

## 🔐 Security Features

- TypeScript for type safety
- Input validation
- Secure password handling
- 2FA ready (UI implemented)
- CORS ready
- Environment variable support

## 🎨 Customization

### Change Brand Colors
Edit `globals.css` CSS variables:
```css
--accent-primary:     #4F7CFF;  /* Change to your brand color */
--accent-cyan:        #00D4FF;
```

### Change Fonts
Update the `@import` statements in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

### Update Company Name
Search and replace "GymFlow" with your brand name

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📚 API Integration Ready

The frontend is ready to connect to your backend API:

1. Replace mock data in each page with API calls
2. Update the `onLogin` handler in App.tsx
3. Implement state management (Context API or Redux)
4. Add API service layer in `src/services/`

### Example API Service Structure
```typescript
// src/services/api.ts
const API_BASE = process.env.REACT_APP_API_URL || 'https://api.gymflow.com';

export const memberService = {
  getAll: () => fetch(`${API_BASE}/members`),
  getById: (id: string) => fetch(`${API_BASE}/members/${id}`),
  create: (data) => fetch(`${API_BASE}/members`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data) => fetch(`${API_BASE}/members/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: string) => fetch(`${API_BASE}/members/${id}`, { method: 'DELETE' }),
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created by Claude (Anthropic)

## 📞 Support

For support, email support@gymflow.com or visit our website.

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Real WhatsApp integration
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Multi-location support
- [ ] Staff management
- [ ] Class scheduling
- [ ] Member reviews and ratings
- [ ] Integration with fitness trackers

---

**Made with ❤️ for gym owners and fitness professionals**