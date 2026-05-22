export interface Post {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage: string;
  excerpt: string;
  body: any; // Rich text body from Sanity
  author?: {
    name: string;
    image?: string;
    slug?: string;
  };
  tags?: string[];
}
