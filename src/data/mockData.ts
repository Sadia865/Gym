import { Member, Trainer, Payment, Attendance, WorkoutPlan, DietPlan, WhatsAppLog, Expense } from '../types';

export const mockMembers: Member[] = [
  { id: '1', gym_id: '1', user_id: '1', membership_number: 'GF-001', name: 'Alex Morrison', email: 'alex@email.com', phone: '+1-555-0101', start_date: '2024-01-15', end_date: '2024-07-15', status: 'active', plan: 'Premium', trainer: 'Marcus Reed', total_paid: 1200, check_ins_this_month: 18, avatar: 'AM' },
  { id: '2', gym_id: '1', user_id: '2', membership_number: 'GF-002', name: 'Sarah Chen', email: 'sarah@email.com', phone: '+1-555-0102', start_date: '2024-02-01', end_date: '2024-06-03', status: 'active', plan: 'Basic', trainer: 'Lisa Park', total_paid: 480, check_ins_this_month: 22, avatar: 'SC' },
  { id: '3', gym_id: '1', user_id: '3', membership_number: 'GF-003', name: 'James Rodriguez', email: 'james@email.com', phone: '+1-555-0103', start_date: '2023-11-01', end_date: '2024-05-01', status: 'expired', plan: 'Basic', trainer: '', total_paid: 720, check_ins_this_month: 0, avatar: 'JR' },
  { id: '4', gym_id: '1', user_id: '4', membership_number: 'GF-004', name: 'Emma Wilson', email: 'emma@email.com', phone: '+1-555-0104', start_date: '2024-03-01', end_date: '2024-09-01', status: 'active', plan: 'Premium', trainer: 'Marcus Reed', total_paid: 960, check_ins_this_month: 15, avatar: 'EW' },
  { id: '5', gym_id: '1', user_id: '5', membership_number: 'GF-005', name: 'Michael Zhang', email: 'michael@email.com', phone: '+1-555-0105', start_date: '2024-01-01', end_date: '2024-06-05', status: 'active', plan: 'Premium', trainer: 'David Kim', total_paid: 1440, check_ins_this_month: 20, avatar: 'MZ' },
  { id: '6', gym_id: '1', user_id: '6', membership_number: 'GF-006', name: 'Priya Patel', email: 'priya@email.com', phone: '+1-555-0106', start_date: '2024-02-15', end_date: '2024-08-15', status: 'active', plan: 'Basic', trainer: 'Lisa Park', total_paid: 360, check_ins_this_month: 12, avatar: 'PP' },
  { id: '7', gym_id: '1', user_id: '7', membership_number: 'GF-007', name: 'Tyler Brooks', email: 'tyler@email.com', phone: '+1-555-0107', start_date: '2024-03-10', end_date: '2024-09-10', status: 'active', plan: 'Premium', trainer: 'David Kim', total_paid: 840, check_ins_this_month: 25, avatar: 'TB' },
  { id: '8', gym_id: '1', user_id: '8', membership_number: 'GF-008', name: 'Nadia Hassan', email: 'nadia@email.com', phone: '+1-555-0108', start_date: '2023-12-01', end_date: '2024-06-01', status: 'expired', plan: 'Basic', trainer: '', total_paid: 540, check_ins_this_month: 0, avatar: 'NH' },
  { id: '9', gym_id: '1', user_id: '9', membership_number: 'GF-009', name: 'Lucas Martinez', email: 'lucas@email.com', phone: '+1-555-0109', start_date: '2024-04-01', end_date: '2024-10-01', status: 'active', plan: 'Premium', trainer: 'Marcus Reed', total_paid: 600, check_ins_this_month: 8, avatar: 'LM' },
  { id: '10', gym_id: '1', user_id: '10', membership_number: 'GF-010', name: 'Olivia Thompson', email: 'olivia@email.com', phone: '+1-555-0110', start_date: '2024-01-20', end_date: '2024-07-20', status: 'active', plan: 'Basic', trainer: 'Lisa Park', total_paid: 420, check_ins_this_month: 16, avatar: 'OT' },
];

