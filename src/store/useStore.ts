import { create } from 'zustand';
import { Brand, Post, TeamMember, SocialPlatform } from '../types';

interface Store {
  brands: Brand[];
  posts: Post[];
  teamMembers: TeamMember[];
  selectedBrand: string | null;
  addBrand: (brand: Omit<Brand, 'id'>) => void;
  updateBrand: (id: string, brand: Partial<Brand>) => void;
  deleteBrand: (id: string) => void;
  addPost: (post: Omit<Post, 'id'>) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  setSelectedBrand: (brandId: string | null) => void;
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;
}

const initialBrands: Brand[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc',
    logo: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=128&h=128&q=80',
    platforms: [
      { id: '1', name: 'instagram', handle: '@techsolutions', followers: 15000 },
      { id: '2', name: 'twitter', handle: '@techsolutions', followers: 25000 }
    ]
  },
  {
    id: '2',
    name: 'Green Earth Co',
    logo: 'https://images.unsplash.com/photo-1550305080-4e029753abcf?auto=format&fit=crop&w=128&h=128&q=80',
    platforms: [
      { id: '3', name: 'facebook', handle: 'GreenEarthCo', followers: 35000 },
      { id: '4', name: 'instagram', handle: '@greenearth', followers: 28000 }
    ]
  }
];

const initialPosts: Post[] = [
  {
    id: '1',
    brandId: '1',
    platform: 'instagram',
    content: 'Exciting new tech innovations coming your way! #TechInnovation',
    scheduledFor: new Date('2024-03-15T10:00:00'),
    status: 'scheduled',
    media: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&q=80']
  },
  {
    id: '2',
    brandId: '2',
    platform: 'facebook',
    content: 'Join us in our mission for a greener planet! 🌍 #Sustainability',
    scheduledFor: new Date('2024-03-16T14:00:00'),
    status: 'draft'
  }
];

const initialTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Tom Cook',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '2',
    name: 'Sarah Miller',
    role: 'creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const useStore = create<Store>((set) => ({
  brands: initialBrands,
  posts: initialPosts,
  teamMembers: initialTeamMembers,
  selectedBrand: null,

  addBrand: (brand) =>
    set((state) => ({
      brands: [...state.brands, { ...brand, id: Math.random().toString(36).substr(2, 9) }]
    })),

  updateBrand: (id, brand) =>
    set((state) => ({
      brands: state.brands.map((b) => (b.id === id ? { ...b, ...brand } : b))
    })),

  deleteBrand: (id) =>
    set((state) => ({
      brands: state.brands.filter((b) => b.id !== id)
    })),

  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, { ...post, id: Math.random().toString(36).substr(2, 9) }]
    })),

  updatePost: (id, post) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...post } : p))
    })),

  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id)
    })),

  setSelectedBrand: (brandId) =>
    set(() => ({
      selectedBrand: brandId
    })),

  addTeamMember: (member) =>
    set((state) => ({
      teamMembers: [...state.teamMembers, { ...member, id: Math.random().toString(36).substr(2, 9) }]
    })),

  updateTeamMember: (id, member) =>
    set((state) => ({
      teamMembers: state.teamMembers.map((m) => (m.id === id ? { ...m, ...member } : m))
    })),

  deleteTeamMember: (id) =>
    set((state) => ({
      teamMembers: state.teamMembers.filter((m) => m.id !== id)
    }))
}));