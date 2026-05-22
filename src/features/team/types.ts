export interface Advocate {
  id: string;
  name: string;
  slug: string;
  title: string; // e.g., "Managing Partner", "Senior Associate"
  email?: string;
  phone?: string;
  image: string; // URL to profile photo
  bio: any; // Rich text bio from Sanity
  bioExcerpt: string;
  linkedinUrl?: string;
  practiceAreas: string[]; // Slugs or references to PracticeArea
  education?: string[];
  admissions?: string[];
}