export const mockTrainers: Trainer[] = [
  { id: '1', gym_id: '1', name: 'Marcus Reed', email: 'marcus@gym.com', phone: '+1-555-0201', specialization: 'Strength & Conditioning', assigned_members: 24, performance_score: 96, revenue_generated: 48000, rating: 4.9, classes: 8, status: 'active', avatar: 'MR' },
  { id: '2', gym_id: '1', name: 'Lisa Park', email: 'lisa@gym.com', phone: '+1-555-0202', specialization: 'Yoga & Mindfulness', assigned_members: 18, performance_score: 92, revenue_generated: 36000, rating: 4.8, classes: 12, status: 'active', avatar: 'LP' },
  { id: '3', gym_id: '1', name: 'David Kim', email: 'david@gym.com', phone: '+1-555-0203', specialization: 'CrossFit & HIIT', assigned_members: 31, performance_score: 89, revenue_generated: 62000, rating: 4.7, classes: 10, status: 'active', avatar: 'DK' },
  { id: '4', gym_id: '1', name: 'Sofia Rodriguez', email: 'sofia@gym.com', phone: '+1-555-0204', specialization: 'Weight Loss & Nutrition', assigned_members: 15, performance_score: 94, revenue_generated: 30000, rating: 4.9, classes: 6, status: 'active', avatar: 'SR' },
];

export const mockPayments: Payment[] = [
  { id: '1', gym_id: '1', member_id: '1', member_name: 'Alex Morrison', amount: 199, method: 'online', online_method: 'Stripe', transaction_id: 'txn_3OxK2L', status: 'success', paid_until: '2024-07-15', created_at: '2024-06-01T10:30:00' },
  { id: '2', gym_id: '1', member_id: '2', member_name: 'Sarah Chen', amount: 89, method: 'cash', status: 'success', paid_until: '2024-07-03', created_at: '2024-06-03T14:00:00' },
  { id: '3', gym_id: '1', member_id: '4', member_name: 'Emma Wilson', amount: 199, method: 'online', online_method: 'PayPal', transaction_id: 'txn_4Py3N8', status: 'success', paid_until: '2024-09-01', created_at: '2024-06-02T09:15:00' },
  { id: '4', gym_id: '1', member_id: '5', member_name: 'Michael Zhang', amount: 199, method: 'online', online_method: 'Stripe', transaction_id: 'txn_5Qz4O9', status: 'pending', paid_until: '2024-07-05', created_at: '2024-06-04T16:45:00' },
  { id: '5', gym_id: '1', member_id: '7', member_name: 'Tyler Brooks', amount: 199, method: 'cash', status: 'success', paid_until: '2024-09-10', created_at: '2024-06-01T11:00:00' },
  { id: '6', gym_id: '1', member_id: '9', member_name: 'Lucas Martinez', amount: 199, method: 'online', online_method: 'Stripe', transaction_id: 'txn_6Rz5P0', status: 'failed', paid_until: '2024-10-01', created_at: '2024-06-05T08:30:00' },
  { id: '7', gym_id: '1', member_id: '6', member_name: 'Priya Patel', amount: 89, method: 'cash', status: 'success', paid_until: '2024-08-15', created_at: '2024-06-02T13:20:00' },
  { id: '8', gym_id: '1', member_id: '10', member_name: 'Olivia Thompson', amount: 89, method: 'online', online_method: 'Stripe', transaction_id: 'txn_7Sa6Q1', status: 'success', paid_until: '2024-07-20', created_at: '2024-06-03T15:10:00' },
];

export const mockAttendance: Attendance[] = [
  { id: '1', gym_id: '1', member_id: '1', member_name: 'Alex Morrison', check_in: '2024-06-05T07:15:00', check_out: '2024-06-05T08:45:00', date: '2024-06-05' },
  { id: '2', gym_id: '1', member_id: '2', member_name: 'Sarah Chen', check_in: '2024-06-05T06:30:00', check_out: '2024-06-05T08:00:00', date: '2024-06-05' },
  { id: '3', gym_id: '1', member_id: '4', member_name: 'Emma Wilson', check_in: '2024-06-05T08:00:00', check_out: '2024-06-05T09:30:00', date: '2024-06-05' },
  { id: '4', gym_id: '1', member_id: '5', member_name: 'Michael Zhang', check_in: '2024-06-05T07:45:00', check_out: '', date: '2024-06-05' },
  { id: '5', gym_id: '1', member_id: '7', member_name: 'Tyler Brooks', check_in: '2024-06-05T09:00:00', check_out: '2024-06-05T10:30:00', date: '2024-06-05' },
  { id: '6', gym_id: '1', member_id: '1', member_name: 'Alex Morrison', check_in: '2024-06-04T07:10:00', check_out: '2024-06-04T08:40:00', date: '2024-06-04' },
  { id: '7', gym_id: '1', member_id: '6', member_name: 'Priya Patel', check_in: '2024-06-05T10:00:00', check_out: '2024-06-05T11:30:00', date: '2024-06-05' },
  { id: '8', gym_id: '1', member_id: '9', member_name: 'Lucas Martinez', check_in: '2024-06-05T17:00:00', check_out: '2024-06-05T18:30:00', date: '2024-06-05' },
  { id: '9', gym_id: '1', member_id: '10', member_name: 'Olivia Thompson', check_in: '2024-06-05T06:00:00', check_out: '2024-06-05T07:30:00', date: '2024-06-05' },
];

