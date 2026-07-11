"use client";

import FormWrapper from "@/components/forms/FormWrapper";

export default function IIITBLeadForm() {
  const iiitbCourses = [
    { value: "MSC", label: "M.Sc. in Data Science" },
    { value: "MSC", label: "M.Sc. in Machine Learning & AI" },
    { value: "PG PROGRAMS", label: "Executive Programme in Generative AI for Leaders" },
    { value: "PG PROGRAMS", label: "Executive Post Graduate Programme in Applied AI and Agentic AI" }
  ];

  return (
    <section id="lead-form" className="iiitb-form-section">
      <div className="iiitb-form-container">
        {/* Information Left */}
        <div className="iiitb-form-info">
          <h2 className="iiitb-form-info-title">Secure Your Admission Spot</h2>
          <p className="iiitb-form-info-desc">
            Complete the form to get program-specific details, speak with our
            career counselors, and check your eligibility for scholarship benefits
            of up to 20%.
          </p>

          <div className="iiitb-bullets">
            <div className="iiitb-bullet-item">
              <span className="iiitb-bullet-icon">✓</span>
              <span className="iiitb-bullet-text">Detailed Curriculum &amp; Syllabus PDF download</span>
            </div>
            <div className="iiitb-bullet-item">
              <span className="iiitb-bullet-icon">✓</span>
              <span className="iiitb-bullet-text">1-on-1 counseling with industry experts</span>
            </div>
            <div className="iiitb-bullet-item">
              <span className="iiitb-bullet-icon">✓</span>
              <span className="iiitb-bullet-text">Flexible EMI payment options &amp; financing assistance</span>
            </div>
          </div>
        </div>

        {/* Lead Form Card Right */}
        <div className="iiitb-form-card">
          <FormWrapper
            title="Request Program Information"
            subtitle="Fill in your details below"
            courseOptions={iiitbCourses}
          />
        </div>
      </div>
    </section>
  );
}
