import React from 'react';
import { AreaChart, Card, Title, Text } from '@tremor/react';
import { useStore } from '../store/useStore';

const chartdata = [
  { date: '2024-01', Engagement: 2890, Followers: 2400 },
  { date: '2024-02', Engagement: 3200, Followers: 2800 },
  { date: '2024-03', Engagement: 3500, Followers: 3300 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <Card>
        <Title>Social Media Performance</Title>
        <Text>Engagement and follower growth over time</Text>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["Engagement", "Followers"]}
          colors={["blue", "cyan"]}
        />
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Title>Top Performing Posts</Title>
          <div className="mt-4 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded" />
                  <div>
                    <p className="text-sm font-medium">Post Title {i + 1}</p>
                    <p className="text-xs text-gray-500">Posted 2 days ago</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">
                  {1200 - i * 300} engagements
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Title>Audience Insights</Title>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <Text>Age Distribution</Text>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Text>Gender Split</Text>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Text>Location</Text>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}