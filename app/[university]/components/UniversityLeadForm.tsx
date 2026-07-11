"use client";

import FormWrapper from "@/components/forms/FormWrapper";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityLeadForm({ data }: { data: UniversityData }) {
  return (
    <section id="lead-form" className="uni-form-section">
      <div className="uni-form-container">
        {/* Information Left */}
        <div className="uni-form-info">
          <h2 className="uni-form-info-title">Secure Your Admission Spot</h2>
          <p className="uni-form-info-desc">
            Complete the form to get program-specific details, speak with our
            career counselors, and check your eligibility for scholarship benefits
            of up to 20%.
          </p>

          <div className="uni-bullets">
            <div className="uni-bullet-item">
              <span className="uni-bullet-icon">✓</span>
              <span className="uni-bullet-text">Detailed Curriculum &amp; Syllabus PDF download</span>
            </div>
            <div className="uni-bullet-item">
              <span className="uni-bullet-icon">✓</span>
              <span className="uni-bullet-text">1-on-1 counseling with industry experts</span>
            </div>
            <div className="uni-bullet-item">
              <span className="uni-bullet-icon">✓</span>
              <span className="uni-bullet-text">Flexible EMI payment options &amp; financing assistance</span>
            </div>
          </div>
        </div>

        {/* Lead Form Card Right */}
        <div className="uni-form-card">
          <FormWrapper
            title="Request Program Information"
            subtitle="Fill in your details below"
            courseOptions={data.coursesOptions}
          />
        </div>
      </div>
    </section>
  );
}
