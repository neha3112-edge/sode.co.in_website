"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FormWrapper from "@/components/forms/FormWrapper";
import "./common.css";
import "./navbar.css";
import "./style.css";

export default function EdgewoodPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dba");
  const [activeCertSlide, setActiveCertSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Popup overlay states
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  // Scroll-triggered coupon popup
  const [couponTriggered, setCouponTriggered] = useState(false);
  const midScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = midScrollRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !couponTriggered) {
            setCouponTriggered(true);
            setIsCouponOpen(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [couponTriggered]);

  const courseOptions = [
    "Doctor of Business Administration",
    "MBA + DBA"
  ];

  return (
    <div className="edgewood-scope bg-white text-black min-h-screen relative font-sans">
      {/* FontAwesome stylesheet (hoisted automatically by React 19) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* ========== NAVBAR ========== */}
      <div className="navbar">
        <div className="top-navbar">
          <div className="logo">
            <a className="des_logo" href="/edgewood">
              <img
                src="/edgewood/assets/img/new_sode_tm_logo.png"
                width={200}
                style={{ width: "200px", height: "auto" }}
                alt="Logo"
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="header_menu">
            <ul className="header_menu_list">
              <li><a href="#main-courses">Courses</a></li>
              <li><a href="#c-offered">Approvals</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#faqs">FAQ</a></li>
            </ul>
          </div>
          {/* Mobile toggle button */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        {/* Mobile Dropdown Panel */}
        <div className={`mobile-dropdown ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-menu-list">
            <li>
              <a
                href="#main-courses"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("main-courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#c-offered"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("c-offered")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Approvals
              </a>
            </li>
            <li>
              <a
                href="#about-section"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ========== HERO / BANNER SECTION ========== */}
      <div id="hero-section">
        <div className="container">
          <div className="banner">
            <div className="banner-info">
              <div className="un_image_container">
                <a href="/edgewood">
                  <img
                    src="/edgewood/assets/img/edgewood-university-black.png"
                    width={200}
                    style={{ width: "200px", height: "auto" }}
                    alt="Edgewood University Logo"
                  />
                </a>
              </div>

              <h2>Learn Business <br /> Leadership Skills With</h2>
              <h1 className="univ_heading">EdgeWood <br /> Online University</h1>

              <div className="new_banner_heading">
                By <span className="underline_text">Edgewood University</span> via{" "}
                <span className="underline_text">upGrad</span>
              </div>

              <div className="main_dba_section">
                <span className="online_heading">Online</span>
                <h1>
                  <span className="dba_heading">DBA</span> MBA + DBA
                </h1>
              </div>

              <div className="banner_lists">
                <ul>
                  <li>
                    <i className="fa fa-check-square-o"></i> Globally recognised U.S. accreditation (HLC)
                  </li>
                  <li>
                    <i className="fa fa-check-square-o"></i> No GMAT/GRE + flexible pay-per-month model
                  </li>
                </ul>
              </div>

              <button
                className="banner_custom_btn btn2 downloadBrochureBtn"
                onClick={() => setIsBrochureOpen(true)}
                style={{
                  backgroundColor: "#F1BA00",
                  color: "red",
                  borderStyle: "none",
                  fontWeight: "bold",
                }}
              >
                Download Brochure <i className="fa fa-download"></i>
              </button>
            </div>

            <div className="col-md-3 custom_img_section" style={{ padding: 0 }}>
              <img src="/edgewood/assets/img/edgewood_mobile_new_img.png" alt="Edgewood Graphic" />
            </div>

            {/* Banner Lead Form */}
            <div className="banner-form">
              <div id="form" className="w-full max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-slate-800">
                <FormWrapper
                  title="Enquire Now"
                  subtitle="Academic Experts will assist you!"
                  courseOptions={courseOptions}
                  formNameOverride="Edgewood University Form"
                  utmSourceFallback="Organic-edgewood"
                  utmMediumFallback="SODE-edgewood-landing-page"
                  sourceOverride="Edgewood LP"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== HIGHLIGHTS SECTION ========== */}
      <div className="HighLights">
        <div className="container">
          <div className="ach">
            <div className="ac1">
              <i className="fa fa-graduation-cap"></i>
              <div className="inner_arc1_grid">
                <h3>95+</h3>
                <p>Years of legacy</p>
              </div>
            </div>

            <div className="ac1">
              <i className="fa fa-graduation-cap"></i>
              <div className="inner_arc1_grid">
                <h3>5 lakh+</h3>
                <p>Enrollments</p>
              </div>
            </div>

            <div className="ac1">
              <i className="fa fa-graduation-cap"></i>
              <div className="inner_arc1_grid">
                <h3>PwC</h3>
                <p>Certificate</p>
              </div>
            </div>

            <div className="ac1">
              <i className="fa fa-graduation-cap"></i>
              <div className="inner_arc1_grid">
                <h3>Dual</h3>
                <p>Degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== COURSES OFFERED ========== */}
      <section id="main-courses" className="courses-section">
        <div className="header">
          <h2>COURSES OFFERED</h2>
          <p>By Edgewood University Online</p>
        </div>

        <div className="course-container">
          {/* Card 1 */}
          <div className="course-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/edgewood/assets/img/online-dba-edgewood.webp')" }}
            ></div>
            <div className="card-content">
              <h3>Edgewood University Online DBA:</h3>
              <p className="description">
                The Online DBA accredited by HLC introduces learners to board dynamics, strategic finance, decision-making, and digital transformation. This 24-month program prepares professionals for the Dr. title, with real-time project exposure and top faculty, following a 5-day campus immersion and the Online Networking Gala for Network and Career Growth.
              </p>
              <div className="details">
                <p><strong>Duration:</strong> 24 Months</p>
                <p><strong>Eligibility:</strong> Bachelor's + Master's Degree with relevant experience</p>
              </div>
              <div className="card-actions">
                <button className="btn outline downloadBrochureBtn" onClick={() => setIsBrochureOpen(true)}>
                  Get Brochure <span className="icon">↓</span>
                </button>
                <button className="btn solid enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply now
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="course-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('/edgewood/assets/img/dbamba-edgewood.webp')" }}
            ></div>
            <div className="card-content">
              <h3>Edgewood University Online MBA + DBA:</h3>
              <p className="description">
                The Dual degree is in demand nowadays. Many students plan to study an online MBA + DBA as their career pathway. The student can complete the degree in 2.5 years, which combines executive skills an MBA student needs with applied research and the respected “Dr” title.
              </p>
              <div className="details">
                <p><strong>Duration:</strong> 24 Months</p>
                <p><strong>Eligibility:</strong> Bachelor's Degree</p>
              </div>
              <div className="card-actions">
                <button className="btn outline downloadBrochureBtn" onClick={() => setIsBrochureOpen(true)}>
                  Get Brochure <span className="icon">↓</span>
                </button>
                <button className="btn solid enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about-section" className="about-section-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <div className="about-content">
            <h2>About Edgewood University Online</h2>
            <p>
              Edgewood University Online is a US-based university that was established in 1927, and the university is located in Madison. With 95+ years of excellence, the university is one that offers career-focused learning. The university has the approval of ACBSP, HLC, which make sure the education provided by Edgewood University Online is globally competitive. The university offers a dual program in Edgewood University Online MBA + DBA, and the university also provides a management degree, which is called Edgewood University Online MBA. Through their flexible programs, students can get an industry-relevant curriculum, faculty support, and a learning model built for working professionals.
            </p>
          </div>

          <div className="image-container">
            <img src="/edgewood/assets/img/edegewood-about-image.webp" alt="Campus" />
            <button className="cta-button enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
              Get FREE Career Counseling
            </button>
          </div>
        </div>
      </section>

      {/* ========== ACCREDITATIONS & APPROVALS ========== */}
      <section id="c-offered" className="accreditation-section">
        <div className="accreditation-header">
          <h2>ACCREDITATION OF</h2>
          <p>Edgewood University Online</p>
        </div>

        <div className="accreditation-container">
          <div className="accreditation-card">
            <div className="logo-box">
              <img src="/edgewood/assets/img/hlc-approval-edgewood.webp" alt="HLC Logo" />
            </div>
            <h3>HLC</h3>
            <p>
              Edgewood University Online program is approved by the HLC, which is a trusted U.S. regional approval authority. This approval supports the MBA+DBA program's credibility.
            </p>
          </div>

          <div className="accreditation-card">
            <div className="logo-box">
              <img src="/edgewood/assets/img/WES.webp" alt="WES Logo" />
            </div>
            <h3>WES</h3>
            <p>
              The Edgewood University Online MBA + DBA is approved by the WES, which helps learners validate their US qualification for education and career development across countries.
            </p>
          </div>

          <div className="accreditation-card">
            <div className="logo-box">
              <img src="/edgewood/assets/img/acbsp-approval-edgewood.webp" alt="ACBSP Logo" />
            </div>
            <h3>ACBSP</h3>
            <p>
              ACBSP approval ensures that the quality of the education has a strong academic value. The Edgewood University Online MBA has this approval, which shows their credibility.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SPECIALIZATIONS ========== */}
      <section className="specialisation-section" id="specializations">
        <div className="header">
          <h2>Specializations of Edgewood University Online DBA / MBA + DBA</h2>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "dba" ? "active" : ""}`}
            onClick={() => setActiveTab("dba")}
          >
            DBA
          </button>
          <button
            className={`tab-btn ${activeTab === "dba-mba" ? "active" : ""}`}
            onClick={() => setActiveTab("dba-mba")}
          >
            MBA + DBA
          </button>
        </div>

        {/* DBA TAB */}
        <div className={`tab-content ${activeTab === "dba" ? "active" : ""}`} id="dba">
          <div className="spec-container">
            <div className="spec-card">
              <div
                className="card-image"
                style={{ backgroundImage: "url('/edgewood/assets/img/leadership-edgewood.webp')" }}
              ></div>
              <div className="card-content">
                <h3>DBA Leadership</h3>
                <p className="description">
                  Edgewood University Online DBA leadership builds leadership skills that enable students to learn management and strategic decision-making skills, using applied research to solve real organisational challenges in senior roles, and to gain skilled knowledge.
                </p>
                <button className="apply-btn-border enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply Now
                </button>
              </div>
            </div>

            <div className="spec-card">
              <div
                className="card-image"
                style={{ backgroundImage: "url('/edgewood/assets/img/finanance-edgewood.webp')" }}
              ></div>
              <div className="card-content">
                <h3>DBA Finance</h3>
                <p className="description">
                  Finance Specializations in Edgewood University's Online DBA develop advanced expertise in financial strategy, risk management, and corporate decision-making. This curriculum helps students use research-led frameworks to manage complex financial problems.
                </p>
                <button className="apply-btn-border enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MBA + DBA TAB */}
        <div className={`tab-content ${activeTab === "dba-mba" ? "active" : ""}`} id="dba-mba">
          <div className="spec-container">
            <div className="spec-card">
              <div
                className="card-image"
                style={{ backgroundImage: "url('/edgewood/assets/img/leadership-edgewood-2.webp')" }}
              ></div>
              <div className="card-content">
                <h3>MBA + DBA Leadership</h3>
                <p className="description">
                  Edgewood University Online DBA Learning in MBA + DBA Leadership combines MBA leadership skills with doctoral-level applied research, preparing professionals for senior management, consulting, and enterprise growth roles.
                </p>
                <button className="apply-btn-border enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply Now
                </button>
              </div>
            </div>

            <div className="spec-card">
              <div
                className="card-image"
                style={{ backgroundImage: "url('/edgewood/assets/img/Finance.webp')" }}
              ></div>
              <div className="card-content">
                <h3>MBA + DBA Finance</h3>
                <p className="description">
                  Edgewood University Online DBA Learning in MBA + DBA Finance blends MBA finance fundamentals with advanced doctoral research, supporting strategic investment, risk control, and high-level corporate finance decisions.
                </p>
                <button className="apply-btn-border enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEARNING OUTCOMES ========== */}
      <section id="learning-section" className="learning-outcomes">
        <div className="outcomes-header">
          <h2>LEARNING OUTCOMES OF</h2>
          <div className="line-title">
            <span>Edgewood University Online</span>
          </div>
        </div>

        <div className="outcomes-grid">
          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Optional On-Campus Immersion:</h3>
              <p>
                Experience U.S. campus learning through optional immersion, workshops, faculty meets, and academic resources onsite support.
              </p>
            </div>
          </div>

          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Online Networking Gala:</h3>
              <p>
                Join online networking galas to meet peers, alumni, mentors, and industry leaders worldwide and expand your professional network.
              </p>
            </div>
          </div>

          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Stakeholder Influence:</h3>
              <p>
                Build stakeholder influence by negotiating confidently, managing expectations, presenting data, and leading change initiatives effectively.
              </p>
            </div>
          </div>

          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Conduct Applied Doctoral Research:</h3>
              <p>
                Conduct applied doctoral research using evidence-based methods, solving business problems with measurable outcomes for organisations.
              </p>
            </div>
          </div>

          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Expert Faculty:</h3>
              <p>
                Learn from expert faculty who guide projects, share industry insights, and support academic progress personally to help learners gain the skills they need.
              </p>
            </div>
          </div>

          <div className="outcome-item">
            <div className="icon-circle">
              <img src="/edgewood/assets/img/learning-outcome-edgewood-icon.webp" alt="Icon" />
            </div>
            <div className="outcome-text">
              <h3>Nationally Recognized:</h3>
              <p>
                Earn a nationally recognized U.S. qualification that enhances credibility, promotion prospects, and global mobility faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor for MidScroll Trigger */}
      <div id="midScrollTrigger" ref={midScrollRef} style={{ height: "1px" }}></div>

      {/* ========== SAMPLE CERTIFICATE ========== */}
      <section id="sample-certificate" className="certificate-slider-section">
        <div className="slider-container">
          <div className="certificate-display">
            <div className="certificate-track">
              <img
                src="/edgewood/assets/img/sample-certficate-edgewood.webp"
                className="cert-slide active"
                alt="Certificate"
              />
            </div>
          </div>

          <div className="certificate-content">
            <h2>Sample Certification</h2>
            <p className="sub-heading">Edgewood University Online</p>
            <p className="description">
              Edgewood University Online offers two certifications after completion of their degree: PwC and the certificate of Edgewood University. These two certificates help students prepare for top-board level roles. In the partnership of PwC India, it teaches strategic thinking, handling stakeholders, governance, and compliance through live lectures which teaches students a real-world expertise guidance, which builds confidence to succeed in a business career with Edgewood University Online MBA + DBA and MBA.
            </p>
            <button className="get-degree-btn enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
              Get Degree <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========== HOW TO APPLY ========== */}
      <section className="apply-section" id="how-to-apply">
        <h2>How to Apply for Edgewood University Online Courses</h2>
        <p className="section-desc">
          Students can easily enrol in Edgewood University Online courses. Candidates can conveniently apply by selecting their desired program. Follow these steps to secure admission in the university.
        </p>

        <div className="steps-wrapper">
          <div className="step-card orange">
            <div className="step-number">1</div>
            <h4>Submit Form</h4>
            <p>Fill in and submit your application form online</p>
          </div>

          <div className="step-card blue">
            <div className="step-number">2</div>
            <h4>Expert's Counseling</h4>
            <p>You will receive a call from our expert counselor</p>
          </div>

          <div className="step-card pink">
            <div className="step-number">3</div>
            <h4>Choose University</h4>
            <p>Select the course &amp; university according to your interest</p>
          </div>

          <div className="step-card green">
            <div className="step-number">4</div>
            <h4>Online Payment</h4>
            <p>You need to make a smooth online fee submission</p>
          </div>

          <div className="step-card purple">
            <div className="step-number">5</div>
            <h4>Document Submit</h4>
            <p>You need to upload all the required verified documents.</p>
          </div>

          <div className="step-card orange">
            <div className="step-number">6</div>
            <h4>Admission Confirm</h4>
            <p>Get Confirmation on your Email &amp; Whatsapp</p>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section id="faqs" className="faq-section">
        <div className="faq-header">
          <h2>FAQ-Frequently Asked Question</h2>
        </div>

        <div className="faq-container">
          <div className={`faq-item ${activeFaq === 0 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}>
              <span className="status-icon"></span>
              What is the duration of the Edgewood University Online DBA?
            </button>
            <div className="faq-answer">
              <p>The Edgewood University Online DBA can be completed in as little as 24 months, depending on your pace.</p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}>
              <span className="status-icon"></span>
              Is the Edgewood University Online DBA accredited?
            </button>
            <div className="faq-answer">
              <p>The Edgewood University Online DBA is HLC-accredited, which supports its academic credibility in the U.S.</p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}>
              <span className="status-icon"></span>
              How long does the Edgewood University Online MBA+DBA take to complete?
            </button>
            <div className="faq-answer">
              <p>The Edgewood University Online MBA+DBA can be completed in around 2.5 years, combining both degrees in one structured path.</p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}>
              <span className="status-icon"></span>
              Does the MBA part of Edgewood University's Online MBA+DBA have business accreditation?
            </button>
            <div className="faq-answer">
              <p>Yes. The MBA included in the Edgewood University Online MBA+DBA is ACBSP-accredited, which reflects quality standards in business education.</p>
            </div>
          </div>

          <div className={`faq-item ${activeFaq === 4 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}>
              <span className="status-icon"></span>
              Which is better: Edgewood University Online MBA or MBA+DBA?
            </button>
            <div className="faq-answer">
              <p>Choose Edgewood University Online MBA for leadership and career growth. Choose MBA+DBA if you want advanced expertise, applied research skills, and the “Dr.” title.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER SECTION ========== */}
      <footer id="footer">
        <div className="footer-section container">
          <div className="footer-column">
            <h2>About Us</h2>
            <p>
              SODE Counselling Services LLP guides and counsellors students looking for UGC-DEB approved university online and distance degrees.
            </p>
          </div>
          <div className="footer-column">
            <h2>Links</h2>
            <ul>
              <li><a href="#main-courses">Courses</a></li>
              <li><a href="#c-offered">Approvals</a></li>
              <li><a href="#about-section">About</a></li>
              <li><a href="#faqs">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Legal</h2>
            <p>
              © {new Date().getFullYear()} SODE Counselling Services LLP. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ========== POPUP MODALS (ENQUIRE & BROCHURE) ========== */}
      {/* Enquire Now Popup */}
      <div
        className="popup-overlay"
        id="enquirePopup"
        style={{ display: isEnquireOpen ? "flex" : "none" }}
      >
        <div className="popup-content">
          <span className="close-btn" onClick={() => setIsEnquireOpen(false)}>
            &times;
          </span>
          <div className="p-2">
            <FormWrapper
              title="Enquire Now"
              subtitle="Academic Experts will assist you!"
              courseOptions={courseOptions}
              formNameOverride="Edgewood Enquire Popup Form"
              utmSourceFallback="Organic-edgewood"
              utmMediumFallback="SODE-edgewood-landing-page"
              sourceOverride="Edgewood LP"
            />
          </div>
        </div>
      </div>

      {/* Download Brochure Popup */}
      <div
        className="popup-overlay"
        id="brochurePopup"
        style={{ display: isBrochureOpen ? "flex" : "none" }}
      >
        <div className="popup-content">
          <span className="close-btn" onClick={() => setIsBrochureOpen(false)}>
            &times;
          </span>
          <div className="p-2">
            <FormWrapper
              title="Download Brochure"
              subtitle="Please enter your details to download the brochure:"
              courseOptions={courseOptions}
              formNameOverride="Edgewood Brochure Popup Form"
              utmSourceFallback="Organic-edgewood"
              utmMediumFallback="SODE-edgewood-landing-page"
              sourceOverride="Edgewood LP"
            />
          </div>
        </div>
      </div>

      {/* Gift Coupon Popup */}
      <div
        className="popup-overlay"
        id="couponPopup"
        style={{ display: isCouponOpen ? "flex" : "none" }}
      >
        <div className="popup-content">
          <span className="close-btn" onClick={() => setIsCouponOpen(false)}>
            &times;
          </span>
          <div className="p-2">
            <FormWrapper
              title="Claim Scholarship"
              subtitle="Claim your scholarship up to ₹50,000 now!"
              courseOptions={courseOptions}
              formNameOverride="Edgewood Coupon Form"
              utmSourceFallback="Organic-edgewood"
              utmMediumFallback="SODE-edgewood-landing-page"
              sourceOverride="Edgewood LP"
            />
          </div>
        </div>
      </div>

      {/* ========== STICKY WIDGETS ========== */}
      <div className="sticky_btn_Section">
        <div className="footer_sticky_buttons">
          <a
            href="https://api.whatsapp.com/send/?phone=+917065777755&text=I%20want%20to%20download%20the%20Edgewood%20University%20Online%20Program%20brochure"
            target="_blank"
            rel="noopener noreferrer"
            className="wp_btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "16px", fill: "#fff" }}>
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Get Brochure
          </a>
          <button className="apply_btn enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
            Apply Now <i className="fa fa-angle-double-right"></i>
          </button>
        </div>
      </div>

      <button type="button" className="coupon-btn" onClick={() => setIsCouponOpen(true)}>
        <img src="/edgewood/assets/img/gift.gif" alt="Scholarship Gift" />
      </button>

      <a className="call_fix_image" href="tel:07065777755">
        <img src="/edgewood/assets/img/call_icon.gif" alt="Call Now" />
      </a>
    </div>
  );
}
