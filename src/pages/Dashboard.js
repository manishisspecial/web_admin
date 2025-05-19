import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UserGroupIcon, CalendarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

// Dummy data for recent activity
const recentActivity = [
  { id: 1, description: 'User John Doe logged in', timestamp: '2023-10-27 10:00 AM' },
  { id: 2, description: 'Report generated: Sales Analysis', timestamp: '2023-10-27 09:30 AM' },
  { id: 3, description: 'New user registered: Jane Smith', timestamp: '2023-10-27 09:00 AM' },
  // Add more activity data as needed
];

// Dummy data for charts
const data = [
  { name: 'Jan', users: 400, reports: 240 },
  { name: 'Feb', users: 300, reports: 139 },
  { name: 'Mar', users: 200, reports: 980 },
  { name: 'Apr', users: 278, reports: 390 },
  { name: 'May', users: 189, reports: 480 },
  { name: 'Jun', users: 239, reports: 380 },
  { name: 'Jul', users: 349, reports: 430 },
];

const stats = [
  { name: 'Total Users', value: 1250 },
  { name: 'Reports Generated', value: 580 },
  { name: 'Active Sessions', value: 150 },
  // Add more stats as needed
];

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Admin Dashboard</h1>

        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-gray-700">{stat.name}</h2>
              <p className="text-2xl text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Growth Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} itemStyle={{ color: '#333' }} />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Reports Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Reports Generated</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} itemStyle={{ color: '#333' }} />
                <Legend />
                <Line type="monotone" dataKey="reports" stroke="#10b981" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded shadow mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <ul>
            {recentActivity.map((activity) => (
              <li key={activity.id} className="border-b border-gray-200 last:border-b-0 py-2">
                <p className="text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.timestamp}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 