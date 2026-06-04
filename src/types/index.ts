export interface Gym {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  plan: 'basic' | 'premium';
  status: 'active' | 'expired' | 'suspended';
  created_at: string;
}

export interface Member {
  id: string;
  gym_id: string;
  user_id: string;
  membership_number: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'expired';
  plan: string;
  trainer?: string;
  total_paid: number;
  check_ins_this_month: number;
}

export interface Trainer {
  id: string;
  gym_id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  avatar?: string;
  assigned_members: number;
  performance_score: number;
  revenue_generated: number;
  rating: number;
  classes: number;
  status: 'active' | 'inactive';
}

export interface Payment {
  id: string;
  gym_id: string;
  member_id: string;
  member_name: string;
  amount: number;
  method: 'cash' | 'online';
  online_method?: string;
  transaction_id?: string;
  status: 'success' | 'failed' | 'pending';
  paid_until: string;
  created_at: string;
}

export interface Attendance {
  id: string;
  gym_id: string;
  member_id: string;
  member_name: string;
  check_in: string;
  check_out?: string;
  date: string;
}

export interface WorkoutPlan {
  id: string;
  gym_id: string;
  member_id: string;
  member_name: string;
  trainer_id: string;
  trainer_name: string;
  title: string;
  description: string;
  exercises: Exercise[];
  created_at: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  muscle_group: string;
}

export interface DietPlan {
  id: string;
  gym_id: string;
  member_id: string;
  member_name: string;
  trainer_id: string;
  trainer_name: string;
  title: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meals: Meal[];
  created_at: string;
}

export interface Meal {
  name: string;
  time: string;
  foods: string[];
  calories: number;
}

export interface Subscription {
  id: string;
  gym_id: string;
  plan: 'basic' | 'premium';
  start_date: string;
  end_date: string;
  status: 'active' | 'expired' | 'warning_sent';
  price: number;
}

export interface WhatsAppLog {
  id: string;
  gym_id: string;
  recipient_number: string;
  member_name: string;
  message_type: 'fee_reminder' | 'sub_warning' | 'workout_plan' | 'diet_plan';
  status: 'sent' | 'failed' | 'pending';
  sent_at: string;
  error?: string;
}

export interface Expense {
  id: string;
  gym_id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
}

export interface MetricData {
  label: string;
  value: number | string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
  sparkline?: number[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

export interface ChartData {
  name: string;
  value: number;
  value2?: number;
}