import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  ArrowUpRight,
  UserCheck
} from "lucide-react";
import { getAdvocates } from "@/features/team/services";

export default async function TeamPage() {
  const advocates = await getAdvocates();
  
  // Partition team members by rank (Joel and Gavin are Partners)
  const partners = advocates.filter((a) => ["joel-nyamumbo", "gavin-castro"].includes(a.slug));
  const associatesAndTrainees = advocates.filter((a) => !["joel-nyamumbo", "gavin-castro"].includes(a.slug));

  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header */}
      <section className="relative w-full py-28 sm:py-36 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg.webp"
            alt="Team Background"
            fill
            priority
            className="object-cover object-center animate-subtle-zoom select-none brightness-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Our Professionals
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            Meet Our Legal Team
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            Committed to providing professional representation and exceptional legal advice.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Our Team</span>
        </div>
      </div>

      {/* Partners Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 mb-12">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
            Firm Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col sm:flex-row bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative w-full sm:w-48 h-64 sm:h-auto shrink-0 bg-gray-50 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col justify-between gap-5 flex-1">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold tracking-widest text-accent uppercase">
                    {partner.title}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-primary">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {partner.bioExcerpt}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-100">
                  {partner.email && (
                    <div className="flex items-center gap-2 text-sm text-brand-gray font-mono">
                      <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">{partner.email}</span>
                    </div>
                  )}
                  {partner.phone && (
                    <div className="flex items-center gap-2 text-sm text-brand-gray font-mono">
                      <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{partner.phone}</span>
                    </div>
                  )}
                  <Link
                    href={`/team/${partner.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-200 mt-1"
                  >
                    View Biography
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Associates & Trainees Section */}
      <section className="w-full bg-gray-50/40 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 mb-12">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
              Attorneys & Legal Assistants
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Associates & Trainees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {associatesAndTrainees.map((adv) => (
              <div 
                key={adv.id} 
                className="flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={adv.image}
                    alt={adv.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {adv.title}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-serif font-bold text-primary group-hover:text-accent transition-colors duration-200">
                      {adv.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {adv.bioExcerpt}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-100">
                    {adv.email && (
                      <div className="flex items-center gap-2 text-[11px] text-brand-gray font-mono">
                        <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="truncate">{adv.email}</span>
                      </div>
                    )}
                    
                    <Link
                      href={`/team/${adv.slug}`}
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-200 mt-1"
                    >
                      View Biography
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team section */}
      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h3 className="text-2xl font-serif text-white font-medium">
            Interested in Joining OJ Advocates?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-xl">
            We are always looking for exceptional, values-driven legal talents, pupil applications, and administrative professionals to strengthen our team.
          </p>
          <Link
            href="/careers"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors duration-200 shadow-md"
          >
            Explore Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