export const mockWorkoutPlans: WorkoutPlan[] = [
  {
    id: '1', gym_id: '1', member_id: '1', member_name: 'Alex Morrison', trainer_id: '1', trainer_name: 'Marcus Reed',
    title: 'Power Builder - Week 3', description: 'Heavy compound movements focused on strength gains',
    exercises: [
      { name: 'Barbell Squat', sets: 5, reps: '5', rest: '3 min', muscle_group: 'Legs' },
      { name: 'Bench Press', sets: 4, reps: '6-8', rest: '2 min', muscle_group: 'Chest' },
      { name: 'Deadlift', sets: 3, reps: '5', rest: '4 min', muscle_group: 'Back' },
      { name: 'Overhead Press', sets: 4, reps: '8', rest: '2 min', muscle_group: 'Shoulders' },
    ],
    created_at: '2024-06-01'
  },
  {
    id: '2', gym_id: '1', member_id: '4', member_name: 'Emma Wilson', trainer_id: '1', trainer_name: 'Marcus Reed',
    title: 'Lean & Tone Program', description: 'High-rep, low-rest circuit for lean muscle and fat loss',
    exercises: [
      { name: 'Dumbbell Lunges', sets: 4, reps: '12 each', rest: '60s', muscle_group: 'Legs' },
      { name: 'Cable Rows', sets: 3, reps: '15', rest: '45s', muscle_group: 'Back' },
      { name: 'Lateral Raises', sets: 3, reps: '15', rest: '30s', muscle_group: 'Shoulders' },
      { name: 'Tricep Pushdown', sets: 3, reps: '15', rest: '30s', muscle_group: 'Arms' },
    ],
    created_at: '2024-06-02'
  },
];
export const mockDietPlans: DietPlan[] = [
  {
    id: '1', gym_id: '1', member_id: '1', member_name: 'Alex Morrison', trainer_id: '1', trainer_name: 'Marcus Reed',
    title: 'Muscle Building Diet', description: 'High protein, moderate carbs for muscle growth',
    calories: 3200, protein: 220, carbs: 350, fat: 90,
    meals: [
      { name: 'Breakfast', time: '7:00 AM', foods: ['6 egg whites', '2 whole eggs', 'Oatmeal 100g', 'Banana'], calories: 650 },
      { name: 'Pre-Workout', time: '11:00 AM', foods: ['Greek yogurt 200g', 'Almonds 30g', 'Apple'], calories: 380 },
      { name: 'Lunch', time: '1:00 PM', foods: ['Chicken breast 200g', 'Brown rice 150g', 'Broccoli', 'Olive oil'], calories: 820 },
      { name: 'Post-Workout', time: '4:00 PM', foods: ['Whey protein shake', 'White rice 100g', 'Banana'], calories: 480 },
      { name: 'Dinner', time: '7:00 PM', foods: ['Salmon 200g', 'Sweet potato', 'Salad', 'Olive oil'], calories: 680 },
    ],
    created_at: '2024-06-01'
  },
];

export const mockWhatsAppLogs: WhatsAppLog[] = [
  { id: '1', gym_id: '1', recipient_number: '+1-555-0102', member_name: 'Sarah Chen', message_type: 'fee_reminder', status: 'sent', sent_at: '2024-06-05T06:00:00' },
  { id: '2', gym_id: '1', recipient_number: '+1-555-0101', member_name: 'Alex Morrison', message_type: 'workout_plan', status: 'sent', sent_at: '2024-06-05T07:00:00' },
  { id: '3', gym_id: '1', recipient_number: '+1-555-0104', member_name: 'Emma Wilson', message_type: 'diet_plan', status: 'sent', sent_at: '2024-06-05T08:00:00' },
  { id: '4', gym_id: '1', recipient_number: '+1-555-0105', member_name: 'Michael Zhang', message_type: 'fee_reminder', status: 'failed', sent_at: '2024-06-05T06:01:00', error: 'Phone unreachable' },
  { id: '5', gym_id: '1', recipient_number: '+1-555-0107', member_name: 'Tyler Brooks', message_type: 'workout_plan', status: 'sent', sent_at: '2024-06-05T07:02:00' },
  { id: '6', gym_id: '1', recipient_number: '+1-555-0106', member_name: 'Priya Patel', message_type: 'diet_plan', status: 'pending', sent_at: '2024-06-05T08:05:00' },
  { id: '7', gym_id: '1', recipient_number: '+1-555-0109', member_name: 'Lucas Martinez', message_type: 'fee_reminder', status: 'sent', sent_at: '2024-06-04T06:00:00' },
  { id: '8', gym_id: '1', recipient_number: '+1-555-0110', member_name: 'Olivia Thompson', message_type: 'workout_plan', status: 'sent', sent_at: '2024-06-04T07:00:00' },
];

