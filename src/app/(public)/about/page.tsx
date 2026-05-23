import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  Target, 
  ShieldCheck, 
  Scale, 
  Clock, 
  Award, 
  ChevronRight,
  Handshake,
  HeartHandshake
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header */}
      <section className="relative w-full py-28 sm:py-36 bg-primary text-white overflow-hidden flex items-center justify-center">
        {/* Subtle grid background */}
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
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            About Our Firm
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Committed to providing premium, comprehensive legal advisory and litigation solutions.
          </p>
        </div>
      </section>

      {/* Breadcrumbs / Quick Navigation */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">About Us</span>
        </div>
      </div>

      {/* Our Story & History Section */}
      <section id="history" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Our History
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold leading-tight">
            Built on a Foundation of Legal Integrity & Client Centricity
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            OJ Advocates LLP trade name was registered in 2023. However, the firm was established in 2017 by the Managing Partner O.J. Nyamumbo as Ondieki Nyamumbo Advocates. The firm has undergone various changes in its name from the inaugural Ondieki Nyamumbo Advocates to the current trade name. OJ Advocates LLP has undergone a rebranding process to better align with the evolving needs of our clients and to reflect our growth and expanded range of services.
          </p>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            The decision to rebrand was driven by several key factors: enhanced positioning; reflecting evolving service; targeting new markets; modernizing brand image; reinforcing core values; and strengthening client relationship. Overall, the decision to rebrand to OJ Law Advocates LLP is driven by our commitment to staying ahead in a competitive legal landscape, expanding our services, and better serving our clients.
          </p>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            The rebranding process allows us to strengthen our brand identity, differentiate ourselves, and communicate our values and expertise more effectively to clients, ultimately enhancing our overall client experience.
          </p>
        </div>

        {/* Brand Image Accent */}
        <div className="lg:col-span-5 relative h-96 w-full rounded-sm overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="/assets/hero-bg.webp"
            alt="OJ Advocates Chambers Office"
            fill
            className="object-cover brightness-75 hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </section>

      {/* Mission, Vision, and Values Panel */}
      <section className="w-full bg-secondary text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="flex flex-col gap-4 p-8 bg-primary/50 border border-gray-800 rounded-sm">
              <div className="w-12 h-12 bg-accent/15 rounded-sm flex items-center justify-center text-accent">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white uppercase tracking-wider">
                Our Vision
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                To be the premier legal advisory firm in East and Central Africa, recognized for legal precision, ethical operations, and responsive counsel that drives commercial success.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-4 p-8 bg-primary/50 border border-gray-800 rounded-sm">
              <div className="w-12 h-12 bg-accent/15 rounded-sm flex items-center justify-center text-accent">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-white uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                To provide tailored, commercially-viable legal counsel and aggressive representation. We leverage technical expertise, collaborative networks, and modern processes to safeguard client interests.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                Ethical Pillars
              </span>
              <h3 className="text-2xl font-serif text-white font-semibold mt-2">
                Our Core Values
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 bg-primary/30 border border-gray-800 rounded-sm flex flex-col gap-3">
                <Scale className="w-8 h-8 text-accent shrink-0" />
                <h4 className="font-semibold text-white text-base uppercase tracking-wide">Integrity</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We hold ourselves to absolute transparency, maintaining clean trust accounts and strictly avoiding conflicts of interest.
                </p>
              </div>

              <div className="p-6 bg-primary/30 border border-gray-800 rounded-sm flex flex-col gap-3">
                <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
                <h4 className="font-semibold text-white text-base uppercase tracking-wide">Precision</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We verify all facts, research relevant jurisprudence, and audit contracts clause-by-clause to eliminate risk.
                </p>
              </div>

              <div className="p-6 bg-primary/30 border border-gray-800 rounded-sm flex flex-col gap-3">
                <HeartHandshake className="w-8 h-8 text-accent shrink-0" />
                <h4 className="font-semibold text-white text-base uppercase tracking-wide">Client Care</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We keep clients informed, providing transparent estimates and progress reports throughout a file's lifetime.
                </p>
              </div>

              <div className="p-6 bg-primary/30 border border-gray-800 rounded-sm flex flex-col gap-3">
                <Award className="w-8 h-8 text-accent shrink-0" />
                <h4 className="font-semibold text-white text-base uppercase tracking-wide">Results</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We focus on legal results that protect margins, commercial values, and long-term operating licenses.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Service Charter Section */}
      <section id="service-charter" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Client Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold leading-tight">
            Our Professional Service Charter
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed font-sans">
            OJ Advocates LLP stands by our Service Charter. We believe that professional relationship management is as critical as courtroom performance.
          </p>
        </div>

        {/* Service Charter Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">1</div>
            <h3 className="font-serif font-bold text-primary text-lg">24-Hour Responsiveness</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              We respond to all email inquiries and telephone calls within 24 hours. Emergency litigation actions are escalated to a partner immediately.
            </p>
          </div>

          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">2</div>
            <h3 className="font-serif font-bold text-primary text-lg">Fee Transparency</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              We provide itemized retainer quotes, detailed transaction forecasts, and prompt billing notifications to prevent unexpected costs.
            </p>
          </div>

          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">3</div>
            <h3 className="font-serif font-bold text-primary text-lg">Continuous Case Updates</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              Advocates prepare and send formal status briefs at each litigation stage or real estate registry milestone.
            </p>
          </div>

          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">4</div>
            <h3 className="font-serif font-bold text-primary text-lg">Confidentiality Guard</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              Client details are stored on secure local and cloud-based systems, preserving absolute confidentiality under attorney privilege laws.
            </p>
          </div>

          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">5</div>
            <h3 className="font-serif font-bold text-primary text-lg">Proactive Legal Alerts</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              We monitor legislative changes in Kenya and alert corporate clients to regulatory adjustments impacting their industries.
            </p>
          </div>

          <div className="p-8 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center rounded-full text-base font-bold">6</div>
            <h3 className="font-serif font-bold text-primary text-lg">Client Satisfaction Audits</h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              Upon closure of any matter, partners check in with clients to review service performance and address any process improvements.
            </p>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h3 className="text-2xl font-serif text-white font-medium">
            Learn More About Our Team & Services
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-xl">
            Meet the experienced advocates who deliver this service, or explore the specific legal disciplines we practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/team"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors duration-200"
            >
              Meet Our Advocates
            </Link>
            <Link
              href="/practice-areas"
              className="border border-white/20 hover:border-white/50 text-white text-sm font-semibold uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors duration-200"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
