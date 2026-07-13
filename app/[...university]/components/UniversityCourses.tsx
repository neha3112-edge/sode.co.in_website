"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

interface UniversityCoursesProps {
  data: EnrichedUniversityData;
  onOpenBrochure: (pdfPath: string) => void;
  onOpenEnquire: () => void;
}

export default function UniversityCourses({ data, onOpenBrochure, onOpenEnquire }: UniversityCoursesProps) {
  return (
    <section id="main-courses" className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">Courses Offered</h2>
        <p className="section-subtitle">By {data.name}</p>

        <div className="courses-grid">
          {data.coursesList.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.img} alt={course.title} className="course-img" />
              <div className="course-content">
                <h3>{course.title}</h3>
                <div className="duration_list">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: "20px" }}>
                    <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                  </svg>
                  <b> Duration:</b> {course.duration}
                </div>
                <p className="course-desc">{course.desc}</p>
                <div className="course-actions">
                  <button
                    className="btn brochure downloadBrochureBtn"
                    onClick={() => onOpenBrochure(course.pdf)}
                  >
                    Download Brochure <i className="fa fa-download"></i>
                  </button>
                  <button className="btn apply enquireNowBtn" onClick={onOpenEnquire}>
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
