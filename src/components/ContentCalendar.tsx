import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { Calendar, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';

export function ContentCalendar() {
  const posts = useStore((state) => state.posts);
  const startDate = startOfWeek(new Date());

  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));

  return (
    <div className="rounded-lg bg-white shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Content Calendar</h2>
          <button className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {weekDays.map((date) => (
            <div key={date.toString()} className="space-y-2">
              <div className="text-sm font-medium text-gray-500">
                {format(date, 'EEE')}
                <span className="ml-1 text-gray-900">{format(date, 'd')}</span>
              </div>
              <div className="min-h-[120px] rounded-lg border-2 border-dashed border-gray-200 p-2 hover:border-blue-500 cursor-pointer">
                {posts
                  .filter((post) => format(new Date(post.scheduledFor), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'))
                  .map((post) => (
                    <div
                      key={post.id}
                      className="mb-2 rounded bg-blue-50 p-2 text-xs text-blue-700"
                    >
                      {post.content.substring(0, 30)}...
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}