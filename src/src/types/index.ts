import React from 'react';

// Project Types
export interface Project {
  title: string;
  category: string;
  imageUrl: string;
  tags: string[];
  description: string;
  media?: {
    type: 'images' | 'video';
    images?: string[]; // Array of image URLs for carousel
    videoUrl?: string; // YouTube embed URL or video source
  };
}

// Skill Types
export interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string[];
}

// Form Data Types
export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

// Filter Types
export type FilterOption = 'All' | 'Video Editing' | 'Graphic Design' | 'Motion Graphics' | 'Flutter Development' | 'System Development' | 'Web Development' | 'Computer & Network Servicing';