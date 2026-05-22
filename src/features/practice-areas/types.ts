export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: string; // Lucide icon name or SVG path
  excerpt: string;
  description: string;
  content: any; // Rich text content from Sanity
  relatedAdvocates?: string[]; // Array of Advocate IDs/references
}