export const mockExpenses: Expense[] = [
  { id: '1', gym_id: '1', title: 'Equipment Maintenance', category: 'Maintenance', amount: 850, date: '2024-06-01' },
  { id: '2', gym_id: '1', title: 'Staff Salaries', category: 'Payroll', amount: 12000, date: '2024-06-01' },
  { id: '3', gym_id: '1', title: 'Utility Bills', category: 'Utilities', amount: 1200, date: '2024-06-03' },
  { id: '4', gym_id: '1', title: 'New Dumbbells Set', category: 'Equipment', amount: 2400, date: '2024-06-04' },
  { id: '5', gym_id: '1', title: 'Marketing & Ads', category: 'Marketing', amount: 600, date: '2024-06-05' },
  { id: '6', gym_id: '1', title: 'Cleaning Services', category: 'Maintenance', amount: 400, date: '2024-06-05' },
];

export const revenueChartData = [
  { name: 'Jan', revenue: 32000, expenses: 18000 },
  { name: 'Feb', revenue: 38000, expenses: 19500 },
  { name: 'Mar', revenue: 42000, expenses: 20000 },
  { name: 'Apr', revenue: 39000, expenses: 21000 },
  { name: 'May', revenue: 48000, expenses: 19000 },
  { name: 'Jun', revenue: 52000, expenses: 22000 },
  { name: 'Jul', revenue: 58000, expenses: 23000 },
  { name: 'Aug', revenue: 54000, expenses: 21500 },
  { name: 'Sep', revenue: 62000, expenses: 24000 },
  { name: 'Oct', revenue: 68000, expenses: 25000 },
  { name: 'Nov', revenue: 72000, expenses: 26000 },
  { name: 'Dec', revenue: 78000, expenses: 28000 },
];

export const memberGrowthData = [
  { name: 'Jan', members: 180 },
  { name: 'Feb', members: 210 },
  { name: 'Mar', members: 245 },
  { name: 'Apr', members: 268 },
  { name: 'May', members: 310 },
  { name: 'Jun', members: 342 },
  { name: 'Jul', members: 378 },
  { name: 'Aug', members: 398 },
  { name: 'Sep', members: 432 },
  { name: 'Oct', members: 465 },
  { name: 'Nov', members: 490 },
  { name: 'Dec', members: 524 },
];

export const attendanceHeatmapData = [
  { day: 'Mon', '6am': 8, '8am': 24, '10am': 18, '12pm': 15, '2pm': 10, '4pm': 28, '6pm': 35, '8pm': 22 },
  { day: 'Tue', '6am': 6, '8am': 20, '10am': 15, '12pm': 12, '2pm': 8, '4pm': 25, '6pm': 30, '8pm': 18 },
  { day: 'Wed', '6am': 10, '8am': 28, '10am': 22, '12pm': 18, '2pm': 12, '4pm': 32, '6pm': 40, '8pm': 26 },
  { day: 'Thu', '6am': 7, '8am': 22, '10am': 16, '12pm': 14, '2pm': 9, '4pm': 27, '6pm': 33, '8pm': 20 },
  { day: 'Fri', '6am': 9, '8am': 26, '10am': 20, '12pm': 16, '2pm': 11, '4pm': 30, '6pm': 38, '8pm': 24 },
  { day: 'Sat', '6am': 15, '8am': 38, '10am': 42, '12pm': 35, '2pm': 28, '4pm': 20, '6pm': 15, '8pm': 8 },
  { day: 'Sun', '6am': 12, '8am': 32, '10am': 38, '12pm': 30, '2pm': 22, '4pm': 15, '6pm': 10, '8pm': 5 },
];

export const sparklineData = {
  members: [180, 210, 245, 268, 310, 342],
  revenue: [32, 38, 42, 48, 52, 58],
  checkins: [45, 52, 48, 60, 55, 68],
  renewals: [12, 18, 15, 22, 19, 25],
};