import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Briefcase, 
  Gavel, 
  Copyright, 
  UserCheck, 
  Building, 
  Users, 
  Scale, 
  ChevronRight,
  ArrowLeft,
  Mail,
  ArrowRight
} from "lucide-react";
import { getPracticeAreas, getPracticeAreaBySlug } from "@/features/practice-areas/services";
import { getAdvocates } from "@/features/team/services";

const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Gavel: Gavel,
  Copyright: Copyright,
  UserCheck: UserCheck,
  Building: Building,
  Users: Users,
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  const practiceAreas = await getPracticeAreas();
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const resolvedParams = await (params as any);
  const slug = resolvedParams.slug;

  const area = await getPracticeAreaBySlug(slug);
  if (!area) {
    notFound();
  }

  const advocates = await getAdvocates();
  const relatedAdvs = advocates.filter((advocate) =>
    area.relatedAdvocates?.includes(advocate.slug)
  );

  const IconComponent = iconMap[area.icon] || Scale;

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
            Legal Expertise Detail
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium leading-tight text-white max-w-4xl mx-auto">
            {area.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            OJ Advocates LLP &bull; Specialized legal representation
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/practice-areas" className="hover:text-accent font-medium">Practice Areas</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold truncate max-w-[200px]">{area.title}</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Back button + Detailed Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted hover:text-accent w-fit transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Practice Areas
          </Link>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-champagne/30 text-accent rounded-sm w-fit">
                <IconComponent className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Desk Overview
              </h2>
            </div>
            
            <p className="text-lg sm:text-lg text-brand-gray font-serif italic leading-relaxed border-l-2 border-accent/40 pl-4 py-1">
              {area.description}
            </p>

            <div className="flex flex-col gap-5 text-base text-muted leading-relaxed font-sans mt-2">
              {area.content.map((p: any, pIdx: number) => (
                <p key={pIdx}>{p.children || p}</p>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary mb-4">
              Our Representative Mandates Include:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-brand-gray font-sans">
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-primary mb-1">Advisory & Audit</h4>
                <p className="text-[11px] text-muted leading-relaxed">Helping commercial organizations evaluate policy drafts, transactional operations, and compliance risks.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-primary mb-1">Dispute Management</h4>
                <p className="text-[11px] text-muted leading-relaxed">Providing legal representation inside regional courts, administrative tribunals, or private arbitration.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-primary mb-1">Registry Conveyancing</h4>
                <p className="text-[11px] text-muted leading-relaxed">Executing property deeds registry, intellectual trademark filings, or company share registrations.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
                <h4 className="font-semibold text-primary mb-1">Regulatory Approvals</h4>
                <p className="text-[11px] text-muted leading-relaxed">Securing environmental permissions, zoning compliance reviews, and competition commission clearances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Specialists */}
        <div className="lg:col-span-4 flex flex-col gap-6 bg-gray-50/50 border border-gray-100 p-8 rounded-sm h-fit">
          <h3 className="text-base font-bold tracking-widest text-primary uppercase border-b border-gray-200 pb-3">
            Lead Desk Specialists
          </h3>

          {relatedAdvs.length > 0 ? (
            <div className="flex flex-col gap-5">
              {relatedAdvs.map((adv) => (
                <div key={adv.id} className="flex gap-4 items-center group">
                  <div className="relative w-12 h-12 bg-gray-100 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={adv.image}
                      alt={adv.name}
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-wide">
                      {adv.title}
                    </span>
                    <Link
                      href={`/team/${adv.slug}`}
                      className="text-base font-serif font-bold text-primary hover:text-accent truncate transition-colors duration-200"
                    >
                      {adv.name}
                    </Link>
                    <span className="text-[10px] text-muted truncate font-mono">
                      {adv.email}
                    </span>
                  </div>
                  
                  <Link
                    href={`/team/${adv.slug}`}
                    className="p-2 bg-white group-hover:bg-accent border border-gray-100 group-hover:border-accent text-primary group-hover:text-white rounded-full transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">No specialists currently assigned to this practice.</p>
          )}

          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link
              href="/contact"
              className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-accent text-white text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-sm transition-colors duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              Schedule Retainer Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
