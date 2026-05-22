import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Mail,
  Scale
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [];

export default function CareersPage() {
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
            Careers
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            Join OJ Advocates LLP
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            Build your legal career at a progressive, values-driven law firm alongside leading corporate partners.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Careers</span>
        </div>
      </div>

      {/* Recruitment philosophy */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col gap-5">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
            Fostering Precision and Professional Integrity
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-sans">
            At OJ Advocates LLP, we believe that exceptional legal service is driven by exceptional minds. We foster an environment of continuous learning, professional accountability, and direct client exposure from early stages.
          </p>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-sans">
            We value advocates who bring technical legal rigour, commercial awareness, and absolute integrity to client files. In return, we support career path progressions and training retrain modules.
          </p>
        </div>
        
        <div className="md:col-span-5 bg-champagne/20 border border-champagne/45 p-6 rounded-sm flex flex-col gap-4">
          <Scale className="w-8 h-8 text-accent" />
          <h3 className="text-lg font-serif font-bold text-primary">Pupillage Calendar</h3>
          <p className="text-base text-brand-gray leading-relaxed">
            Applications for our ATP Pupillage program close on **31st October** annually. Selected candidates will begin their 12-month rotation starting in January of the following year.
          </p>
        </div>
      </section>

      {/* Current Vacancies Listing */}
      <section className="w-full bg-gray-50/40 border-y border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
              Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-2">
              Active Vacancies
            </h2>
          </div>

          {jobOpenings.length > 0 ? (
            <div className="flex flex-col gap-8">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white border border-gray-100 shadow-sm p-6 sm:p-8 rounded-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-6"
                >
                  {/* Job Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 pb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{job.department}</span>
                      <h3 className="text-lg font-serif font-bold text-primary">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-muted font-semibold tracking-wider uppercase shrink-0">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="flex flex-col gap-3">
                    <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-sans">{job.description}</p>
                    <div className="mt-2 flex flex-col gap-2">
                      <span className="text-sm text-primary font-bold uppercase tracking-wider">Candidate Requirements:</span>
                      <ul className="flex flex-col gap-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-base text-brand-gray font-sans">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 rounded-sm bg-gray-50/50 max-w-3xl mx-auto w-full">
              <Briefcase className="w-8 h-8 text-brand-gray/40 mb-4" />
              <h2 className="text-xl font-serif text-primary font-semibold mb-2">No Open Vacancies</h2>
              <p className="text-base sm:text-lg text-brand-gray max-w-md">We do not have any open positions at the moment. Please check back later or send your CV for future consideration.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Instructions */}
      <section className="w-full py-20 max-w-4xl mx-auto px-4 text-center flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
            How To Apply
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Submit Your Application Brief
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed font-sans max-w-xl mx-auto">
            Interested candidates who match our requirements should submit a comprehensive CV, cover letter, and certified copies of academic transcripts (LL.B, KSL certificate) in PDF format.
          </p>
        </div>

        <div className="p-6 bg-champagne/20 border border-champagne/45 rounded-sm flex flex-col sm:flex-row gap-6 items-center w-full max-w-lg justify-center font-sans">
          <Mail className="w-8 h-8 text-accent shrink-0" />
          <div className="text-left flex flex-col gap-1 text-sm">
            <span className="font-bold text-primary uppercase tracking-wider">Send Applications To</span>
            <a href="mailto:info@ojadvocatesllp.com" className="text-accent font-semibold hover:text-accent-hover font-mono text-base">
              info@ojadvocatesllp.com
            </a>
            <span className="text-[10px] text-muted mt-0.5">Please indicate the position title in the email subject.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
