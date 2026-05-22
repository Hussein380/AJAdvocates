import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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

// Inline X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-6">
            <div className="relative w-56 h-12 bg-white/5 p-2 rounded-sm">
              <Image
                src="/assets/logo-full-colour.png"
                alt="OJ Advocates LLP Logo"
                fill
                className="object-contain p-1"
                sizes="224px"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              OJ Advocates LLP is a premier legal advisory firm based in Nairobi, committed to delivering precision, integrity, and positive goal-oriented results for corporate, government, and private clients.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/oj-advocates-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-accent text-gray-300 hover:text-white rounded-full transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/ojadvocatesllp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-accent text-gray-300 hover:text-white rounded-full transition-colors duration-200"
                aria-label="Twitter X Profile"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Legal Services */}
          <div>
            <h3 className="text-base font-semibold tracking-widest text-accent uppercase mb-6">
              Legal Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Corporate & Commercial Law", href: "/practice-areas#corporate-commercial-law" },
                { label: "Litigation & Dispute Resolution", href: "/practice-areas#litigation-dispute-resolution" },
                { label: "Intellectual Property", href: "/practice-areas#intellectual-property" },
                { label: "Employment & Labor Law", href: "/practice-areas#employment-labour-law" },
                { label: "Real Estate & Property Law", href: "/practice-areas#real-estate-property-law" },
                { label: "Family Law", href: "/practice-areas#family-law" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Firm Links */}
          <div>
            <h3 className="text-base font-semibold tracking-widest text-accent uppercase mb-6">
              The Firm
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Our Story", href: "/about#history" },
                { label: "Our Professionals", href: "/team" },
                { label: "Service Charter", href: "/about#service-charter" },
                { label: "Careers", href: "/careers" },
                { label: "Blog Insights", href: "/blog" },
                { label: "Get In Touch", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contacts */}
          <div>
            <h3 className="text-base font-semibold tracking-widest text-accent uppercase mb-6">
              Office Locations
            </h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Chaka Place, 1st Floor,<br />
                  Argwings Kodhek Road, Hurlingham,<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+254722172071" className="hover:text-white transition-colors">
                    +254 722 172 071
                  </a>
                  <a href="tel:+254720736314" className="hover:text-white transition-colors">
                    +254 720 736 314
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@ojadvocatesllp.com" className="hover:text-white transition-colors">
                    info@ojadvocatesllp.com
                  </a>
                  <a href="mailto:legal@ojadvocatesllp.com" className="hover:text-white transition-colors">
                    legal@ojadvocatesllp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="text-gray-500 text-[11px] leading-relaxed max-w-2xl md:text-left">
            <p className="mb-1">
              &copy; {currentYear} OJ Advocates LLP. All rights reserved. Registered P.O. Box 76683-00508, Nairobi, Kenya.
            </p>
            <p>
              Disclaimer: The materials on this website are provided for informational purposes only and do not constitute formal legal advice. Accessing or using this website does not establish an advocate-client relationship.
            </p>
          </div>
          <div className="text-gray-400 text-sm font-semibold tracking-wider font-serif">
            INTEGRITY &middot; PRECISION &middot; RESULTS
          </div>
        </div>

      </div>
    </footer>
  );
}
