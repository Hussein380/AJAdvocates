import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  BookOpen
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
}

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

// Add caching behavior for Next.js 14+ fetch
export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "imageUrl": image.asset->url,
    body
  }`;
  return client.fetch(query);
}

export default async function BlogPage() {
  const blogPosts = await getPosts();
  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header */}
      <section className="relative w-full py-28 sm:py-36 bg-primary text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg.webp"
            alt="Background Image"
            fill
            className="object-cover object-center animate-subtle-zoom select-none brightness-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Legal Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            News & Publications
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            Periodic legal briefs and regulatory updates analyzed by the professionals at OJ Advocates LLP.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Blog</span>
        </div>
      </div>

      {/* Blog List Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: any) => (
            <div 
              key={post._id} 
              className="bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
            >
              {/* Category tag */}
              <div className="p-6 pb-2">
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest bg-champagne/30 px-2.5 py-1 rounded-sm w-fit">
                  Article
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="px-6 flex-grow flex flex-col gap-3">
                <h2 className="text-lg sm:text-lg font-serif font-bold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed font-sans line-clamp-3">
                  {post.body?.[0]?.children?.[0]?.text || "Read full legal insights on this topic inside..."}
                </p>
              </div>

              {/* Metadata & Footer link */}
              <div className="p-6 pt-4 mt-4 border-t border-gray-50 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[10px] text-muted font-medium font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    OJ Advocates
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 rounded-sm bg-gray-50/50 max-w-3xl mx-auto">
            <BookOpen className="w-8 h-8 text-brand-gray/40 mb-4" />
            <h2 className="text-xl font-serif text-primary font-semibold mb-2">Legal Insights Coming Soon</h2>
            <p className="text-base text-brand-gray max-w-md">Our legal briefs and regulatory updates are currently being curated and will be published shortly. Subscribe below to be notified.</p>
          </div>
        )}
      </section>

      {/* Subscribe Section */}
      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <BookOpen className="w-8 h-8 text-accent" />
          <h3 className="text-2xl font-serif text-white font-medium">
            Subscribe to Legal Briefings
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-md mx-auto">
            Stay updated with quarterly regulatory changes and legal updates in Kenya. We do not distribute spam.
          </p>
          <div className="w-full max-w-sm flex border border-white/20 rounded-sm overflow-hidden font-sans">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-primary/50 text-sm px-4 py-3 outline-none flex-grow text-white placeholder-gray-400"
            />
            <button 
              type="button"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-wider px-5 transition-colors cursor-pointer"
            >
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
