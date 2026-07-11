import { Metadata } from "next";
import IIITBHero from "./components/IIITBHero";
import IIITBLeadForm from "./components/IIITBLeadForm";

export const metadata: Metadata = {
  title: "Online Master of Science & Executive Programs | IIIT Bangalore – SODE",
  description:
    "Accelerate your career in tech with Master of Science and Executive programs in Data Science, Machine Learning, Applied AI, and Agentic AI from IIIT Bangalore.",
  alternates: {
    canonical: "https://sode.co.in/iiitb",
  },
  openGraph: {
    title: "Online Master of Science & Executive Programs | IIIT Bangalore – SODE",
    description:
      "Accelerate your career in tech with Master of Science and Executive programs in Data Science, Machine Learning, Applied AI, and Agentic AI from IIIT Bangalore.",
    type: "website",
  },
};

export default function IIITBPage() {
  return (
    <>
      <IIITBHero />

      {/* Highlights Grid Scoped */}
      <section className="iiitb-highlights">
        <div className="iiitb-section-heading">
          <h2 className="iiitb-section-title">Why Choose IIIT Bangalore?</h2>
          <p className="iiitb-section-subtitle">
            Acquire cutting-edge credentials designed to accelerate career growth.
          </p>
        </div>

        <div className="iiitb-highlights-grid">
          <div className="iiitb-highlight-card">
            <div className="iiitb-highlight-icon-box">
              <span className="font-bold text-lg">★</span>
            </div>
            <h3 className="iiitb-highlight-title">Top Tier Faculty</h3>
            <p className="iiitb-highlight-desc">
              Learn directly from world-class university professors and seasoned technology leaders.
            </p>
          </div>

          <div className="iiitb-highlight-card">
            <div className="iiitb-highlight-icon-box">
              <span className="font-bold text-lg">⏱</span>
            </div>
            <h3 className="iiitb-highlight-title">Flexible Schedule</h3>
            <p className="iiitb-highlight-desc">
              Balance learning and work with self-paced online modules combined with weekend live sessions.
            </p>
          </div>

          <div className="iiitb-highlight-card">
            <div className="iiitb-highlight-icon-box">
              <span className="font-bold text-lg">👥</span>
            </div>
            <h3 className="iiitb-highlight-title">Alumni Network</h3>
            <p className="iiitb-highlight-desc">
              Join a distinguished community of tech leaders and pioneers across the globe.
            </p>
          </div>

          <div className="iiitb-highlight-card">
            <div className="iiitb-highlight-icon-box">
              <span className="font-bold text-lg">💼</span>
            </div>
            <h3 className="iiitb-highlight-title">Career Boost</h3>
            <p className="iiitb-highlight-desc">
              Get resume critique, interview mockups, and career guidance sessions from industry mentors.
            </p>
          </div>
        </div>
      </section>

      <IIITBLeadForm />
    </>
  );
}
