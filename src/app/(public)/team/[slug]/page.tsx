import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  ArrowLeft,
  Mail, 
  Phone, 
  MapPin,
  GraduationCap,
  Award,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import { getAdvocates, getAdvocateBySlug } from "@/features/team/services";
import { getPracticeAreas } from "@/features/practice-areas/services";

// Inline LinkedIn Icon matching Lucide style
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateStaticParams() {
  const advocates = await getAdvocates();
  return advocates.map((adv) => ({
    slug: adv.slug,
  }));
}

export default async function TeamMemberDetailPage({ params }: PageProps) {
  const resolvedParams = await (params as any);
  const slug = resolvedParams.slug;

  const advocate = await getAdvocateBySlug(slug);
  if (!advocate) {
    notFound();
  }

  // Load practice areas to resolve titles for the badges
  const allPracticeAreas = await getPracticeAreas();
  const matchedPractices = allPracticeAreas.filter((area) =>
    advocate.practiceAreas.includes(area.slug)
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header banner */}
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
            Advocate Profile
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-medium leading-tight text-white">
            {advocate.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            {advocate.title}
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/team" className="hover:text-accent font-medium">Our Team</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">{advocate.name}</span>
        </div>
      </div>

      {/* Profile Detail Layout */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Portrait and Info Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted hover:text-accent w-fit transition-colors duration-200 lg:hidden mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team Listing
          </Link>

          {/* Large portrait image */}
          <div className="relative w-full aspect-[4/5] bg-gray-50 border border-gray-100 rounded-sm overflow-hidden shadow-sm">
            <Image
              src={advocate.image}
              alt={advocate.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>

          {/* Quick contact and details panel */}
          <div className="bg-champagne/20 border border-champagne/45 p-6 rounded-sm flex flex-col gap-5">
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase border-b border-champagne/40 pb-2">
              Contact Details
            </h3>

            <div className="flex flex-col gap-4 text-sm font-sans">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Email Address</span>
                  <a href={`mailto:${advocate.email}`} className="text-primary hover:text-accent font-mono font-medium">
                    {advocate.email}
                  </a>
                </div>
              </div>

              {advocate.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Direct Dial</span>
                    <a href={`tel:${advocate.phone.replace(/\s+/g, '')}`} className="text-primary hover:text-accent font-mono font-medium">
                      {advocate.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Office Location</span>
                  <span className="text-brand-gray font-medium">Hurlingham, Nairobi</span>
                </div>
              </div>
            </div>

            {/* Social link */}
            <div className="pt-2 border-t border-champagne/30 flex items-center justify-between">
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Professional Networks</span>
              <a
                href={advocate.linkedinUrl || "https://linkedin.com/company/oj-advocates-llp"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white hover:bg-accent border border-gray-100 hover:border-accent text-brand-gray hover:text-white rounded-full transition-all duration-200"
                aria-label={`${advocate.name}'s LinkedIn`}
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio details, Education, admissions and Practice desks */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <Link
            href="/team"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted hover:text-accent w-fit transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team Listing
          </Link>

          {/* Heading intro */}
          <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
              {advocate.title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Professional Biography
            </h2>
          </div>

          {/* Rich text bio */}
          <div className="flex flex-col gap-4 text-base sm:text-lg text-brand-gray leading-relaxed font-sans">
            {advocate.bio.map((p: any, idx: number) => (
              <p key={idx}>{p.children || p}</p>
            ))}
          </div>

          {/* Practice areas alignment */}
          <div className="flex flex-col gap-4 border-t border-gray-100 pt-8">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent" />
              Practice Areas & Specialization
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {matchedPractices.map((practice) => (
                <Link
                  key={practice.id}
                  href={`/practice-areas#${practice.slug}`}
                  className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-champagne/35 border border-gray-200 hover:border-accent text-sm font-semibold text-primary px-3.5 py-1.5 rounded-sm transition-all duration-200"
                >
                  {practice.title}
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              ))}
            </div>
          </div>

          {/* Education & Admissions split block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            {/* Education */}
            {advocate.education && advocate.education.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  Education
                </h3>
                <ul className="flex flex-col gap-3">
                  {advocate.education.map((edu, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-brand-gray font-sans">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Admissions */}
            {advocate.admissions && advocate.admissions.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Professional Admissions
                </h3>
                <ul className="flex flex-col gap-3">
                  {advocate.admissions.map((adm, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-brand-gray font-sans">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* consultation invite */}
      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h3 className="text-2xl font-serif text-white font-medium">
            Schedule a Meeting with {advocate.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-xl">
            Discuss your case or transaction particulars directly. Our team respects confidential legal briefs and offers same-day callbacks.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-200 shadow-md"
          >
            Request Case Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
