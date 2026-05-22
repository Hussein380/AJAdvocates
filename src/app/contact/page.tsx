import Link from "next/link";
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldAlert,
  Building
} from "lucide-react";
import ContactForm from "@/features/contact/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header */}
      <section className="relative w-full py-28 sm:py-36 bg-primary text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 M0,100 L100,0" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4">
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            Schedule a Consultation
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            Our advocates are ready to examine your transaction briefs or represent your litigation matters.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Main Form and Coordinate Details */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Office details, address, emails, phones */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
              Office Coordinates
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              OJ Advocates LLP Chambers
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
              Visit our offices in Nairobi, or reach out directly to our desks. All client correspondence is managed with attorney confidentiality standards.
            </p>
          </div>

          {/* Location Block */}
          <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-sm">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-bold text-primary uppercase tracking-wider">Physical Chambers</span>
              <span className="text-brand-gray leading-relaxed">
                Chaka Place, 1st Floor,<br />
                Argwings Kodhek Road, Hurlingham,<br />
                Nairobi, Kenya
              </span>
              <span className="text-[10.5px] text-muted italic mt-1 font-medium">
                P.O. Box 76683-00508, Nairobi
              </span>
            </div>
          </div>

          {/* Telephones Block */}
          <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-sm">
            <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-bold text-primary uppercase tracking-wider">Telephone Call Desks</span>
              <div className="flex flex-col gap-1.5 font-mono text-brand-gray">
                <a href="tel:+254722172071" className="hover:text-accent font-medium transition-colors">
                  +254 722 172 071
                </a>
                <a href="tel:+254720736314" className="hover:text-accent font-medium transition-colors">
                  +254 720 736 314
                </a>
              </div>
            </div>
          </div>

          {/* Emails Block */}
          <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-sm">
            <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-bold text-primary uppercase tracking-wider">Electronic Inboxes</span>
              <div className="flex flex-col gap-1.5 font-mono text-brand-gray">
                <a href="mailto:info@ojadvocatesllp.com" className="hover:text-accent font-medium transition-colors">
                  info@ojadvocatesllp.com
                </a>
                <a href="mailto:legal@ojadvocatesllp.com" className="hover:text-accent font-medium transition-colors">
                  legal@ojadvocatesllp.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours Block */}
          <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-sm">
            <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-bold text-primary uppercase tracking-wider">Business Operating Hours</span>
              <div className="flex flex-col gap-1 text-brand-gray">
                <span>Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</span>
                <span>Saturday &ndash; Sunday: Closed</span>
                <span className="text-[10px] text-muted italic mt-0.5">Closed on official Kenyan public holidays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-gray-100 shadow-md p-8 sm:p-10 rounded-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-serif font-bold text-primary">
              Send Case Brief
            </h3>
            <p className="text-sm text-muted leading-relaxed font-sans">
              Provide your details below to schedule an appointment. Mandatory fields are marked with an asterisk (*).
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Structured Location map guidance panel (Design Aesthetics - premium layout instead of ugly map placeholders) */}
      <section className="w-full bg-champagne/20 border-t border-champagne/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 bg-accent/15 rounded-sm flex items-center justify-center text-accent">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif text-primary font-bold">Directions to Chaka Place</h3>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-sans">
              We are located at Hurlingham at the intersection of Argwings Kodhek Road and Chaka Road. Secure visitor parking is available on the ground floor of Chaka Place.
            </p>
          </div>
          
          <div className="p-6 bg-white border border-gray-200 rounded-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              Confidentiality Notice
            </div>
            <p className="text-[11px] text-muted leading-relaxed">
              Submitting an email inquiry or contact form does not create an advocate-client relationship. Please do not send highly sensitive bank account transcripts or proprietary trade documents before a formal client representation agreement (Retainer Letter) has been signed by a partner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
