export interface Brand {
  id: string;
  name: string;
  logo: string;
  platforms: SocialPlatform[];
}

export interface SocialPlatform {
  id: string;
  name: 'instagram' | 'pinterest' | 'facebook' | 'twitter';
  handle: string;
  followers: number;
}

export interface Post {
  id: string;
  brandId: string;
  platform: string;
  content: string;
  media?: string[];
  scheduledFor: Date;
  status: 'draft' | 'scheduled' | 'published';
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'admin' | 'creator' | 'client';
  avatar: string;
}