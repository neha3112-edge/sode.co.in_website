import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Working Professional",
    content: "The 1-year MBA program helped me get the much-needed promotion at my firm. The flexible schedule allowed me to manage work and studies perfectly."
  },
  {
    name: "Priya Desai",
    role: "Career Switcher",
    content: "I wanted to move from IT to Management. This course gave me the right foundation and the career support helped me land a great role."
  },
  {
    name: "Rohan Gupta",
    role: "Entrepreneur",
    content: "Learning strategy and leadership from global faculty changed how I run my startup. Highly recommended for anyone looking to upskill quickly."
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-sky-blue overflow-hidden">
      <Container>
        <SectionHeading title="HAPPY STUDENTS' VOICE" />

        <div className="flex overflow-x-auto pb-10 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x hide-scroll">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 min-w-75 max-w-100 shrink-0 snap-center shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-6">
                <User size={32} />
              </div>
              <h4 className="font-bold text-dark-blue text-lg">{item.name}</h4>
              <p className="text-sm text-primary font-medium mb-4">{item.role}</p>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFBB00" stroke="#FFBB00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>

              <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-dark-blue"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </Container>
    </section>
  );
}
