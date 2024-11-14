import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Calendar, Image as ImageIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';

export function PostEditor() {
  const { selectedBrand, brands, addPost } = useStore();
  const [content, setContent] = useState('');
  const [scheduledFor, setScheduledFor] = useState(
    format(new Date().setHours(new Date().getHours() + 1), "yyyy-MM-dd'T'HH:mm")
  );
  const [media, setMedia] = useState<string[]>([]);
  const [platform, setPlatform] = useState('');

  const brand = brands.find((b) => b.id === selectedBrand);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBrand || !platform) return;

    addPost({
      brandId: selectedBrand,
      content,
      scheduledFor: new Date(scheduledFor),
      platform,
      status: 'draft',
      media
    });

    // Reset form
    setContent('');
    setPlatform('');
    setMedia([]);
  };

  if (!selectedBrand) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500 text-center">Select a brand to create a post</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select platform</option>
              {brand?.platforms.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Write your post content..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Schedule</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="datetime-local"
                value={scheduledFor}
                onChange={(e) => setScheduledFor(e.target.value)}
                className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Media URL</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="url"
                value={media[0] || ''}
                onChange={(e) => setMedia([e.target.value])}
                className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}