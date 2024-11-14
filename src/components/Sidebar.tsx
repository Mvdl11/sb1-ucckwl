import React from 'react';
import { Home, Users, Calendar, BarChart2, Settings, Plus } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home },
  { name: 'Brands', icon: Users },
  { name: 'Calendar', icon: Calendar },
  { name: 'Analytics', icon: BarChart2 },
  { name: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-semibold text-gray-900">Social CRM</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 mb-6 hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          New Campaign
        </button>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 group"
            >
              <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Tom Cook</p>
            <p className="text-xs text-gray-500">Agency Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}