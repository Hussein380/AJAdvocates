"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    label: "Legal Services",
    href: "/practice-areas",
    dropdownItems: [
      { label: "Corporate and Commercial Law", href: "/practice-areas#corporate-commercial-law" },
      { label: "Litigation and Dispute Resolution", href: "/practice-areas#litigation-dispute-resolution" },
      { label: "Intellectual Property", href: "/practice-areas#intellectual-property" },
      { label: "Employment and Labor Law", href: "/practice-areas#employment-labour-law" },
      { label: "Real Estate and Property Law", href: "/practice-areas#real-estate-property-law" },
      { label: "Family Law", href: "/practice-areas#family-law" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    dropdownItems: [
      { label: "Our Story & History", href: "/about#history" },
      { label: "Our People", href: "/team" },
      { label: "Service Charter", href: "/about#service-charter" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4"
        )}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48 h-10 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/logo.webp"
                alt="OJ Advocates LLP"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 192px, 240px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdownItems;
              const isActive = pathname.startsWith(link.href);

              return (
                <div
                  key={link.label}
                  className="relative group/dropdown"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 text-base font-medium tracking-wide uppercase transition-colors duration-200 pb-1 border-b-2 border-transparent",
                      isActive
                        ? "text-accent border-accent"
                        : "text-primary hover:text-accent"
                    )}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-md shadow-lg py-2 transition-all duration-200 z-50 origin-top-left",
                        activeDropdown === link.label
                          ? "opacity-100 scale-100 translate-y-0 visible"
                          : "opacity-0 scale-95 -translate-y-2 invisible"
                      )}
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-secondary hover:bg-champagne/40 hover:text-accent transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors duration-300 shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+254722172071"
              className="p-2 text-primary hover:text-accent transition-colors duration-200"
              aria-label="Call OJ Advocates"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary hover:text-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[65px] bg-secondary/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={cn(
          "fixed top-[65px] right-0 bottom-0 w-80 max-w-sm bg-white shadow-xl z-40 p-6 flex flex-col gap-6 transition-transform duration-300 ease-out md:hidden border-l border-gray-100",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-5 overflow-y-auto flex-1 pr-2">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdownItems;
            const isDropdownOpen = activeDropdown === link.label;

            return (
              <div key={link.label} className="border-b border-gray-50 pb-3">
                {hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full text-base font-semibold tracking-wide uppercase text-primary hover:text-accent"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isDropdownOpen && "rotate-180 text-accent"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-200 overflow-hidden",
                        isDropdownOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden flex flex-col gap-2.5 pl-3 border-l-2 border-champagne">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-muted hover:text-accent transition-colors py-1"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-semibold tracking-wide uppercase text-primary hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-primary hover:bg-accent text-white text-sm font-semibold uppercase tracking-widest py-3 rounded-sm transition-colors duration-300"
          >
            Request Consultation
          </Link>
          <div className="text-center text-sm text-muted font-medium">
            Call: +254 722 172 071
          </div>
        </div>
      </div>
    </>
  );
}
