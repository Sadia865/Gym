// src/components/charts/SparklineChart.tsx
// Complete chart components for Dashboard

import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

// ═══════════════════════════════════════════════════════════════════════════
// REVENUE CHART (Line chart showing Revenue vs Expenses)
// ═══════════════════════════════════════════════════════════════════════════

interface RevenueChartProps {
  data: Array<{
    month: string;
    revenue: number;
    expenses: number;
  }>;
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="month" stroke="rgba(139,156,200,0.6)" style={{ fontSize: '12px' }} />
        <YAxis stroke="rgba(139,156,200,0.6)" style={{ fontSize: '12px' }} />
        <Tooltip
          contentStyle={{
            background: 'rgba(8,10,15,0.95)',
            border: '1px solid rgba(79,124,255,0.3)',
            borderRadius: '8px',
            color: '#F0F4FF',
          }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#4F7CFF"
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="#EF4444"
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MEMBER GROWTH CHART (Bar chart showing new registrations)
// ═══════════════════════════════════════════════════════════════════════════

interface MemberGrowthChartProps {
  data: Array<{
    month: string;
    members: number;
  }>;
}

export function MemberGrowthChart({ data }: MemberGrowthChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="month" stroke="rgba(139,156,200,0.6)" style={{ fontSize: '12px' }} />
        <YAxis stroke="rgba(139,156,200,0.6)" style={{ fontSize: '12px' }} />
        <Tooltip
          contentStyle={{
            background: 'rgba(8,10,15,0.95)',
            border: '1px solid rgba(79,124,255,0.3)',
            borderRadius: '8px',
            color: '#F0F4FF',
          }}
        />
        <Bar dataKey="members" fill="#22D3EE" isAnimationActive={true} radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DONUT CHART (Pie chart showing membership distribution)
// ═══════════════════════════════════════════════════════════════════════════

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

export function DonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: 'rgba(8,10,15,0.95)',
            border: '1px solid rgba(79,124,255,0.3)',
            borderRadius: '8px',
            color: '#F0F4FF',
          }}
          formatter={(value) => `${value} members`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SIMPLE SPARKLINE (For metric cards)
// ═══════════════════════════════════════════════════════════════════════════

interface SparklineChartProps {
  data: number[];
  color?: string;
  height?: number;
}

export function SparklineChart({ 
  data, 
  color = '#4F7CFF', 
  height = 32 
}: SparklineChartProps) {
  if (!data || data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  // Normalize data to 0-100
  const normalized = data.map(v => ((v - min) / range) * 100);
  
  // Create SVG path points
  const pointSpacing = 100 / (data.length - 1 || 1);
  const points = normalized
    .map((v, i) => `${i * pointSpacing},${100 - v}`)
    .join(' ');

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ height: `${height}px`, width: '100%' }}
    >
      <defs>
        <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Area under line */}
      <polygon
        points={`0,100 ${points} 100,100`}
        fill="url(#sparklineGradient)"
        opacity="0.6"
      />

      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots at ends */}
      <circle cx={0} cy={100 - normalized[0]} r="1.2" fill={color} opacity="0.6" />
      <circle
        cx={100}
        cy={100 - normalized[normalized.length - 1]}
        r="1.2"
        fill={color}
        opacity="1"
      />
    </svg>
  );
}

export default SparklineChart;