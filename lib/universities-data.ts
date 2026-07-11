export interface HighlightItem {
  title: string;
  desc: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UniversityTheme {
  primary: string;
  secondary: string;
  darkBg: string;
}

export interface UniversityData {
  id: string;
  name: string;
  logo: string;
  image: string;
  badge: string;
  bannerTitle: string;
  bannerSubtitle: string;
  coursesBullets: string[];
  coursesOptions: { value: string; label: string; disabled?: boolean; hidden?: boolean }[];
  metaTitle: string;
  metaDesc: string;
  theme: UniversityTheme;
  highlights: HighlightItem[];
  stats?: StatItem[];
  faq?: FaqItem[];
  layoutOrder: string[];
  heroVariant: "standard" | "split-form" | "centered";
  highlightsVariant: "grid" | "timeline";
  
  // Custom Dynamic CRM & UTM fallback tags
  formName: string;
  crmSource: string; // The dynamic brand source parameter (e.g. Edgewood, IIITB)
  utmSourceFallback: string;
  utmMediumFallback: string;
}

export const universitiesData: Record<string, UniversityData> = {
  iiitb: {
    id: "iiitb",
    name: "IIIT Bangalore",
    logo: "/assets/images/iiitb-logo.jpg",
    image: "/assets/images/iiitb-image.png",
    badge: "Top-Ranked Tech University",
    bannerTitle: "Accelerate Your Tech Career with IIIT Bangalore",
    bannerSubtitle: "Earn globally recognized Master of Science & Executive certifications in Data Science, Machine Learning, Applied AI, and Agentic AI.",
    coursesBullets: [
      "M.Sc. in Data Science (18 Months)",
      "M.Sc. in Machine Learning & AI (18 Months)",
      "Executive Program in Generative AI for Leaders (5 Months)",
      "EPGP in Applied AI & Agentic AI (30 Weeks)"
    ],
    coursesOptions: [
      { value: "M.Sc. in Data Science", label: "M.Sc. in Data Science" },
      { value: "M.Sc. in Machine Learning & AI", label: "M.Sc. in Machine Learning & AI" },
      { value: "Executive Programme in Generative AI for Leaders", label: "Executive Programme in Generative AI for Leaders" },
      { value: "Executive Post Graduate Programme in Applied AI and Agentic AI", label: "Executive Post Graduate Programme in Applied AI and Agentic AI" }
    ],
    metaTitle: "Online Master of Science & Executive Programs | IIIT Bangalore – SODE",
    metaDesc: "Accelerate your career in tech with Master of Science and Executive programs in Data Science, Machine Learning, Applied AI, and Agentic AI from IIIT Bangalore.",
    theme: {
      primary: "#1e3a8a",
      secondary: "#f59e0b",
      darkBg: "#0f172a"
    },
    highlights: [
      { title: "Top Tier Faculty", desc: "Learn directly from world-class university professors and seasoned technology leaders.", icon: "★" },
      { title: "Flexible Schedule", desc: "Balance learning and work with self-paced online modules combined with weekend live sessions.", icon: "⏱" },
      { title: "Alumni Network", desc: "Join a distinguished community of tech leaders and pioneers across the globe.", icon: "👥" },
      { title: "Career Boost", desc: "Get resume critique, interview mockups, and career guidance sessions from industry mentors.", icon: "💼" }
    ],
    stats: [
      { value: "18 Months", label: "Program Duration" },
      { value: "WES Evaluated", label: "Global Credential" },
      { value: "30k+", label: "Global Alumni Network" }
    ],
    faq: [
      { question: "Is this program suitable for working professionals?", answer: "Yes, the program is designed specifically for working professionals with flexible schedules, self-paced learning, and live classes on weekends." },
      { question: "What is the eligibility criteria?", answer: "A Bachelor's degree in Science, Engineering, Mathematics, or a related field with basic mathematics/programming knowledge." }
    ],
    layoutOrder: ["hero", "stats", "highlights", "lead-form", "faq"],
    heroVariant: "standard",
    highlightsVariant: "grid",
    formName: "IIIT Bangalore Form",
    crmSource: "IIITB LP",
    utmSourceFallback: "Organic-iiitb",
    utmMediumFallback: "SODE-iiitb-landing-page"
  },
  edgewood: {
    id: "edgewood",
    name: "Edgewood University",
    logo: "/assets/images/edgewood-logo.jpg",
    image: "/assets/images/edgewood-image.png",
    badge: "UGC DEB Recognized partner",
    bannerTitle: "Elevate Your Leadership with Edgewood University",
    bannerSubtitle: "Earn a globally recognized Online Doctor of Business Administration or Dual MBA + DBA degree.",
    coursesBullets: [
      "Doctor of Business Administration (24 Months)",
      "MBA + DBA Dual Degree (30 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" },
      { value: "MBA + DBA", label: "MBA + DBA" }
    ],
    metaTitle: "Online DBA & Dual MBA + DBA | Edgewood University – SODE",
    metaDesc: "Elevate your corporate leadership and management skills with an online DBA or Dual MBA + DBA from Edgewood University.",
    theme: {
      primary: "#14532d",
      secondary: "#fbbf24",
      darkBg: "#1c1917"
    },
    highlights: [
      { title: "Strategic DBA", desc: "Gain critical problem-solving and business research skills suitable for executive leadership roles.", icon: "♛" },
      { title: "Dual Master + Doctorate", desc: "Save time and cost with a combined MBA + DBA program track.", icon: "⚡" },
      { title: "Accredited Degree", desc: "Accredited degrees highly valued in international markets and universities.", icon: "✔" },
      { title: "Global Peer Cohort", desc: "Interact with senior managers and business heads from different sectors.", icon: "🌐" }
    ],
    stats: [
      { value: "24-30 Months", label: "Flexible Timeline" },
      { value: "UGC DEB Partner", label: "Recognized Format" },
      { value: "No Entrance Exam", label: "Easy Admission Track" }
    ],
    faq: [
      { question: "What is the dual MBA + DBA degree program?", answer: "This program enables you to complete both a Master of Business Administration and a Doctor of Business Administration sequentially, accelerating your academic goals." },
      { question: "Is the degree valid internationally?", answer: "Yes, Edgewood degrees are recognized internationally for corporate leadership and academic pathways." }
    ],
    layoutOrder: ["hero", "stats", "highlights", "faq"],
    heroVariant: "split-form",
    highlightsVariant: "grid",
    formName: "Edgewood University Form",
    crmSource: "Edgewood LP",
    utmSourceFallback: "Organic-edgewood",
    utmMediumFallback: "SODE-edgewood-landing-page"
  },
  esgci: {
    id: "esgci",
    name: "ESGCI Paris",
    logo: "/assets/images/esgci-logo.jpg",
    image: "/assets/images/esgci-image.png",
    badge: "Prestigious French Business School",
    bannerTitle: "Advance to Executive Leadership with ESGCI Paris",
    bannerSubtitle: "Pursue an elite Doctor of Business Administration (DBA) designed for senior professionals.",
    coursesBullets: [
      "Doctor of Business Administration (24 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" }
    ],
    metaTitle: "Online Doctor of Business Administration | ESGCI Paris – SODE",
    metaDesc: "Earn a globally recognized Doctor of Business Administration (DBA) from ESGCI Paris and boost your executive career.",
    theme: {
      primary: "#1e40af",
      secondary: "#fbbf24",
      darkBg: "#1f2937"
    },
    highlights: [
      { title: "French State Recognized", desc: "Graduate from an elite, state-recognized business school in Paris.", icon: "🇫🇷" },
      { title: "1-on-1 Mentorship", desc: "Work closely with senior professors and thesis supervisors from Europe.", icon: "✍" },
      { title: "Strategic DBA", desc: "Designed for business owners, executives, and senior consultants.", icon: "🎯" },
      { title: "No Campus Visit Required", desc: "Complete your coursework and thesis defense 100% online.", icon: "💻" }
    ],
    stats: [
      { value: "24 Months", label: "Fast-Track DBA" },
      { value: "State Recognized", label: "European Quality" },
      { value: "100% Online", label: "Self-Paced Format" }
    ],
    layoutOrder: ["hero", "stats", "highlights", "lead-form"],
    heroVariant: "standard",
    highlightsVariant: "timeline",
    formName: "ESGCI Paris Form",
    crmSource: "ESGCI LP",
    utmSourceFallback: "Organic-esgci",
    utmMediumFallback: "SODE-esgci-landing-page"
  },
  rushford: {
    id: "rushford",
    name: "Rushford University",
    logo: "/assets/images/rushford-logo.jpg",
    image: "/assets/images/rushford-image.png",
    badge: "Swiss Quality Education",
    bannerTitle: "Achieve Global Recognition with Rushford University",
    bannerSubtitle: "Earn a world-class Online Doctor of Business Administration (DBA) to lead strategic transformation.",
    coursesBullets: [
      "Doctor of Business Administration (36 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" }
    ],
    metaTitle: "Online Doctor of Business Administration | Rushford University – SODE",
    metaDesc: "Build research-driven strategy capabilities with an online Doctor of Business Administration (DBA) from Rushford University.",
    theme: {
      primary: "#2563eb",
      secondary: "#f59e0b",
      darkBg: "#0f172a"
    },
    highlights: [
      { title: "Swiss Quality", desc: "Benefit from Switzerland's premium standard of business and management education.", icon: "✙" },
      { title: "EduQua Certified", desc: "Certified under the Swiss quality label for adult educational institutions.", icon: "🛡" },
      { title: "Research Practice", desc: "Solve real-world corporate issues with research-oriented dissertation tools.", icon: "🔎" },
      { title: "Global Careers", desc: "Highly valued in multinationals, consulting firms, and public sectors.", icon: "🚀" }
    ],
    stats: [
      { value: "36 Months", label: "Dissertation Format" },
      { value: "Swiss Quality", label: "EduQua Certified" },
      { value: "100%", label: "Online Thesis Defense" }
    ],
    layoutOrder: ["hero", "stats", "highlights"],
    heroVariant: "split-form",
    highlightsVariant: "grid",
    formName: "Rushford University Form",
    crmSource: "Rushford LP",
    utmSourceFallback: "Organic-rushford",
    utmMediumFallback: "SODE-rushford-landing-page"
  },
  ggu: {
    id: "ggu",
    name: "Golden Gate University",
    logo: "/assets/images/ggu-logo.jpg",
    image: "/assets/images/ggu-image.png",
    badge: "Elite US University Since 1901",
    bannerTitle: "Accelerate Global Leadership with Golden Gate University",
    bannerSubtitle: "Earn a prestigious online Master of Business Administration or Doctor of Business Administration.",
    coursesBullets: [
      "Doctor of Business Administration (27 Months)",
      "Master of Business Administration (13 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" },
      { value: "Master of Business Administration", label: "Master of Business Administration" }
    ],
    metaTitle: "Online MBA & Doctor of Business Administration | GGU San Francisco – SODE",
    metaDesc: "Scale your career in leadership and business management with an online MBA or DBA from Golden Gate University, San Francisco.",
    theme: {
      primary: "#0b3c5d",
      secondary: "#d9b310",
      darkBg: "#1d2731"
    },
    highlights: [
      { title: "Founded in 1901", desc: "Earn a degree from a top-tier institution based in San Francisco, California.", icon: "🇺🇸" },
      { title: "WASC Accredited", desc: "Accredited by the WASC Senior College and University Commission.", icon: "★" },
      { title: "WES Recognized", desc: "WES recognized degrees, easing immigration and global employment pathing.", icon: "✈" },
      { title: "Designed for Leaders", desc: "Dynamic curriculum focused on innovation, digital strategy, and AI-era leadership.", icon: "♟" }
    ],
    stats: [
      { value: "120+ Years", label: "Academic Heritage" },
      { value: "WASC", label: "US Accreditation" },
      { value: "13-27 Months", label: "Accelerated Tracks" }
    ],
    layoutOrder: ["hero", "stats", "highlights", "lead-form"],
    heroVariant: "centered",
    highlightsVariant: "grid",
    formName: "Golden Gate University Form",
    crmSource: "GGU LP",
    utmSourceFallback: "Organic-ggu",
    utmMediumFallback: "SODE-ggu-landing-page"
  },
  ssbm: {
    id: "ssbm",
    name: "SSBM Geneva",
    logo: "/assets/images/ssbm-logo.jpg",
    image: "/assets/images/ssbm-image.png",
    badge: "Global Swiss School of Business",
    bannerTitle: "Swiss Excellence in Management with SSBM Geneva",
    bannerSubtitle: "Pursue a globally recognized Online DBA or Swiss Master of Business Administration (MBA).",
    coursesBullets: [
      "Doctor of Business Administration (36 Months)",
      "Master of Business Administration (18 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" },
      { value: "Master of Business Administration", label: "Master of Business Administration" }
    ],
    metaTitle: "Online MBA & Doctor of Business Administration | SSBM Geneva – SODE",
    metaDesc: "Advance your career with a world-class online Swiss MBA or Doctor of Business Administration (DBA) from SSBM Geneva.",
    theme: {
      primary: "#991b1b",
      secondary: "#d97706",
      darkBg: "#111827"
    },
    highlights: [
      { title: "Swiss Quality Education", desc: "State-of-the-art business curriculum certified under Swiss excellence standards.", icon: "✙" },
      { title: "ACBSP Candidate", desc: "ACBSP programmatic business accreditation candidate status.", icon: "🏆" },
      { title: "Flexible Formats", desc: "Learn from anywhere in the world on a fully customizable, interactive LMS.", icon: "📡" },
      { title: "Alumni in 100+ Countries", desc: "Connect with global working professionals in SSBM's vast network.", icon: "👥" }
    ],
    stats: [
      { value: "ACBSP", label: "Business Accreditation" },
      { value: "Swiss Quality", label: "LMS and Exams" },
      { value: "18-36 Months", label: "Program Format" }
    ],
    layoutOrder: ["hero", "stats", "highlights", "lead-form"],
    heroVariant: "centered",
    highlightsVariant: "timeline",
    formName: "SSBM Geneva Form",
    crmSource: "SSBM LP",
    utmSourceFallback: "Organic-ssbm",
    utmMediumFallback: "SODE-ssbm-landing-page"
  },
  liverpool: {
    id: "liverpool",
    name: "Liverpool Business School",
    logo: "/assets/images/liverpool-logo.png",
    image: "/assets/images/liverpool-image.png",
    badge: "Prestigious UK Business School",
    bannerTitle: "Earn a British MBA from Liverpool Business School",
    bannerSubtitle: "Build global management and strategic leadership capability with a top-tier UK MBA.",
    coursesBullets: [
      "Master of Business Administration (18 Months)"
    ],
    coursesOptions: [
      { value: "Master of Business Administration", label: "Master of Business Administration" }
    ],
    metaTitle: "Online British MBA | Liverpool Business School – SODE",
    metaDesc: "Accelerate your growth into leadership roles with an online MBA degree from Liverpool Business School, United Kingdom.",
    theme: {
      primary: "#0369a1",
      secondary: "#e11d48",
      darkBg: "#0f172a"
    },
    highlights: [
      { title: "Top UK Business School", desc: "Liverpool Business School is recognized as a leader in business studies.", icon: "🇬🇧" },
      { title: "WES Evaluated", desc: "WES evaluation status, easing global immigration and qualification equivalencies.", icon: "🛡" },
      { title: "British Degree", desc: "Graduate with an authentic UK Master of Business Administration.", icon: "🎓" },
      { title: "Managerial Skills", desc: "Develop advanced skills in finance, marketing, strategy, and change management.", icon: "📈" }
    ],
    stats: [
      { value: "18 Months", label: "Duration" },
      { value: "WES Evaluated", label: "Global Status" },
      { value: "UK MBA", label: "British Credential" }
    ],
    layoutOrder: ["hero", "stats", "highlights", "lead-form"],
    heroVariant: "standard",
    highlightsVariant: "grid",
    formName: "Liverpool Business School Form",
    crmSource: "Liverpool LP",
    utmSourceFallback: "Organic-liverpool",
    utmMediumFallback: "SODE-liverpool-landing-page"
  },
  iimk: {
    id: "iimk",
    name: "IIM Kozhikode",
    logo: "/assets/images/iim-logo.jpg",
    image: "/assets/images/iim-image.png",
    badge: "Top-Tier Indian Institute of Management",
    bannerTitle: "Elevate HR Strategy with IIM Kozhikode",
    bannerSubtitle: "Gain analytics expertise with the Professional Certificate Programme in HR Management and Analytics.",
    coursesBullets: [
      "Professional Certificate Programme in HR Management & Analytics (6 Months)"
    ],
    coursesOptions: [
      { value: "Professional Certificate Programme in HR Management and Analytics", label: "Professional Certificate Programme in HR Management and Analytics" }
    ],
    metaTitle: "IIM Kozhikode HR Management & Analytics Certification | SODE",
    metaDesc: "Drive data-driven HR strategies with the professional certificate program in HR Management and Analytics from IIM Kozhikode.",
    theme: {
      primary: "#7f1d1d",
      secondary: "#f59e0b",
      darkBg: "#18181b"
    },
    highlights: [
      { title: "Top 3 NIRF Ranking", desc: "Ranked among the premier management institutions in India.", icon: "🏛" },
      { title: "HR Analytics Focus", desc: "Equip yourself with data-driven recruitment, retention, and workforce analytics.", icon: "⚙" },
      { title: "Executive Education", desc: "Specialist programme designed for HR managers and team leaders.", icon: "👥" },
      { title: "Alumni Status", desc: "Interact with senior managers and get direct access to executive workshops.", icon: "🎓" }
    ],
    stats: [
      { value: "6 Months", label: "Fast-Track Certificate" },
      { value: "NIRF Top 3", label: "IIM Excellence" },
      { value: "3+ Years Exp", label: "Target Audience Eligibility" }
    ],
    layoutOrder: ["hero", "stats", "highlights"],
    heroVariant: "split-form",
    highlightsVariant: "grid",
    formName: "IIM Kozhikode Form",
    crmSource: "IIMK LP",
    utmSourceFallback: "Organic-iimk",
    utmMediumFallback: "SODE-iimk-landing-page"
  }
};

export const universityIds = Object.keys(universitiesData);

export function getUniversityData(id: string): UniversityData | undefined {
  return universitiesData[id.toLowerCase()];
}
