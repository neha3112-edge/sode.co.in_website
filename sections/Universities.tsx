import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// Mocking logo texts since image files are missing for universities
const unis = [
  "AMITY UNIVERSITY", "CHANDIGARH UNIVERSITY", "JAIN UNIVERSITY", 
  "MANIPAL UNIVERSITY", "NMIMS", "SYMBIOSIS", "LPU", "UPES", 
  "DY PATIL", "IGNOU", "ANNAMALAI", "UTTARANCHAL", "VIVEKANANDA",
  "SHARDA UNIVERSITY", "GALGOTIAS", "GLA UNIVERSITY"
];

export function Universities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading 
          title="INDIA'S TOP LEADING UNIVERSITIES" 
          subtitle="PARTNER UNIVERSITIES FOR 1 YEAR MBA"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {unis.map((uni, idx) => (
            <div key={idx} className="bg-white border hover:border-primary shadow-sm rounded-lg p-4 flex items-center justify-center text-center h-24 hover:shadow-md transition-all">
              <span className="font-bold text-gray-700 text-xs md:text-sm tracking-wide">{uni}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
            Get Admission at Dream Univ
          </Button>
        </div>
      </Container>
    </section>
  );
}
