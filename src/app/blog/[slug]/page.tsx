import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Briefcase,
  Mail,
  ShieldCheck
} from "lucide-react";

interface BlogPostDetail {
  title: string;
  slug: string;
  date: string;
  author: string;
  authorTitle: string;
  category: string;
  readTime: string;
  content: string[];
}

const postsData: Record<string, BlogPostDetail> = {
  "ip-rights-kenya": {
    title: "Understanding Intellectual Property Rights under Kenyan Law",
    slug: "ip-rights-kenya",
    date: "14 May 2026",
    author: "Gavin R. Castro",
    authorTitle: "Corporate Partner / Advocate",
    category: "Intellectual Property",
    readTime: "5 min read",
    content: [
      "Intellectual property is quickly becoming the primary driver of enterprise value in modern economies. Under Kenyan jurisprudence, intellectual property is protected through a robust regime of statutes, regional treaties, and international conventions.",
      "The key governing authority in Kenya is the Kenya Industrial Property Institute (KIPI), which registers trademarks, patents, utility models, and industrial designs. Trademarks protect brand identifiers (words, logos, slogans) from infringement, granting the proprietor exclusive rights for ten-year renewable periods.",
      "Patents, on the other hand, cover technical inventions that are new, involve an inventive step, and are industrially applicable. Registering a patent via KIPI or the African Regional Intellectual Property Organization (ARIPO) shields your scientific and industrial breakthroughs from copycats for twenty years.",
      "Copyright protections apply to musical, literary, artistic, and audio-visual works, as well as computer programs. In Kenya, copyright arises automatically upon creation of the work, but registering it with the Kenya Copyright Board (KECOBO) provides strong, certified evidence in case of litigation.",
      "Corporate startups and established firms must establish internal intellectual property audits. This entails auditing employment agreements to ensure 'work for hire' clauses vest authorship in the company, drafting non-disclosure agreements (NDAs) for partners, and registering logos before starting commercial campaigns."
    ]
  },
  "real-estate-conveyancing-checks": {
    title: "Regulatory Compliance in Real Estate: Key Checks for Land Purchases",
    slug: "real-estate-conveyancing-checks",
    date: "28 April 2026",
    author: "Joel Nyamumbo",
    authorTitle: "Managing Partner / Advocate",
    category: "Real Estate & Conveyancing",
    readTime: "7 min read",
    content: [
      "Investing in real estate in Kenya is a capital-intensive project that requires meticulous legal due diligence to secure your title and avoid fraudulent schemes. Land conveyancing is governed by the Land Act and the Land Registration Act.",
      "The first step in any property purchase is conducting an official search at the relevant land registry using the parcel's title number. An official search report reveals the registered proprietor, the tenure of the land (freehold or leasehold), and any registered encumbrances such as charges, caveats, or court-ordered injunctions.",
      "Secondly, buyers must verify the land's physical coordinates against the registry map. This is done by commissioning a licensed surveyor to conduct a beacon certificate audit. This prevents purchasing nonexistent parcels or crossing boundary beacons onto public service reserves.",
      "Thirdly, ensure the seller provides land rent and land rates clearance certificates from the Ministry of Lands and the respective County Government. Outstanding rates must be cleared before the registry can approve the transfer of title documents.",
      "Finally, the transfer document is drafted, signed by both parties, and submitted for valuation. Stamp duty (normally 2% for rural properties and 4% for urban municipalities) is paid to the Kenya Revenue Authority (KRA) before the transfer is registered, completing the legal conveyance process."
    ]
  },
  "labor-act-guidelines-hr": {
    title: "Navigating Employment Contracts: Guidelines for HR Managers in Kenya",
    slug: "labor-act-guidelines-hr",
    date: "10 March 2026",
    author: "Joseph Karanja",
    authorTitle: "Senior Associate / Labor Specialist",
    category: "Employment & Labor Law",
    readTime: "6 min read",
    content: [
      "The relationship between employers and employees in Kenya is strictly governed by the Employment Act of 2007, the Labor Institutions Act, and the Labor Relations Act. HR managers must ensure compliance to prevent costly industrial disputes.",
      "Every contract of service for a period exceeding three months must be in writing. The contract must state the job description, employment terms, working hours, salary structure, annual leave allocations, and the specific termination notice periods.",
      "A common area of dispute is summary dismissal. Under Section 44 of the Employment Act, summary dismissal is only legal when an employee has committed gross misconduct. However, even in cases of clear misconduct, the employer must conduct a fair disciplinary hearing. This involves serving a show-cause letter, giving the employee time to prepare a defense, and allowing a witness or union representative to attend the hearing.",
      "Furthermore, organizations must audit their employee handbook policies concerning intellectual property ownership, remote work compliance, and employee share ownership plans (ESOPs). Clearly stating how proprietary rights are transferred prevents litigation when key technicians exit.",
      "We recommend corporate clients conduct annual labor audits. Reviewing overtime schemes, verifying statutory deductions (PAYE, SHIF, NSSF), and updating non-compete clauses keeps operations compliant and builds an ethical workplace environment."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: "ip-rights-kenya" },
    { slug: "real-estate-conveyancing-checks" },
    { slug: "labor-act-guidelines-hr" }
  ];
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const resolvedParams = await (params as any);
  const slug = resolvedParams.slug;

  const post = postsData[slug];
  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header */}
      <section className="relative w-full py-24 sm:py-32 bg-primary text-white overflow-hidden flex items-center justify-center">
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
            Legal Insights Detail
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium leading-tight text-white max-w-4xl mx-auto">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            OJ Advocates LLP &bull; Publications & Analytics
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-accent font-medium">Publications</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold truncate max-w-[200px]">{post.title}</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted hover:text-accent w-fit transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Publications
          </Link>

          {/* Title and metadata block */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 mt-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-champagne/30 px-2.5 py-1 rounded-sm w-fit">
              {post.category}
            </span>
            
            <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
              {post.title}
            </h2>

            <div className="flex items-center gap-4 text-sm text-muted font-medium font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="flex flex-col gap-6 text-base sm:text-lg text-brand-gray leading-relaxed font-sans">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Author info card */}
          <div className="mt-8 p-6 bg-champagne/10 border border-champagne/30 rounded-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <User className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Authored By</span>
              <span className="font-serif font-bold text-primary text-base">{post.author}</span>
              <span className="text-muted">{post.authorTitle}</span>
              <span className="text-[11px] text-brand-gray mt-1 leading-relaxed">
                Counsel specializes in transaction due diligence and corporate compliance restructuring. Contact their desk for formal legal briefs.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Consultation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Booking Card */}
          <div className="bg-primary text-white p-8 rounded-sm flex flex-col gap-5 shadow-sm">
            <h3 className="text-base font-serif font-semibold text-accent uppercase tracking-widest">
              Consultation Desk
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              Have a legal matter relating to this publication? Reach out to our attorneys to audit your compliance certificates or draft custom contracts.
            </p>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
              <Link
                href="/contact"
                className="w-full inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent-hover text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-sm transition-colors duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                Schedule Case Brief
              </Link>
            </div>
          </div>

          {/* Related services card */}
          <div className="border border-gray-150 p-6 rounded-sm flex flex-col gap-4 bg-gray-50/50">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Practice Capabilities
            </h3>
            <p className="text-[11px] text-muted leading-relaxed">
              OJ Advocates LLP operates dedicated legal practice groups to guide transactions, registrations, and dispute management.
            </p>
            <Link
              href="/practice-areas"
              className="text-sm font-semibold text-accent hover:text-accent-hover underline underline-offset-4"
            >
              Explore Practice Areas &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
