import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Briefcase, 
  Gavel, 
  Copyright, 
  UserCheck, 
  Building, 
  Users, 
  Scale, 
  ShieldCheck, 
  Award, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import { getPracticeAreas } from "@/features/practice-areas/services";
import { getAdvocates } from "@/features/team/services";

// Helper map to render Lucide icons by name
const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Gavel: Gavel,
  Copyright: Copyright,
  UserCheck: UserCheck,
  Building: Building,
  Users: Users,
};

export default async function Home() {
  const practiceAreas = await getPracticeAreas();
  const advocates = await getAdvocates();
  const partners = advocates.filter(a => a.title.includes("Partner"));

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg.webp"
            alt="OJ Advocates Law Chambers Background"
            fill
            priority
            className="object-cover object-center animate-subtle-zoom select-none brightness-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-16">
          <div className="max-w-3xl flex flex-col gap-6 animate-slide-up">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 self-center sm:self-start bg-accent/10 border border-accent/30 px-3 py-1 rounded-sm">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-[10px] sm:text-sm font-semibold tracking-widest text-accent uppercase">
                Premier Legal Advisory Firm
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight font-medium">
              Exceptional legal solutions <br className="hidden sm:inline" />
              <span className="text-accent">tailored for your success.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl">
              OJ Advocates LLP is a legal advisory firm committed to providing responsive and comprehensive legal services to businesses, government, and private clients, delivering positive goal-oriented outcomes.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 self-center sm:self-start w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-accent/20"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="w-full sm:w-auto text-center border border-white/30 hover:border-accent text-white hover:text-accent text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Our Practice Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-accent rounded-full animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* 2. Brand Value & Metrics Ribbon */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x divide-gray-100">
          
          <div className="flex flex-col items-center gap-2 py-4 md:py-0">
            <span className="text-3xl sm:text-4xl font-serif text-primary font-bold">15+</span>
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-muted uppercase">Years Experience</span>
          </div>

          <div className="flex flex-col items-center gap-2 py-4 md:py-0 pt-6 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif text-primary font-bold">6+</span>
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-muted uppercase">Advocates</span>
          </div>

          <div className="flex flex-col items-center gap-2 py-4 md:py-0 pt-6 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif text-primary font-bold">98%</span>
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-muted uppercase">Client Satisfaction</span>
          </div>

          <div className="flex flex-col items-center gap-2 py-4 md:py-0 pt-6 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif text-primary font-bold">500+</span>
            <span className="text-[10px] sm:text-sm font-bold tracking-widest text-muted uppercase">Successful Matters</span>
          </div>

        </div>
      </section>

      {/* 3. Welcome & Introduction */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Welcome to OJ Advocates LLP
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.1] text-primary tracking-tight">
            Legal solutions to help you achieve your goals
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-2xl font-sans mt-2">
              At OJ Advocates LLP we are focused on delivering outstanding legal solutions to individuals, businesses, and organizations. With a team of experienced and highly skilled Advocates, we deliver exceptional legal solutions tailored to your specific needs. The firm serves Clients from various sectors of the economy including financial institutions, local and international organizations (both private and public), and governmental agencies among others.
            </p>
            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-2xl font-sans mt-2">
              We endeavor to partner with leading legal service providers in foreign jurisdictions to further ensure that our clients can access seamless cross-border legal representation without difficulty. With a proven track-record in dealing with complex and sensitive matters, the Firm has solidified its position as a trusted and reputable law firm, known for its expertise, dedication to clients, and commitment to legal excellence.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
            >
              Learn More About Our Story
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-champagne/25 border border-champagne/45 rounded-sm flex flex-col gap-3">
            <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
            <h3 className="text-base font-semibold text-primary uppercase tracking-wider">Uncompromising Trust</h3>
            <p className="text-sm text-muted leading-relaxed">
              We operate under strict ethical standards, guarding attorney-client privilege and transactions with total transparency.
            </p>
          </div>

          <div className="p-6 bg-champagne/25 border border-champagne/45 rounded-sm flex flex-col gap-3">
            <Award className="w-8 h-8 text-accent shrink-0" />
            <h3 className="text-base font-semibold text-primary uppercase tracking-wider">Specialized Focus</h3>
            <p className="text-sm text-muted leading-relaxed">
              Our lawyers bring deep technical expertise in Corporate structures, IP protections, Conveyancing, and Labor relations.
            </p>
          </div>

          <div className="p-6 bg-champagne/25 border border-champagne/45 rounded-sm flex flex-col gap-3">
            <Clock className="w-8 h-8 text-accent shrink-0" />
            <h3 className="text-base font-semibold text-primary uppercase tracking-wider">Responsive Action</h3>
            <p className="text-sm text-muted leading-relaxed">
              We understand speed is critical. We ensure same-day updates and direct lines to lead partners on active files.
            </p>
          </div>

          <div className="p-6 bg-champagne/25 border border-champagne/45 rounded-sm flex flex-col gap-3">
            <Users className="w-8 h-8 text-accent shrink-0" />
            <h3 className="text-base font-semibold text-primary uppercase tracking-wider">Dynamic Networks</h3>
            <p className="text-sm text-muted leading-relaxed">
              We partner with global associate offices to execute regional and international cross-border transactions efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Practice Areas Section */}
      <section className="w-full bg-secondary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
                Areas of Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold">
                Focused Practice Areas
              </h2>
            </div>
            <p className="text-gray-400 text-base max-w-md font-sans leading-relaxed">
              Our firm is organized into dedicated practice units. This specialization allows our attorneys to provide deeply informed advisory services.
            </p>
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = iconMap[area.icon] || Scale;
              return (
                <Link
                  key={area.id}
                  href={`/practice-areas#${area.slug}`}
                  className="group relative bg-primary hover:bg-primary-dark border border-gray-800 hover:border-accent p-8 rounded-sm transition-all duration-300 flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-gray-900 border border-gray-800 text-accent group-hover:bg-accent group-hover:text-white rounded-sm w-fit transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif text-white font-semibold transition-colors duration-300 group-hover:text-accent">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {area.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-4 flex items-center gap-1.5 text-accent text-sm font-semibold tracking-wider uppercase opacity-85 group-hover:opacity-100">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center pt-4">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-300 shadow-md"
            >
              Explore All Legal Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Team Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Our Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold">
            Dedicated Legal Advisors
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-2" />
          <p className="text-muted text-base max-w-xl font-sans leading-relaxed">
            Our lawyers possess academic credentials from recognized institutions, combined with extensive domestic courtroom and commercial contract experience.
          </p>
        </div>

        {/* Partners Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col sm:flex-row bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300"
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
              <div className="p-6 flex flex-col justify-between gap-4">
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

                <div className="flex flex-col gap-2 pt-2 border-t border-gray-50">
                  <span className="text-[10px] text-brand-gray font-mono">
                    {partner.email}
                  </span>
                  <Link
                    href={`/team/${partner.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                  >
                    View Bio Profile
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 border border-primary hover:border-accent text-primary hover:text-accent text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-300"
          >
            Meet Our Entire Team
          </Link>
        </div>
      </section>

      {/* 6. Testimonial / Credibility Block */}
      <section className="w-full bg-champagne/20 py-20 sm:py-28 border-y border-champagne/40">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-8">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Client Testimonials
          </span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-primary italic leading-relaxed font-medium">
            "OJ Advocates LLP provided exceptional legal counsel during our corporate restructuring. Their attention to regulatory detail, prompt response time, and strategic negotiation advice protected our company's assets and ensured a seamless legal transition."
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <span className="text-base font-semibold text-primary uppercase tracking-wider">
              Chief Executive Officer
            </span>
            <span className="text-sm text-muted">
              Leading Regional Infrastructure & Real Estate Group
            </span>
          </div>
        </div>
      </section>

      {/* 7. Call To Action (Final invitation) */}
      <section className="w-full bg-primary text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0 M0,0 L100,100" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
            Have a Legal Matter to Discuss?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans leading-relaxed">
            Reach out to our professionals today. We will analyze your case details and respond within 24 hours to schedule a confidential legal consultation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-300 shadow-md"
            >
              Get In Touch
            </Link>
            <a
              href="tel:+254722172071"
              className="w-full sm:w-auto text-center border border-white/20 hover:border-white/50 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors duration-300"
            >
              Call: +254 722 172 071
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
