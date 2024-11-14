import React from 'react';
import { Calendar, Image, Hash, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { ContentCalendar } from './ContentCalendar';
import { Analytics } from './Analytics';
import { BrandList } from './BrandList';
import { PostEditor } from './PostEditor';

const stats = [
  { name: 'Total Posts', value: '2,345', icon: MessageSquare, trend: '+12%' },
  { name: 'Active Campaigns', value: '18', icon: TrendingUp, trend: '+4%' },
  { name: 'Media Assets', value: '892', icon: Image, trend: '+23%' },
  { name: 'Team Members', value: '12', icon: Users, trend: '0%' },
];

export function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
              >
                <dt>
                  <div className="absolute rounded-md bg-blue-500 p-3">
                    <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {stat.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {stat.trend}
                  </p>
                </dd>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <ContentCalendar />
              <Analytics />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <BrandList />
              <PostEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}