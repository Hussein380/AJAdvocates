export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  contractType: string; // e.g. "Full-time", "Part-time", "Internship"
  description: any; // Rich text from Sanity
  requirements?: string[];
  active: boolean;
  publishedAt: string;
}
