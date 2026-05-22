import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | OJ Advocates LLP",
  description: "Privacy policy and data protection guidelines for OJ Advocates LLP.",
};

export default function PrivacyPolicyPage() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <Shield className="w-8 h-8 text-accent mb-2" />
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-accent uppercase">
            Data Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full bg-champagne/20 border-b border-champagne/45 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted flex gap-2 items-center">
          <Link href="/" className="hover:text-accent font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Privacy Policy</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-sm sm:prose-base prose-slate max-w-none text-brand-gray font-sans space-y-8">
          
          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Information You Provide to Us</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us. For example, we collect information when you interact with us as a client or prospective or former client, create an account to access certain features of the Services, access or use any collaboration tools or participate in any interactive feature of the Services, send us an email, fill out a form, respond to a survey, comment on a blog, register for an event, apply for a job, interact with us on social media, enter a promotional drawing or otherwise communicate with us. The types of information we may collect include your name, username and password, postal address, email address, phone number, current occupation and business contact information, social security number, employment application information (including education and work history), social media username or handle, demographic information, preferences, state bar number and any other information you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Information About Your Use of the Services</h2>
            <p className="leading-relaxed mb-4">
              When you access or use the Services, we automatically collect certain information about you, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li><strong className="text-primary">Log Information:</strong> We collect log information about your use of the Services, including your browser type and language, app version, access time, pages viewed, Internet Protocol (“IP”) address, approximate geographic location, and the web page or online service you visited before navigating to the Services.</li>
              <li><strong className="text-primary">Device Information:</strong> We collect information about the mobile device you use to access our mobile applications, including the hardware model, operating system and version, unique device identifiers and mobile network information.</li>
              <li><strong className="text-primary">Information Collected by Cookies and Other Tracking Technologies:</strong> We and our service providers use various technologies to collect information, including cookies and web beacons (or pixel tags). Cookies are small data files stored on your hard drive or in device memory that help us to, among other things, improve the Services and your experience, see which areas and features of the Services are popular and count visits. Web beacons are clear, electronic images that may be used on the Services or in our emails and help deliver cookies, count visits, understand usage and campaign effectiveness and determine if an email has been opened and acted upon.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Information We Collect from Other Sources</h2>
            <p className="leading-relaxed">
              We may also obtain information from other sources and combine that with information we collect through the Services. For example, we may use information from LinkedIn to update information about you in our contact database.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Use of Information</h2>
            <p className="leading-relaxed mb-4">We use information about you for various purposes, including to:</p>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Operate and improve the Services;</li>
              <li>Provide legal services;</li>
              <li>Respond to your questions, comments and requests;</li>
              <li>Provide the information or services you request and send you related information, including confirmations and receipts;</li>
              <li>Communicate with you about products, services, offers, promotions, rewards and events offered by OJ LLP or others we think will be of interest to you;</li>
              <li>Assess job applicants and make hiring decisions;</li>
              <li>Monitor and analyze usage, trends and activities related to the Services;</li>
              <li>Manage your online account(s) and send you technical notices, updates, security alerts, and support and administrative messages; and</li>
              <li>Notify you about any changes to the Services.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We may process and store information about you in the Republic of Kenya and other countries, which may have fewer protective data protection laws than the region in which you are situated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Sharing of Information</h2>
            <p className="leading-relaxed mb-4">We may share information about you as follows or as otherwise described in this policy:</p>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>With vendors, consultants, and other service providers who are working on our behalf and need access to your information to carry out their work for us;</li>
              <li>In connection with, or during negotiations of, any merger, sale of OJ LLP assets, financing or acquisition of all or a portion of our business to another company; and</li>
              <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements;</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property and safety of us or any third party;</li>
              <li>For users of our collaboration site, your name and contact information and any content or materials you submit or post to that site may be shared with other users of the collaboration site; and</li>
              <li>With your consent or at your direction, including if we notify you that the information you provide will be shared in a particular manner and you provide such information.</li>
            </ul>
            <p className="leading-relaxed mt-4">We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.</p>
            <p className="leading-relaxed mt-2">Please note that information you post in your profile, blogs, listings, public or private groups, forums and any other interactive areas of the Services will be available to other users of those features and, in some cases, may be publicly available.</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Links to Other Websites and Third-Party Content</h2>
            <p className="leading-relaxed mb-4">
              We may provide links to or embed videos hosted by third-party websites, services, and applications, such as LinkedIn, X (formerly Twitter), that are not operated or controlled by OJ LLP. This Privacy Policy does not apply to third-party services, and we cannot take responsibility for the content, privacy policies, or practices of third-party services. We encourage you to review the privacy policies of any third-party service before providing any information to or through them.
            </p>
            <p className="leading-relaxed">
              The Services may include any activity feed, social media buttons and widgets, such as the LinkedIn “like” button or the “Share This” button. Your interactions with these features are governed by the privacy policy of the third-party service that provides the feature.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Data Retention & Account Information</h2>
            <p className="leading-relaxed mb-4">
              We store the information we collect about you for as long as is necessary for the purpose(s) for which we collected it and in accordance with our legal obligations and legitimate business interests.
            </p>
            <p className="leading-relaxed">
              You may update, correct or delete your online account information at any time by logging into your account. If you delete any account information, we may retain certain information as required by law or for legitimate business purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Promotional Communications</h2>
            <p className="leading-relaxed">
              You may opt out of receiving marketing or promotional emails from us by following the instructions in those emails. Please note that if you opt out of receiving promotional emails, we may still send you non-promotional communications, such as those about your account on our ongoing business relations.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
