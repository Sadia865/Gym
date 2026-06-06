import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Attendance from './pages/Attendance';
import Payments from './pages/Payments';
import Trainers from './pages/Trainers';
import WorkoutPlans from './pages/WorkoutPlans';
import DietPlans from './pages/DietPlans';
import WhatsAppAutomation from './pages/WhatsAppAutomation';
import Reports from './pages/Reports';
import Subscriptions from './pages/Subscriptions';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Expenses from './pages/Expenses';
import Login from './pages/Login';
import './global.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to false for login page demo

  if (!isAuthenticated) {
    return (
      <Router basename="/Gym">
        <Routes>
          <Route path="/*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router basename="/Gym">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
          <Route path="/diets" element={<DietPlans />} />
          <Route path="/whatsapp" element={<WhatsAppAutomation />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;