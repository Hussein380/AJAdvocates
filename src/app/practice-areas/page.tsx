import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  Gavel, 
  Copyright, 
  UserCheck, 
  Building, 
  Users, 
  Scale, 
  ChevronRight,
  User,
  ArrowRight,
  Mail
} from "lucide-react";
import { getPracticeAreas } from "@/features/practice-areas/services";
import { getAdvocates } from "@/features/team/services";

const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Gavel: Gavel,
  Copyright: Copyright,
  UserCheck: UserCheck,
  Building: Building,
  Users: Users,
};

export default async function PracticeAreasPage() {
  const practiceAreas = await getPracticeAreas();
  const advocates = await getAdvocates();

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
            Areas of Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            Legal Services & Practices
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            OJ Advocates LLP provides comprehensive legal counsel and advisory solutions. Explore our core practice areas.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Practice Areas</span>
        </div>
      </div>

      {/* Mini Grid Index */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {practiceAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Scale;
            return (
              <a
                key={area.id}
                href={`#${area.slug}`}
                className="flex flex-col items-center gap-3 p-4 bg-white hover:bg-champagne/10 border border-gray-100 hover:border-accent rounded-sm transition-all duration-300 text-center"
              >
                <div className="p-2 bg-gray-50 text-accent rounded-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-sm font-semibold text-primary leading-tight">
                  {area.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Editorial Detailed Sections */}
      <section className="w-full py-16 flex flex-col divide-y divide-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {practiceAreas.map((area, index) => {
          const IconComponent = iconMap[area.icon] || Scale;
          
          // Resolve related advocates for this practice area
          const relatedAdvs = advocates.filter((advocate) =>
            area.relatedAdvocates?.includes(advocate.slug)
          );

          const isEven = index % 2 === 0;

          return (
            <div
              key={area.id}
              id={area.slug}
              className={`py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-24`}
            >
              {/* Main Description */}
              <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? "" : "lg:order-last"}`}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-champagne/30 text-accent rounded-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                    Practice Desk
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                  {area.title}
                </h2>

                <p className="text-base sm:text-lg text-brand-gray font-serif italic leading-relaxed border-l-2 border-accent/40 pl-4 py-1">
                  {area.description}
                </p>

                <div className="flex flex-col gap-4 text-base text-muted leading-relaxed font-sans">
                  {area.content.map((p: any, pIdx: number) => (
                    <p key={pIdx}>{p.children || p}</p>
                  ))}
                </div>

                {/* Additional Practice Scope Bullet Points */}
                <div className="pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                    Representative Engagements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-brand-gray font-sans">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      Legal Audit & Advisory Compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      Document Drafting & Structuring
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      Regulatory Approvals Filing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      Litigation Defense & Negotiation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Advocates Column */}
              <div className="lg:col-span-5 flex flex-col gap-6 bg-gray-50/50 border border-gray-100 p-8 rounded-sm h-fit">
                <h3 className="text-base font-bold tracking-widest text-primary uppercase border-b border-gray-200 pb-3">
                  Lead Advocates & Advisors
                </h3>

                {relatedAdvs.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    {relatedAdvs.map((adv) => (
                      <div key={adv.id} className="flex gap-4 items-center group">
                        {/* Profile Pic Thumbnail */}
                        <div className="relative w-12 h-12 bg-gray-100 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={adv.image}
                            alt={adv.name}
                            fill
                            className="object-cover object-top"
                            sizes="48px"
                          />
                        </div>

                        {/* Profile Info */}
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
                          aria-label={`View ${adv.name}'s bio`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted">No specialists currently listed for this practice.</p>
                )}

                <div className="pt-4 border-t border-gray-100 mt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-accent text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-sm transition-colors duration-300"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Book Practice Consultation
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h3 className="text-2xl font-serif text-white font-medium">
            Need Advisory on a Custom Matter?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-xl">
            If your legal requirements span multiple disciplines or represent a unique cross-border issue, our lead partners can assemble a custom taskforce.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-200 shadow-md"
          >
            Contact Partner Directly
          </Link>
        </div>
      </section>
    </div>
  );
}
