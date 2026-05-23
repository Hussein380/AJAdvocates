import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowLeft } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import SocialShare from "@/components/ui/SocialShare";
import { PortableTextImage } from "@/components/ui/PortableTextImage";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image,
    body
  }`;
  return client.fetch(query, { slug });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Not Found" };
  
  const description = post.body?.[0]?.children?.[0]?.text?.substring(0, 160) || "Read this legal insight by OJ Advocates LLP.";
  const imageUrl = post.image ? urlFor(post.image).url() : "https://ojadvocatesllp.com/assets/hero-bg.webp";

  return {
    title: `${post.title} | OJ Advocates LLP`,
    description: description,
    openGraph: {
      title: `${post.title} | OJ Advocates LLP`,
      description: description,
      url: `https://ojadvocatesllp.com/blog/${params.slug}`,
      siteName: "OJ Advocates LLP",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | OJ Advocates LLP`,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.image ? urlFor(post.image).url() : "/assets/hero-bg.webp";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Article Hero */}
      <section className="relative w-full py-24 sm:py-32 bg-primary text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover object-center animate-subtle-zoom select-none brightness-[0.4]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 pt-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase bg-champagne/20 px-3 py-1 rounded-sm">
              Article
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white drop-shadow-lg">
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-gray-300 font-mono mt-4">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-sm backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-accent" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-sm backdrop-blur-sm">
              <User className="w-4 h-4 text-accent" />
              OJ Advocates
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-accent font-medium">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold line-clamp-1 max-w-[200px] sm:max-w-none">{post.title}</span>
        </div>
      </div>

      {/* Article Content */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Share Bar */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <SocialShare url={`/blog/${post.slug}`} title={post.title} />
        </div>

        {/* Content Body */}
        <article className="prose prose-lg sm:prose-xl max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-primary">
          <PortableText 
            value={post.body} 
            components={{
              types: {
                image: PortableTextImage
              }
            }}
          />
        </article>

        {/* Footer Share Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 mt-16 pt-10 gap-6">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h4 className="text-xl font-serif font-bold text-primary">Found this article helpful?</h4>
            <p className="text-sm text-muted">Share it with your colleagues and network.</p>
          </div>
          <SocialShare url={`/blog/${post.slug}`} title={post.title} />
        </div>

      </section>
    </div>
  );
}
