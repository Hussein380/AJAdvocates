import { PracticeArea } from "../types";

const practiceAreas: PracticeArea[] = [
  {
    id: "corporate-commercial-law",
    title: "Corporate and Commercial Law",
    slug: "corporate-commercial-law",
    icon: "Briefcase",
    excerpt: "Assisting with domestic and cross-border corporate transactions, regulatory compliance, and business formations.",
    description: "Working closely with our clients and partner international firms to assist in domestic and cross-border corporate transactions.",
    content: [
      {
        type: "paragraph",
        children: "At OJ Advocates LLP, our Corporate and Commercial Law department provides comprehensive advisory services for business operations. We guide our clients through complex regulatory environments, mergers and acquisitions, joint ventures, and capital raising."
      },
      {
        type: "paragraph",
        children: "We partner with leading international law firms to offer seamless cross-border legal support, ensuring your international business dealings are handled with professional legal counsel at every step."
      }
    ],
    relatedAdvocates: ["joel-nyamumbo", "gavin-castro", "joseph-karanja"]
  },
  {
    id: "litigation-dispute-resolution",
    title: "Litigation and Dispute Resolution",
    slug: "litigation-dispute-resolution",
    icon: "Gavel",
    excerpt: "Experienced representation to resolve high stakes civil and commercial disputes in courts and arbitral tribunals.",
    description: "Experienced experts with depth and geographical scope to assist you resolve high stakes disputes across different levels of operation.",
    content: [
      {
        type: "paragraph",
        children: "Our litigation practice covers commercial disputes, civil claims, tax controversies, and public administrative litigation. We emphasize achieving strategic business outcomes, whether through proactive mediation or representation in court."
      }
    ],
    relatedAdvocates: ["joel-nyamumbo", "mursal-hajj-ali", "mike-mwangi"]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    slug: "intellectual-property",
    icon: "Copyright",
    excerpt: "Advising and protecting trademarks, copyrights, patents, and trade secrets to secure your intellectual assets.",
    description: "Advising and protecting trademarks, copyrights, patents, trade secrets, and other rights to secure your intellectual property assets.",
    content: [
      {
        type: "paragraph",
        children: "We assist creators, startups, and corporations in filing and protecting trademarks, copyright enforcement, patent registrations, and drafting non-disclosure/trade secret agreements."
      }
    ],
    relatedAdvocates: ["gavin-castro", "joseph-karanja", "michelle-bosire"]
  },
  {
    id: "employment-labour-law",
    title: "Employment and Labor Law",
    slug: "employment-labour-law",
    icon: "UserCheck",
    excerpt: "Helping employers navigate labor relations, contracts, benefit schemes, and employee dispute resolutions.",
    description: "Helping Employers navigate matters arising from employment relationships, and managing the laws and regulations that impact their daily operations.",
    content: [
      {
        type: "paragraph",
        children: "We work with human resource managers and corporate boards to design employment contracts, HR policies, employee share ownership plans (ESOPs), and represent clients in industrial court disputes."
      }
    ],
    relatedAdvocates: ["joseph-karanja", "mike-mwangi"]
  },
  {
    id: "real-estate-property-law",
    title: "Real Estate and Property Law",
    slug: "real-estate-property-law",
    icon: "Building",
    excerpt: "Guiding clients through property transactions, leasing, zoning compliance, and real estate investment structures.",
    description: "Guiding you through complex real estate-related transactions, to enable you maintain or increase the value and usefulness of your real estate assets and investments.",
    content: [
      {
        type: "paragraph",
        children: "Our real estate team covers conveyancing, long-term commercial leases, subdivision approvals, property development financing, and structural joint ventures for estate planning."
      }
    ],
    relatedAdvocates: ["joel-nyamumbo", "mursal-hajj-ali", "michelle-bosire"]
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    icon: "Users",
    excerpt: "Compassionate and structured counsel in estate administration, probate, divorce, custody, and family disputes.",
    description: "Representing and providing you with advice and counsel to successfully navigate the legal issues that affect all areas of family life.",
    content: [
      {
        type: "paragraph",
        children: "We handle sensitive family matters with discretion and legal rigor, advising on matrimonial property agreements, probate litigation, succession planning, and child custody arrangements."
      }
    ],
    relatedAdvocates: ["mursal-hajj-ali", "michelle-bosire"]
  }
];

export async function getPracticeAreas(): Promise<PracticeArea[]> {
  // Simulate network delay for future-proofing
  return new Promise((resolve) => {
    resolve(practiceAreas);
  });
}

export async function getPracticeAreaBySlug(slug: string): Promise<PracticeArea | undefined> {
  return new Promise((resolve) => {
    resolve(practiceAreas.find((area) => area.slug === slug));
  });
}
