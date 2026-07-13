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

export interface CourseOffer {
  title: string;
  duration: string;
  desc: string;
  img: string;
  pdf: string;
}

export interface ApprovalItem {
  title: string;
  desc: string;
  image: string;
}

export interface WhyChooseCard {
  title: string;
  desc: string;
  image: string;
  variant: "dark" | "light";
}

export interface ApplyStep {
  number: number;
  title: string;
  desc: string;
  colorClass: string;
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

  // Premium Landing Page Custom Fields
  aboutTitle?: string;
  aboutDesc?: string;
  aboutImage?: string;
  certificateTitle?: string;
  certificateDesc?: string;
  certificateImage?: string;
  coursesList?: CourseOffer[];
  approvalsList?: ApprovalItem[];
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseItems?: WhyChooseCard[];
  applyStepsList?: ApplyStep[];
  heroBgDesktop?: string;
  heroBgMobile?: string;
  specialisations?: { title: string; desc: string; image: string }[];
  outcomesList?: { title: string; desc: string; image?: string }[];
  heroTitleHtml?: string;
  bannerPartner?: string;
  heroBullets?: string[];
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
    utmMediumFallback: "SODE-iiitb-landing-page",
    aboutTitle: "About IIIT Bangalore \nOnline Courses",
    aboutDesc: "IIIT Bangalore is a premier technology institute established in 1998, known for industry-focused education and strong academic depth. Its IIIT Bangalore online courses are designed for working professionals, combining academic rigor with real-world application. The institute offers carefully structured IIIT Bangalore certification courses in emerging technology domains, supported by expert faculty and industry mentors. Learners gain practical exposure through projects, case studies, and capstones that align skills with current business and technology needs.",
    aboutImage: "/iiitb/assets/img/iiit-b-about-image.webp",
    certificateTitle: "Sample Post \nGraduate Certificate",
    certificateDesc: "The students who have completed their IIIT Bangalore Online courses will receive two certificates from Microsoft. The student gets to learn multiple tools, which will allow them to get the upgrade they need in their professional journey. IIIT Bangalore also offers special IIM Udaipur artificial intelligence courses that allow students to earn a dual degree.",
    certificateImage: "/iiitb/assets/img/sample-certificate.webp",
    coursesList: [
      {
        title: "Executive Programme in Generative AI for Leaders",
        duration: "20 weeks",
        desc: "IIIT Bangalore online courses help leaders learn GenAI strategy and adoption using the A.D.A.P.T. Framework, with real business use cases, a capstone, and executive-level outcomes.",
        img: "/iiitb/assets/img/course-1.webp",
        pdf: "/iiitb/assets/img/Executive_Program_in_Generative_AI_for_Leaders.pdf"
      },
      {
        title: "Executive Post Graduate Certificate Programme in Data Science & AI",
        duration: "25 weeks",
        desc: "IIIT Bangalore online courses build skills in IIIT Bangalore data science and IIIT Bangalore artificial intelligence through statistics, ML, deep learning, projects, and mentorship.",
        img: "/iiitb/assets/img/course-2.webp",
        pdf: "/iiitb/assets/img/IIITB_EPGC_DS_AI.pdf"
      },
      {
        title: "Professional Certificate Programme in Data Science with Generative AI",
        duration: "24 weeks",
        desc: "IIIT Bangalore online courses deliver an IIIT Bangalore data science course in analytics, ML pipelines, and GenAI, with labs, real datasets, hands-on projects, and portfolio support.",
        img: "/iiitb/assets/img/course-3.webp",
        pdf: "/iiitb/assets/img/PCP_in_DS_26_Gen_AI_with_IIIT_B.pdf"
      },
      {
        title: "Executive Post Graduate Programme in Applied AI and Agentic AI",
        duration: "30 weeks",
        desc: "IIIT Bangalore certification courses cover applied AI, agents, RAG, and automation, strengthening IIIT Bangalore's artificial intelligence skills through assignments.",
        img: "/iiitb/assets/img/course-4.webp",
        pdf: "/iiitb/assets/img/Applied_AI_and_Agentic_AI-4.pdf"
      },
      {
        title: "Executive Diploma in Machine Learning & Artificial Intelligence",
        duration: "28 weeks",
        desc: "IIIT Bangalore's online courses offer advanced ML, MLOps, deep learning, and GenAI modules, making them ideal certification courses for working professionals who are seeking strong career growth.",
        img: "/iiitb/assets/img/course-5.webp",
        pdf: "/iiitb/assets/img/IIITB_ED_ML.pdf"
      },
      {
        title: "Chief Technology Officer & AI Leadership Programme",
        duration: "24 weeks",
        desc: "Powered by IIM Udaipur, the online course offer detail skills on CTO AI leadership in DBA, covering tech strategy, governance. The IIM Udaipur artificial intelligence offers a skill to prepare student future leadership.",
        img: "/iiitb/assets/img/iiim-udaipur.webp",
        pdf: "/iiitb/assets/img/CTOAI_leadership_program.pdf"
      },
      {
        title: "Master of Science in Machine Learning & Artificial Intelligence",
        duration: "28 weeks",
        desc: "IIIT Bangalore's MS in Machine Learning & AI offers double accreditation (IIIT Bangalore + LJMU, UK) covering advanced ML, deep learning, and Generative AI with 80+ tools. Ideal for working professionals, achieving up to 433% salary hikes.",
        img: "/iiitb/assets/img/new-image1.webp",
        pdf: "/iiitb/assets/img/new-brochure2.pdf"
      },
      {
        title: "Master of Science in Data Science Now integrated with Generative AI",
        duration: "28 weeks",
        desc: "LJMU MSc Data Science (upGrad & IIITB): 18-21 months online, GenAI with MLOps, 100+ tools, Data Analysis/Engineering tracks, bootcamp-to-dissertation, Hands-on Learning with 30+ Domain-Focused Assignments and Case Studies.",
        img: "/iiitb/assets/img/new-image2.webp",
        pdf: "/iiitb/assets/img/new-brochure1.pdf"
      }
    ],
    approvalsList: [
      {
        title: "NAAC A+",
        desc: "The IIIT Bangalore certificate courses have an A+ grade, which proves that the institute offers quality learning outcomes for professionals.",
        image: "/iiitb/assets/img/naac-a-iiit.webp"
      },
      {
        title: "UGC",
        desc: "This recognition confirms the institute's credibility and supports trust in online credentials.",
        image: "/iiitb/assets/img/ugc-iiit.webp"
      },
      {
        title: "AICTE",
        desc: "It makes sure that the course is industry-aligned with curriculum standards, technical rigour, and value.",
        image: "/iiitb/assets/img/aicte-iiit.webp"
      },
      {
        title: "AACSB",
        desc: "The approval association signals a global business-quality benchmark, strengthening leadership and learning value.",
        image: "/iiitb/assets/img/AACSB.webp"
      }
    ],
    whyChooseTitle: "WHY CHOOSE?",
    whyChooseSubtitle: "IIIT Bangalore Online Courses",
    whyChooseItems: [
      {
        title: "Premier institute credibility",
        desc: "With strong academic standards and industry trust, IIIT Bangalore online courses deliver learning that carries real value in hiring and career growth.",
        image: "/iiitb/assets/img/premier-institute-credibility-iiitb.webp",
        variant: "dark"
      },
      {
        title: "Future-ready AI learning",
        desc: "The curriculum is built around practical outcomes in iiit bangalore artificial intelligence, helping professionals work confidently with real AI tools and use cases.",
        image: "/iiitb/assets/img/future-ready-ai-learning.webp",
        variant: "light"
      },
      {
        title: "Strong Data Science foundation",
        desc: "Programs at IIIT Bangalore focus on statistics, ML models, business insights, and projects that build job-ready skills.",
        image: "/iiitb/assets/img/strong-data-science.webp",
        variant: "dark"
      },
      {
        title: "Certification advantage",
        desc: "These are structured IIIT Bangalore certification courses designed for professionals who want credible credentials with applied training, not just theory.",
        image: "/iiitb/assets/img/certificate-iiitb.webp",
        variant: "light"
      },
      {
        title: "Leadership edge with partner institute",
        desc: "The CTO leadership track includes IIM Udaipur artificial intelligence coverage, combining tech strategy and AI decision-making for senior roles.",
        image: "/iiitb/assets/img/leadership-edge-with-partner.webp",
        variant: "dark"
      },
      {
        title: "Hands-on learning approach",
        desc: "Across multiple tracks, IIIT Bangalore online courses include projects, labs, and capstones, and all online IIIT Bangalore courses are integrated and career-focused.",
        image: "/iiitb/assets/img/hands-on-learning-approach.webp",
        variant: "light"
      }
    ]
  },
  edgewood: {
    id: "edgewood",
    name: "Edgewood University",
    logo: "/edgewood/assets/img/edgewood-university-black.png",
    image: "/edgewood/assets/img/edgewood_mobile_new_img.png",
    badge: "UGC DEB Recognized partner",
    bannerTitle: "Learn Business Leadership Skills With",
    bannerSubtitle: "Earn a globally recognized Online DBA or Dual MBA + DBA from Edgewood University with HLC accreditation and no GMAT required.",
    heroTitleHtml: "<h1 class=\"univ_heading\">EdgeWood <br> Online University</h1><div class=\"main_dba_section\"><span class=\"online_heading\">Online</span><h1><span class=\"dba_heading\">DBA</span> MBA + DBA</h1></div>",
    bannerPartner: "By <span class=\"underline_text\">Edgewood University</span> via <span class=\"underline_text\">upGrad</span>",
    heroBullets: [
      "Globally recognised U.S. accreditation (HLC)",
      "No GMAT/GRE + flexible pay-per-month model"
    ],
    coursesBullets: [
      "Doctor of Business Administration (24 Months)",
      "MBA + DBA (24 Months)"
    ],
    coursesOptions: [
      { value: "Doctor of Business Administration", label: "Doctor of Business Administration" },
      { value: "MBA + DBA", label: "MBA + DBA" }
    ],
    metaTitle: "Online DBA & Dual MBA + DBA | Edgewood University – SODE",
    metaDesc: "Elevate your corporate leadership and management skills with an online DBA or Dual MBA + DBA from Edgewood University.",
    theme: {
      primary: "#ba0000",
      secondary: "#fdc75e",
      darkBg: "#111111"
    },
    highlights: [
      { title: "Strategic DBA", desc: "Gain critical problem-solving and business research skills suitable for executive leadership roles.", icon: "♛" },
      { title: "Dual Master + Doctorate", desc: "Save time and cost with a combined MBA + DBA program track.", icon: "⚡" },
      { title: "Accredited Degree", desc: "Accredited degrees highly valued in international markets and universities.", icon: "✔" },
      { title: "Global Peer Cohort", desc: "Interact with senior managers and business heads from different sectors.", icon: "🌐" }
    ],
    stats: [
      { value: "95+", label: "Years of legacy" },
      { value: "5 lakh+", label: "Enrollments" },
      { value: "PwC", label: "Certificate" },
      { value: "Dual", label: "Degree" }
    ],
    faq: [
      { question: "What is the duration of the Edgewood University Online DBA?", answer: "The Edgewood University Online DBA can be completed in as little as 24 months, depending on your pace." },
      { question: "Is the Edgewood University Online DBA accredited?", answer: "The Edgewood University Online DBA is HLC-accredited, which supports its academic credibility in the U.S." },
      { question: "How long does the Edgewood University Online MBA+DBA take to complete?", answer: "The Edgewood University Online MBA+DBA can be completed in around 2.5 years, combining both degrees in one structured path." },
      { question: "Does the MBA part of Edgewood University's Online MBA+DBA have business accreditation?", answer: "Yes. The MBA included in the Edgewood University Online MBA+DBA is ACBSP-accredited, which reflects quality standards in business education." },
      { question: "Which is better: Edgewood University Online MBA or MBA+DBA?", answer: "Choose Edgewood University Online MBA for leadership and career growth. Choose MBA+DBA if you want advanced expertise, applied research skills, and the “Dr.” title." }
    ],
    layoutOrder: ["hero", "stats", "highlights", "faq"],
    heroVariant: "split-form",
    highlightsVariant: "grid",
    formName: "Edgewood University Form",
    crmSource: "Edgewood LP",
    utmSourceFallback: "Organic-edgewood",
    utmMediumFallback: "SODE-edgewood-landing-page",
    aboutTitle: "About Edgewood University Online",
    aboutDesc: "Edgewood University Online is a US-based university that was established in 1927, and the university is located in Madison. With 95+ years of excellence, the university is one that offers career-focused learning. The university has the approval of ACBSP, HLC, which make sure the education provided by Edgewood University Online is globally competitive. The university offers a dual program in Edgewood University Online MBA + DBA, and the university also provides a management degree, which is called Edgewood University Online MBA. Through their flexible programs, students can get an industry-relevant curriculum, faculty support, and a learning model built for working professionals.",
    aboutImage: "/edgewood/assets/img/edegewood-about-image.webp",
    certificateTitle: "Sample Certification",
    certificateDesc: "Edgewood University Online offers two certifications after completion of their degree: PwC and the certificate of Edgewood University. These two certificates help students prepare for top-board level roles. In the partnership of PwC India, it teaches strategic thinking, handling stakeholders, governance, and compliance through live lectures which teaches students a real-world expertise guidance, which builds confidence to succeed in a business career with Edgewood University Online MBA + DBA and MBA.",
    certificateImage: "/edgewood/assets/img/sample-certficate-edgewood.webp",
    coursesList: [
      {
        title: "Edgewood University Online DBA",
        duration: "24 Months",
        desc: "The Online DBA accredited by HLC introduces learners to board dynamics, strategic finance, decision-making, and digital transformation. This 24-month program prepares professionals for the Dr. title, with real-time project exposure and top faculty, following a 5-day campus immersion and the Online Networking Gala for Network and Career Growth.",
        img: "/edgewood/assets/img/online-dba-edgewood.webp",
        pdf: "/edgewood/assets/img/edgewood_dba.pdf"
      },
      {
        title: "Edgewood University Online MBA + DBA",
        duration: "24 Months",
        desc: "The Dual degree is in demand nowadays. Many students plan to study an online MBA + DBA as their career pathway. The student can complete the degree in 2.5 years, which combines executive skills an MBA student needs with applied research and the respected “Dr” title.",
        img: "/edgewood/assets/img/dbamba-edgewood.webp",
        pdf: "/edgewood/assets/img/edgewood_mba_dba.pdf"
      }
    ],
    specialisations: [
      {
        title: "DBA Leadership",
        desc: "Edgewood University Online DBA leadership builds leadership skills that enable students to learn management and strategic decision-making skills, using applied research to solve real organisational challenges in senior roles, and to gain skilled knowledge.",
        image: "/edgewood/assets/img/leadership-edgewood.webp"
      },
      {
        title: "DBA Finance",
        desc: "Finance Specializations in Edgewood University's Online DBA develop advanced expertise in financial strategy, risk management, and corporate decision-making. This curriculum helps students use research-led frameworks to manage complex financial problems.",
        image: "/edgewood/assets/img/finanance-edgewood.webp"
      },
      {
        title: "MBA + DBA Leadership",
        desc: "Edgewood University Online DBA Learning in MBA + DBA Leadership combines MBA leadership skills with doctoral-level applied research, preparing professionals for senior management, consulting, and enterprise growth roles.",
        image: "/edgewood/assets/img/leadership-edgewood-2.webp"
      },
      {
        title: "MBA + DBA Finance",
        desc: "Edgewood University Online DBA Learning in MBA + DBA Finance blends MBA finance fundamentals with advanced doctoral research, supporting strategic investment, risk control, and high-level corporate finance decisions.",
        image: "/edgewood/assets/img/Finance.webp"
      }
    ],
    outcomesList: [
      {
        title: "Optional On-Campus Immersion",
        desc: "Experience U.S. campus learning through optional immersion, workshops, faculty meets, and academic resources onsite support.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      },
      {
        title: "Online Networking Gala",
        desc: "Join online networking galas to meet peers, alumni, mentors, and industry leaders worldwide and expand your professional network.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      },
      {
        title: "Stakeholder Influence",
        desc: "Build stakeholder influence by negotiating confidently, managing expectations, presenting data, and leading change initiatives effectively.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      },
      {
        title: "Conduct Applied Doctoral Research",
        desc: "Conduct applied doctoral research using evidence-based methods, solving business problems with measurable outcomes for organisations.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      },
      {
        title: "Expert Faculty",
        desc: "Learn from expert faculty who guide projects, share industry insights, and support academic progress personally to help learners gain the skills they need.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      },
      {
        title: "Nationally Recognized",
        desc: "Earn a nationally recognized U.S. qualification that enhances credibility, promotion prospects, and global mobility faster.",
        image: "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"
      }
    ]
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

const fallbackUniversities: Record<string, {
  name: string;
  logo: string;
  image: string;
  badge: string;
  bannerTitle: string;
  bannerSubtitle: string;
  coursesBullets: string[];
  coursesOptions: string[];
  metaTitle: string;
  metaDesc: string;
  primaryColor: string;
  crmSource: string;
  aboutImage: string;
  certificateImage: string;
  heroBgDesktop: string;
  heroBgMobile: string;
}> = {
  amity: {
    name: "Amity University Online",
    logo: "/amity/assets/img/Amity-online-logo.png",
    image: "/amity/assets/img/amity-model.webp",
    badge: "UGC Entitled Online Programs",
    bannerTitle: "Shape Your Future with Amity University Online",
    bannerSubtitle: "Pursue globally recognized Online MBA, MCA, BCA, and BBA degree programs from India's top private online university.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BCA", "Online BBA", "Online M.Com", "Online B.Com"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BCA", "Online BBA", "Online M.Com", "Online B.Com"],
    metaTitle: "Amity University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Explore UGC-entitled Online MBA, MCA, BCA, and BBA degree courses from Amity University Online. Apply now for flexible online learning with SODE.",
    primaryColor: "#002147",
    crmSource: "Amity Online LP",
    aboutImage: "/amity/assets/img/Amity-About.png",
    certificateImage: "/amity/assets/img/sample-certificate.webp",
    heroBgDesktop: "/amity/assets/img/amity_new_desktop_bg.png",
    heroBgMobile: "/amity/assets/img/amity_new_mobile_bg.webp"
  },
  cu: {
    name: "Chandigarh University Online",
    logo: "/cu/assets/img/main-new-logo.webp",
    image: "/cu/assets/img/Mobile banner.webp",
    badge: "NAAC A+ Accredited Programs",
    bannerTitle: "Accelerate Your Career with Chandigarh University Online",
    bannerSubtitle: "Earn your Online MBA, MCA, BCA, or BBA degree from Chandigarh University, one of India's fastest-growing universities.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BCA", "Online BBA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BCA", "Online BBA"],
    metaTitle: "Chandigarh University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Discover Online MBA, MCA, BCA, and BBA programs from Chandigarh University Online. Get eligibility, fee structures, and placement opportunities.",
    primaryColor: "#d32f2f",
    crmSource: "CU Online LP",
    aboutImage: "/cu/assets/img/university.webp",
    certificateImage: "/cu/assets/img/sample-certificate.webp",
    heroBgDesktop: "/cu/assets/img/desktop-banner.webp",
    heroBgMobile: "/cu/assets/img/mobile_new_bg_main.png"
  },
  galgotias: {
    name: "Galgotias University Online",
    logo: "/galgotias/assets/img/logo-1.webp",
    image: "/galgotias/assets/img/Mobile banner.webp",
    badge: "UGC Entitled & NIRF Ranked",
    bannerTitle: "Affordable Higher Education with Galgotias University Online",
    bannerSubtitle: "Pursue industry-oriented Online MBA, MCA, BBA, and BCA programs with dedicated placement support and expert mentorship.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    metaTitle: "Galgotias University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Apply for Galgotias University Online MBA, MCA, BBA, and BCA programs. Discover affordable fee structures, structured syllabus, and placements.",
    primaryColor: "#1e3a8a",
    crmSource: "Galgotias Online LP",
    aboutImage: "/galgotias/assets/img/university.webp",
    certificateImage: "/galgotias/assets/img/sample-galgotia.webp",
    heroBgDesktop: "/galgotias/assets/img/new_galgotias_desktop_bg.png",
    heroBgMobile: "/galgotias/assets/img/mobile_new_bg_main.png"
  },
  hindustan: {
    name: "Hindustan University Online",
    logo: "/hindustan/assets/img/logo.png",
    image: "/hindustan/assets/img/Mobile banner.webp",
    badge: "NAAC A+ Approved Programs",
    bannerTitle: "Interactive Digital Learning with Hindustan University Online",
    bannerSubtitle: "Choose from specialized Online MBA, MCA, BBA, and BCA programs designed to scale your professional skills globally.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online B.Com"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online B.Com"],
    metaTitle: "Hindustan University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Explore Hindustan Online - CODE programs. Enroll in UGC-approved Online MBA, MCA, BBA, and BCA courses with interactive digital learning.",
    primaryColor: "#0284c7",
    crmSource: "Hindustan Online LP",
    aboutImage: "/hindustan/assets/img/university.webp",
    certificateImage: "/hindustan/assets/img/sample-certificate.webp",
    heroBgDesktop: "/hindustan/assets/img/desktop-banner.webp",
    heroBgMobile: "/hindustan/assets/img/mobile_new_bg_main.png"
  },
  lpu: {
    name: "LPU Online",
    logo: "/lpu/assets/img/lpu-logo.png",
    image: "/lpu/assets/img/new_lpu_mobile_img.png",
    badge: "NIRF Top 30 Management Institute",
    bannerTitle: "Turning Point for Your Career with LPU Online",
    bannerSubtitle: "Secure your UGC-entitled Online degree in MBA, MCA, BCA, BBA, MA, or BA from Lovely Professional University.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online BA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online BA"],
    metaTitle: "LPU Online Degree Programs | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Secure your Online MBA, MCA, BCA, BBA, or BA degree from LPU Online. Learn about flexible exams, UGC approvals, and career support.",
    primaryColor: "#ea580c",
    crmSource: "LPU Online LP",
    aboutImage: "/lpu/assets/img/campus-lpu.webp",
    certificateImage: "/lpu/assets/img/sample-certificate-lpu.webp",
    heroBgDesktop: "/lpu/assets/img/lpu_new_desktop_bg.png",
    heroBgMobile: "/lpu/assets/img/lpu-bg-front-mobile.webp"
  },
  manipal: {
    name: "Manipal University Online",
    logo: "/manipal/assets/img/logo.png",
    image: "/manipal/assets/img/new-manipal-mobile-bg.webp",
    badge: "A++ NAAC Accredited Institution",
    bannerTitle: "Empower Your Ambition with Manipal University Online",
    bannerSubtitle: "Earn premium Online degrees in MBA, MCA, BBA, and BCA, recognized globally for academic excellence and innovation.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online B.Com"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online B.Com"],
    metaTitle: "Manipal University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Discover Online Manipal degree programs. Find details on Online MBA, MCA, BBA, and BCA admissions, syllabus, and corporate partnerships.",
    primaryColor: "#b91c1c",
    crmSource: "Manipal Online LP",
    aboutImage: "/manipal/assets/img/manipal-about.webp",
    certificateImage: "/manipal/assets/img/sample-certificate.webp",
    heroBgDesktop: "/manipal/assets/img/manipal-desktop-bg.webp",
    heroBgMobile: "/manipal/assets/img/mobile_new_bg_main.png"
  },
  mu: {
    name: "Mangalayatan University Online",
    logo: "/mu/assets/img/logo.png",
    image: "/mu/assets/img/mu_mobile_new_img.png",
    badge: "UGC Entitled Degree Programs",
    bannerTitle: "Flexible Learning with Mangalayatan University Online",
    bannerSubtitle: "Advance your learning with Online MBA, MCA, BBA, BCA, M.Com, or BA programs offering rich curriculum and expert faculty.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online BA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Com", "Online BA"],
    metaTitle: "Mangalayatan University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Explore Mangalayatan University Online degree courses. Get information on Online MBA, MCA, BBA, and BCA fees, admissions, and syllabus.",
    primaryColor: "#1e3a8a",
    crmSource: "Mangalayatan Online LP",
    aboutImage: "/mu/assets/img/about-mu.webp",
    certificateImage: "/mu/assets/img/sample-certificate.webp",
    heroBgDesktop: "/mu/assets/img/mu_new_desktop_bg.png",
    heroBgMobile: "/mu/assets/img/mobile_new_bg_main.png"
  },
  shoolini: {
    name: "Shoolini University Online",
    logo: "/shoolini/assets/img/logo.png",
    image: "/shoolini/assets/img/shoolini_mobile_new_img.png",
    badge: "Top 100 NIRF Ranked University",
    bannerTitle: "Outcome-Based Learning with Shoolini University Online",
    bannerSubtitle: "Acquire your Online degree in MBA, MCA, BBA, or BCA, designed by top industry specialists for global career growth.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    metaTitle: "Shoolini University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Admissions open for Shoolini University Online MBA, MCA, BBA, and BCA. Learn from top academic minds with outcome-based online modules.",
    primaryColor: "#be123c",
    crmSource: "Shoolini Online LP",
    aboutImage: "/shoolini/assets/img/about-shoolini.webp",
    certificateImage: "/shoolini/assets/img/sample-certificate.webp",
    heroBgDesktop: "/shoolini/assets/img/shoolini_new_desktop_bg.png",
    heroBgMobile: "/shoolini/assets/img/mobile_new_bg_main.png"
  },
  smu: {
    name: "Sikkim Manipal University Online",
    logo: "/smu/assets/img/logo.png",
    image: "/smu/assets/img/smu_mobile_new_img.png",
    badge: "UGC Approved Online Degree",
    bannerTitle: "Ranked Accreditations with Sikkim Manipal University Online",
    bannerSubtitle: "Advance your skills with Online MBA, MCA, BBA, and BCA programs recognized across the public and private corporate sectors.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online M.Com"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online MA", "Online M.Com"],
    metaTitle: "Sikkim Manipal University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Enroll in Sikkim Manipal University Online courses. Get access to online lectures, professional guidance, and top-tier career placements.",
    primaryColor: "#1d4ed8",
    crmSource: "SMU Online LP",
    aboutImage: "/smu/assets/img/about-smu.webp",
    certificateImage: "/smu/assets/img/sample-certificate.webp",
    heroBgDesktop: "/smu/assets/img/smu_new_desktop_bg.png",
    heroBgMobile: "/smu/assets/img/mobile_new_bg_main.png"
  },
  upes: {
    name: "UPES Online",
    logo: "/upes/assets/img/logo.png",
    image: "/upes/assets/img/upes-home-mobile.webp",
    badge: "UGC Approved & NIRF Ranked",
    bannerTitle: "UPES University Online Degree Courses",
    bannerSubtitle: "Earn industry-focused Online MBA, BBA, MCA, and BCA degrees with custom specializations in high-growth sectors.",
    coursesBullets: ["Online MBA", "Online BBA", "Online MCA", "Online BCA"],
    coursesOptions: ["Online MBA", "Online BBA", "Online MCA", "Online BCA"],
    metaTitle: "UPES Online Degree Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Apply at UPES Online for UGC-approved Online MBA, BBA, MCA, and BCA programs. Enhance your career with high-growth specialized degrees.",
    primaryColor: "#be123c",
    crmSource: "UPES Online LP",
    aboutImage: "/upes/assets/img/about-upes.webp",
    certificateImage: "/upes/assets/img/sample-certificate.webp",
    heroBgDesktop: "/upes/assets/img/upes_new_desktop_bg.png",
    heroBgMobile: "/upes/assets/img/mobile_new_bg_main.png"
  },
  uu: {
    name: "Uttaranchal University Online",
    logo: "/uu/assets/img/logo.png",
    image: "/uu/assets/img/uu_mobile_new_img.png",
    badge: "NAAC A+ Approved Online Programs",
    bannerTitle: "Anytime Learning with Uttaranchal University Online",
    bannerSubtitle: "Pursue globally aligned Online MBA, MCA, BBA, and BCA programs with live lectures and professional placements.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"],
    metaTitle: "Uttaranchal University Online Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Explore Uttaranchal University Online degree programs. Discover Online MBA, MCA, BBA, and BCA fee structures, syllabus, and reviews.",
    primaryColor: "#047857",
    crmSource: "UU Online LP",
    aboutImage: "/uu/assets/img/about-uu.webp",
    certificateImage: "/uu/assets/img/sample-certificate.webp",
    heroBgDesktop: "/uu/assets/img/uu_new_desktop_bg.png",
    heroBgMobile: "/uu/assets/img/mobile_new_bg_main.png"
  },
  vgu: {
    name: "VGU Online",
    logo: "/vgu/assets/img/logo.png",
    image: "/vgu/assets/img/vgu_mobile_new_img.png",
    badge: "NAAC A+ Accredited Degrees",
    bannerTitle: "Vivekananda Global University Online Programs",
    bannerSubtitle: "Acquire your Online UG & PG degrees in MBA, MCA, BBA, and BCA from one of Rajasthan's leading private universities.",
    coursesBullets: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Sc.", "Online MA"],
    coursesOptions: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online M.Sc.", "Online MA"],
    metaTitle: "VGU Online Degree Courses | Admissions, Fees, and Syllabus – SODE",
    metaDesc: "Learn about Vivekananda Global University (VGU) Online courses. Find info on Online MBA, MCA, BBA, and BCA accreditations and admissions.",
    primaryColor: "#2563eb",
    crmSource: "VGU Online LP",
    aboutImage: "/vgu/assets/img/about-vgu.webp",
    certificateImage: "/vgu/assets/img/sample-certificate.webp",
    heroBgDesktop: "/vgu/assets/img/vgu_new_desktop_bg.png",
    heroBgMobile: "/vgu/assets/img/mobile_new_bg_main.png"
  },
  "iim-indore/executive-programme-in-sales-and-marketing": {
    name: "IIM Indore",
    logo: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/iim-logo.png",
    image: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/iim_mobile_new_img.png",
    badge: "Triple Crown Accredited Premier B-School",
    bannerTitle: "Executive Programme in Sales and Marketing (EPSM)",
    bannerSubtitle: "Accelerate your leadership with the Executive Programme in Sales and Marketing from IIM Indore, ranked among India's top 10.",
    coursesBullets: ["Executive Programme in Sales and Marketing"],
    coursesOptions: ["Executive Programme in Sales and Marketing"],
    metaTitle: "Executive Programme in Sales and Marketing (EPSM) | IIM Indore – SODE",
    metaDesc: "Accelerate your marketing leadership with IIM Indore's Executive Programme in Sales and Marketing (EPSM). Get syllabus, duration, and fees.",
    primaryColor: "#1e3a8a",
    crmSource: "IIM Indore EPSM LP",
    aboutImage: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/iim-university-image.webp",
    certificateImage: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/sample-certificate.webp",
    heroBgDesktop: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/new_iim_mobile_bg.png"
  },
  "iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics": {
    name: "IIM Nagpur",
    logo: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/iim-logo.png",
    image: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/iim_mobile_new_img.png",
    badge: "Premier New Generation B-School",
    bannerTitle: "Advanced HR Analytics Programme",
    bannerSubtitle: "Gain deep diagnostic, predictive, and strategic workforce analytics capabilities from IIM Nagpur.",
    coursesBullets: ["Post Graduate Certificate Programme in Advanced HR Analytics"],
    coursesOptions: ["Post Graduate Certificate Programme in Advanced HR Analytics"],
    metaTitle: "Post Graduate Certificate Programme in Advanced HR Analytics | IIM Nagpur – SODE",
    metaDesc: "Enroll in the Advanced HR Analytics Programme from IIM Nagpur. Gain diagnostic, predictive, and strategic workforce analytics capabilities.",
    primaryColor: "#1e3a8a",
    crmSource: "IIM Nagpur HR Analytics LP",
    aboutImage: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/iim-university-image.webp",
    certificateImage: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/sample-certificate.webp",
    heroBgDesktop: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/new_iim_mobile_bg.png"
  },
  "iit-delhi/executive-programme-in-advanced-project-management": {
    name: "IIT Delhi",
    logo: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/iim-logo.png",
    image: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/iim_mobile_new_img.png",
    badge: "Institution of National Importance",
    bannerTitle: "Executive Programme in Advanced Project Management",
    bannerSubtitle: "Master portfolio planning, risk management, agile execution, and cross-functional leadership from IIT Delhi.",
    coursesBullets: ["Executive Programme in Advanced Project Management"],
    coursesOptions: ["Executive Programme in Advanced Project Management"],
    metaTitle: "Executive Programme in Advanced Project Management | IIT Delhi – SODE",
    metaDesc: "Master agile portfolio planning and leadership with IIT Delhi's Executive Programme in Advanced Project Management. Apply now.",
    primaryColor: "#0f172a",
    crmSource: "IIT Delhi Project Mgmt LP",
    aboutImage: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/iim-university-image.webp",
    certificateImage: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/sample-certificate.webp",
    heroBgDesktop: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/new_iim_mobile_bg.png"
  },
  "iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning": {
    name: "IIT Madras",
    logo: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/iim-logo.png",
    image: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/iim_mobile_new_img.png",
    badge: "India's #1 Ranked Engineering Institute",
    bannerTitle: "Applied AI & Deep Learning Certificate",
    bannerSubtitle: "Gain deep research capabilities in neural networks, computer vision, and NLP from IIT Madras.",
    coursesBullets: ["Advanced Certificate in Applied Artificial Intelligence & Deep Learning"],
    coursesOptions: ["Advanced Certificate in Applied Artificial Intelligence & Deep Learning"],
    metaTitle: "Applied AI & Deep Learning Advanced Certificate | IIT Madras – SODE",
    metaDesc: "Enroll in the Advanced Certificate in Applied Artificial Intelligence & Deep Learning from IIT Madras. Master neural networks and NLP.",
    primaryColor: "#0f172a",
    crmSource: "IIT Madras Applied AI LP",
    aboutImage: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/iim-university-image.webp",
    certificateImage: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/sample-certificate.webp",
    heroBgDesktop: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/new_iim_mobile_bg.png"
  },
  "iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai": {
    name: "IIT Roorkee",
    logo: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/iim-logo.png",
    image: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/iim_mobile_new_img.png",
    badge: "Pioneer in Technical Education",
    bannerTitle: "Data Science, ML & Generative AI PG Certificate",
    bannerSubtitle: "Acquire high-demand expertise in ML model training, feature engineering, and generative frameworks from IIT Roorkee.",
    coursesBullets: ["PG Certificate in Data Science, Machine Learning & Generative AI"],
    coursesOptions: ["PG Certificate in Data Science, Machine Learning & Generative AI"],
    metaTitle: "PG Certificate in Data Science, ML & Gen AI | IIT Roorkee – SODE",
    metaDesc: "Gain advanced credentials in ML and Generative AI from IIT Roorkee. Learn model training, feature engineering, and LLMs.",
    primaryColor: "#0f172a",
    crmSource: "IIT Roorkee GenAI LP",
    aboutImage: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/iim-university-image.webp",
    certificateImage: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/sample-certificate.webp",
    heroBgDesktop: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/new_iim_mobile_bg.png"
  },
  "xlri/executive-development-programme-in-human-resource-management": {
    name: "XLRI Jamshedpur",
    logo: "/xlri/executive-development-programme-in-human-resource-management/assets/img/iim-logo.png",
    image: "/xlri/executive-development-programme-in-human-resource-management/assets/img/iim_mobile_new_img.png",
    badge: "India's Oldest & Premier HR Institution",
    bannerTitle: "Human Resource Management (EDP-HRM)",
    bannerSubtitle: "Master industrial relations, talent acquisition, strategic alignment, and compensation modeling from XLRI Jamshedpur.",
    coursesBullets: ["Executive Development Programme in Human Resource Management"],
    coursesOptions: ["Executive Development Programme in Human Resource Management"],
    metaTitle: "EDP in Human Resource Management (EDP-HRM) | XLRI Jamshedpur – SODE",
    metaDesc: "Acquire executive credentials in Human Resource Management (EDP-HRM) from XLRI Jamshedpur. Learn industrial relations and compensation.",
    primaryColor: "#1e3a8a",
    crmSource: "XLRI HRM LP",
    aboutImage: "/xlri/executive-development-programme-in-human-resource-management/assets/img/iim-university-image.webp",
    certificateImage: "/xlri/executive-development-programme-in-human-resource-management/assets/img/sample-certificate.webp",
    heroBgDesktop: "/xlri/executive-development-programme-in-human-resource-management/assets/img/new_iim_mobile_bg.png",
    heroBgMobile: "/xlri/executive-development-programme-in-human-resource-management/assets/img/new_iim_mobile_bg.png"
  }
};

export const universityIds = [
  ...Object.keys(universitiesData),
  ...Object.keys(fallbackUniversities)
];

export function getUniversityData(id: string): UniversityData | undefined {
  const cleanId = id.toLowerCase();
  if (universitiesData[cleanId]) {
    return universitiesData[cleanId];
  }

  const fallback = fallbackUniversities[cleanId];
  if (fallback) {
    return {
      id: cleanId,
      name: fallback.name,
      logo: fallback.logo,
      image: fallback.image,
      badge: fallback.badge,
      bannerTitle: fallback.bannerTitle,
      bannerSubtitle: fallback.bannerSubtitle,
      coursesBullets: fallback.coursesBullets,
      coursesOptions: fallback.coursesOptions.map(o => ({ value: o, label: o })),
      metaTitle: fallback.metaTitle,
      metaDesc: fallback.metaDesc,
      theme: {
        primary: fallback.primaryColor,
        secondary: "#f59e0b",
        darkBg: "#0f172a"
      },
      highlights: [
        { title: "UGC Entitled", desc: "Gain highly valued degree credentials recognized globally.", icon: "★" },
        { title: "Flexible Schedule", desc: "Balance learning and work with self-paced online modules combined with weekend live sessions.", icon: "⏱" },
        { title: "Alumni Network", desc: "Join a distinguished community of tech leaders and pioneers across the globe.", icon: "👥" },
        { title: "Career Boost", desc: "Get resume critique, interview mockups, and career guidance sessions from industry mentors.", icon: "💼" }
      ],
      stats: [
        { value: "100% Online", label: "Anytime Learning" },
        { value: "UGC Entitled", label: "Accreditation" },
        { value: "Expert Mentorship", label: "Career Guidance" }
      ],
      layoutOrder: ["hero", "stats", "highlights", "lead-form"],
      heroVariant: cleanId.includes("/") ? "standard" : "split-form",
      highlightsVariant: "grid",
      formName: `${fallback.name} Form`,
      crmSource: fallback.crmSource,
      utmSourceFallback: `Organic-${cleanId.replace("/", "-")}`,
      utmMediumFallback: `SODE-${cleanId.replace("/", "-")}-landing-page`,
      aboutImage: fallback.aboutImage,
      certificateImage: fallback.certificateImage,
      heroBgDesktop: fallback.heroBgDesktop,
      heroBgMobile: fallback.heroBgMobile
    } as UniversityData;
  }

  return undefined;
}

export interface EnrichedUniversityData extends UniversityData {
  aboutTitle: string;
  aboutDesc: string;
  aboutImage: string;
  certificateTitle: string;
  certificateDesc: string;
  certificateImage: string;
  coursesList: CourseOffer[];
  approvalsList: ApprovalItem[];
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyChooseItems: WhyChooseCard[];
  applyStepsList: ApplyStep[];
  heroBgDesktop: string;
  heroBgMobile: string;
  specialisations?: { title: string; desc: string; image: string }[];
  outcomesList?: { title: string; desc: string; image?: string }[];
  heroTitleHtml?: string;
  bannerPartner?: string;
  heroBullets?: string[];
}

export function getEnrichedUniversityData(id: string): EnrichedUniversityData | undefined {
  const base = getUniversityData(id);
  if (!base) return undefined;

  const cleanId = base.id.toLowerCase();

  // Dynamic assets mapping
  let logo = base.logo;
  let image = base.image;
  let aboutImage = base.aboutImage || `/${cleanId}/assets/img/about-us.webp`;
  let certificateImage = base.certificateImage || `/${cleanId}/assets/img/sample-certificate.webp`;
  let heroBgDesktop = "/iiitb/assets/img/iiitb_desktop_new_bg.png";
  let heroBgMobile = "/iiitb/assets/img/mobile_new_bg_main.png";

  if (cleanId === "iiitb") {
    logo = "/iiitb/assets/img/iiitb_new_logo_main.png";
    image = "/iiitb/assets/img/iiitb_mobile_new_img.png";
    aboutImage = "/iiitb/assets/img/iiit-b-about-image.webp";
    certificateImage = "/iiitb/assets/img/sample-certificate.webp";
    heroBgDesktop = "/iiitb/assets/img/iiitb_desktop_new_bg.png";
    heroBgMobile = "/iiitb/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "edgewood") {
    logo = "/edgewood/assets/img/edgewood-university-black.png";
    image = "/edgewood/assets/img/edgewood_mobile_new_img.png";
    aboutImage = "/edgewood/assets/img/edegewood-about-image.webp";
    certificateImage = "/edgewood/assets/img/sample-certficate-edgewood.webp";
    heroBgDesktop = "/edgewood/assets/img/edgewood_desktop_new_bg.png";
    heroBgMobile = "/edgewood/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "esgci") {
    logo = "/esgci/assets/img/esgci_new_logo.png";
    image = "/esgci/assets/img/esgci_new_mobile.png";
    aboutImage = "/esgci/assets/img/about-pic.webp";
    certificateImage = "/esgci/assets/img/degree-ESGCI.webp";
    heroBgDesktop = "/esgci/assets/img/esgci_new_desktop_bg.png";
    heroBgMobile = "/esgci/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "rushford") {
    logo = "/rushford/assets/img/rushford_new_logo.png";
    image = "/rushford/assets/img/rushford_new_mobile.png";
    aboutImage = "/rushford/assets/img/about-image-rushford.webp";
    certificateImage = "/rushford/assets/img/rushford_sample_Degree.webp";
    heroBgDesktop = "/iiitb/assets/img/iiitb_desktop_new_bg.png";
    heroBgMobile = "/rushford/assets/img/mobile-banner.webp";
  } else if (cleanId === "ggu") {
    logo = "/ggu/assets/img/new_ggu_logo_main.png";
    image = "/ggu/assets/img/ggu_mobile_img.png";
    aboutImage = "/ggu/assets/img/about-ggu.webp";
    certificateImage = "/ggu/assets/img/doctor_certificate.webp";
    heroBgDesktop = "/ggu/assets/img/ggu_desktop_new_bg.png";
    heroBgMobile = "/ggu/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "ssbm") {
    logo = "/ssbm/assets/img/ssbm_new_logo.png";
    image = "/ssbm/assets/img/ssbm_new_mobile_img.png";
    aboutImage = "/ssbm/assets/img/about-us.webp";
    certificateImage = "/ssbm/assets/img/deree-ssbm.png";
    heroBgDesktop = "/ssbm/assets/img/ssbm_new_Desktop_bg.png";
    heroBgMobile = "/ssbm/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "liverpool") {
    logo = "/liverpool/assets/img/liverpool-logo.png";
    image = "/liverpool/assets/img/liverpool_mobile_new_img.png";
    aboutImage = "/liverpool/assets/img/about-us.webp";
    certificateImage = "/liverpool/assets/img/degree-ESGCI.webp";
    heroBgDesktop = "/liverpool/assets/img/liverpool_desktop_new_bg.webp";
    heroBgMobile = "/liverpool/assets/img/mobile_new_bg_main.png";
  } else if (cleanId === "iimk") {
    logo = "/iimk/assets/img/iim-logo.png";
    image = "/iimk/assets/img/iim_mobile_new_img.png";
    aboutImage = "/iimk/assets/img/iim-university-image.webp";
    certificateImage = "/iimk/assets/img/sample-certificate.webp";
    heroBgDesktop = "/iimk/assets/img/new_iim_mobile_bg.png";
    heroBgMobile = "/iimk/assets/img/new_iim_mobile_bg.png";
  }

  // 1. Parse or fallback coursesList
  const coursesList = base.coursesList || base.coursesBullets.map((bullet, idx) => {
    let title = bullet;
    let duration = "24-36 Months";
    if (bullet.includes(" (")) {
      const parts = bullet.split(" (");
      title = parts[0];
      duration = parts[1].replace(")", "");
    }

    // Dynamic defaults for specific universities
    let courseImg = `/${cleanId}/assets/img/course-${(idx % 5) + 1}.webp`;
    let coursePdf = `/${cleanId}/assets/img/main_brochure.pdf`;

    if (cleanId === "edgewood") {
      courseImg = idx === 0 ? "/edgewood/assets/img/online-dba-edgewood.webp" : "/edgewood/assets/img/dbamba-edgewood.webp";
      coursePdf = idx === 0 ? "/edgewood/assets/img/edgewood_dba.pdf" : "/edgewood/assets/img/edgewood_mba_dba.pdf";
    } else if (cleanId === "esgci") {
      courseImg = "/esgci/assets/img/degree-ESGCI.webp";
      coursePdf = "/esgci/assets/img/ESGCI_DBA.pdf";
    } else if (cleanId === "rushford") {
      courseImg = "/rushford/assets/img/gebneralirushford.webp";
      coursePdf = "/rushford/assets/img/Rushford_DBA.pdf";
    } else if (cleanId === "ggu") {
      courseImg = idx === 0 ? "/ggu/assets/img/doctorate-dba-ggu.webp" : "/ggu/assets/img/master-mba-ggu.webp";
      coursePdf = "/ggu/assets/img/GGU_brochure.pdf";
    } else if (cleanId === "ssbm") {
      courseImg = "/ssbm/assets/img/logo.png";
      coursePdf = "/ssbm/assets/img/SSBM+Brochure.pdf";
    } else if (cleanId === "liverpool") {
      courseImg = "/liverpool/assets/img/new-image2.webp";
      coursePdf = "/liverpool/assets/img/new-brochure1.pdf";
    } else if (cleanId === "iimk") {
      courseImg = "/iimk/assets/img/iim-university-image.webp";
      coursePdf = "/iimk/assets/img/IIMT.pdf";
    }

    return {
      title,
      duration,
      desc: `Learn advanced concepts of ${title} from ${base.name}. This online program features live faculty sessions, industry projects, and hands-on tool training designed to help professionals scale their career in tech and management.`,
      img: courseImg,
      pdf: coursePdf
    };
  });

  // 2. Parse or fallback approvalsList
  let approvalsList = base.approvalsList;
  if (!approvalsList) {
    if (cleanId === "edgewood") {
      approvalsList = [
        { title: "HLC", desc: "Edgewood University Online program is approved by the HLC, which is a trusted U.S. regional approval authority.", image: "/edgewood/assets/img/hlc-approval-edgewood.webp" },
        { title: "WES", desc: "The Edgewood University Online MBA + DBA is approved by the WES, which help learners validate their US qualification globally.", image: "/edgewood/assets/img/WES.webp" },
        { title: "ACBSP", desc: "ACBSP approval ensures that the quality of the education has a strong academic value.", image: "/edgewood/assets/img/acbsp-approval-edgewood.webp" }
      ];
    } else if (cleanId === "esgci") {
      approvalsList = [
        { title: "French Ministry", desc: "Recognizes ESGCI for meeting high-quality standards in French higher education.", image: "/esgci/assets/img/REPUBLIQUE.webp" },
        { title: "QUALIOPI", desc: "Certification ensuring training programs in France adhere to recognized quality standards.", image: "/esgci/assets/img/QUALIOPI.webp" },
        { title: "ACBSP", desc: "Global accreditation validating the quality and standards of business education.", image: "/esgci/assets/img/ACBSP.webp" }
      ];
    } else if (cleanId === "rushford") {
      approvalsList = [
        { title: "EduQua", desc: "Swiss quality label for further education institutions.", image: "/rushford/assets/img/eduqua.webp" },
        { title: "ACBSP", desc: "Global business school accreditation validating business education standards.", image: "/rushford/assets/img/acbsp-rushford.webp" },
        { title: "IACBE", desc: "Accreditation for business, accounting, and business-related programs globally.", image: "/rushford/assets/img/iacbe-rushford.webp" },
        { title: "AACSB", desc: "The association to advance collegiate schools of business recognition.", image: "/rushford/assets/img/aacsb-rushford.webp" }
      ];
    } else if (cleanId === "ggu") {
      approvalsList = [
        { title: "WASC", desc: "Accredited by the WASC Senior College and University Commission.", image: "/ggu/assets/img/wasc.webp" },
        { title: "AACSB", desc: "Global programmatic standard benchmark of elite business schools.", image: "/ggu/assets/img/aacsb.webp" },
        { title: "State Bar", desc: "Accredited by the Committee of Bar Examiners of the State Bar of California.", image: "/ggu/assets/img/state-bar-of-california.webp" }
      ];
    } else if (cleanId === "ssbm") {
      approvalsList = [
        { title: "EduQua", desc: "Swiss quality certification for adult education and training.", image: "/ssbm/assets/img/eduqua.webp" },
        { title: "ACBSP", desc: "Accreditation council for business schools and programs validation.", image: "/ssbm/assets/img/ACBSP.webp" },
        { title: "Swiss Quality", desc: "Certified under Swiss higher educational excellence guidelines.", image: "/ssbm/assets/img/swiss.png" }
      ];
    } else if (cleanId === "liverpool") {
      approvalsList = [
        { title: "WES", desc: "WES evaluation validates degree credentials for international professional alignment.", image: "/liverpool/assets/img/WES.webp" },
        { title: "LJMU", desc: "Double accreditation and credentials from Liverpool John Moores University, UK.", image: "/liverpool/assets/img/LJMU.webp" }
      ];
    } else if (cleanId === "iimk") {
      approvalsList = [
        { title: "NIRF Top 3", desc: "Consistently ranked among the top 3 premier management institutions in India.", image: "/iimk/assets/img/iim-approvals.webp" },
        { title: "EQUIS", desc: "EFMD quality improvement system certification, benchmark of quality.", image: "/iimk/assets/img/equis-iim.webp" },
        { title: "AMBA", desc: "Association of MBAs global accreditation confirming program standards.", image: "/iimk/assets/img/amba-iim.webp" }
      ];
    } else {
      approvalsList = base.highlights.slice(0, 4).map((h) => ({
        title: h.title,
        desc: h.desc,
        image: h.icon === "★" ? "/iiitb/assets/img/naac-a-iiit.webp" :
          h.icon === "✔" || h.icon === "♛" ? "/iiitb/assets/img/ugc-iiit.webp" :
            h.icon === "✈" || h.icon === "⚡" ? "/iiitb/assets/img/aicte-iiit.webp" :
              "/iiitb/assets/img/AACSB.webp"
      }));
    }
  }

  // 3. Parse or fallback whyChooseItems
  const whyChooseItems = base.whyChooseItems || base.highlights.map((h, idx) => {
    let cardImg = "";
    switch (idx % 6) {
      case 0:
        cardImg = "/iiitb/assets/img/premier-institute-credibility-iiitb.webp";
        break;
      case 1:
        cardImg = "/iiitb/assets/img/future-ready-ai-learning.webp";
        break;
      case 2:
        cardImg = "/iiitb/assets/img/strong-data-science.webp";
        break;
      case 3:
        cardImg = "/iiitb/assets/img/certificate-iiitb.webp";
        break;
      case 4:
        cardImg = "/iiitb/assets/img/leadership-edge-with-partner.webp";
        break;
      default:
        cardImg = "/iiitb/assets/img/hands-on-learning-approach.webp";
        break;
    }
    return {
      title: h.title,
      desc: h.desc,
      image: cardImg,
      variant: idx % 2 === 0 ? "dark" : "light" as const
    };
  });

  return {
    ...base,
    logo,
    image,
    aboutTitle: base.aboutTitle || `About ${base.name} \nOnline Courses`,
    aboutDesc: base.aboutDesc || `${base.name} is a premier partner educational institution. Its online courses are designed for working professionals, combining academic rigor with real-world application. Learners gain practical exposure through projects, case studies, and capstones that align skills with current business and technology needs.`,
    aboutImage,
    certificateTitle: base.certificateTitle || `Sample ${base.name} Certificate`,
    certificateDesc: base.certificateDesc || `The students who have completed the online courses will receive a certificate from ${base.name}. The curriculum gets you to learn multiple tools, which will allow you to get the upgrade you need in your professional journey.`,
    certificateImage,
    coursesList,
    approvalsList,
    whyChooseTitle: base.whyChooseTitle || "WHY CHOOSE?",
    whyChooseSubtitle: base.whyChooseSubtitle || `${base.name} Online Courses`,
    whyChooseItems,
    applyStepsList: base.applyStepsList || [
      { number: 1, title: "Submit Form", desc: "Fill in and submit your application form online", colorClass: "orange" },
      { number: 2, title: "Expert's Counseling", desc: "You will receive a call from our expert counselor", colorClass: "blue" },
      { number: 3, title: "Choose Course", desc: `Select the course according to your interest`, colorClass: "pink" },
      { number: 4, title: "Online Payment", desc: "You need to make a smooth online fee submission", colorClass: "green" },
      { number: 5, title: "Document Submit", desc: "You need to upload all the required verified documents.", colorClass: "purple" },
      { number: 6, title: "Admission Confirm", desc: "Get Confirmation on your Email & Whatsapp", colorClass: "orange" }
    ],
    specialisations: base.specialisations,
    outcomesList: base.outcomesList,
    heroTitleHtml: base.heroTitleHtml,
    bannerPartner: base.bannerPartner,
    heroBullets: base.heroBullets,
    heroBgDesktop,
    heroBgMobile
  };
}
