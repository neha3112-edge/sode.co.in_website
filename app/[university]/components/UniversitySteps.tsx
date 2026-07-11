import { UniversityData } from "@/lib/universities-data";

export default function UniversitySteps({ data }: { data: UniversityData }) {
  if (!data.applySteps || data.applySteps.length === 0) return null;

  // Inline color helper matching design cards
  const getColorClasses = (colorClass: string) => {
    switch (colorClass) {
      case "orange":
        return {
          bg: "bg-orange-50 border-orange-100",
          num: "bg-orange-500 text-white"
        };
      case "blue":
        return {
          bg: "bg-blue-50 border-blue-100",
          num: "bg-blue-500 text-white"
        };
      case "pink":
        return {
          bg: "bg-pink-50 border-pink-100",
          num: "bg-pink-500 text-white"
        };
      case "green":
        return {
          bg: "bg-green-50 border-green-100",
          num: "bg-green-500 text-white"
        };
      case "purple":
        return {
          bg: "bg-purple-50 border-purple-100",
          num: "bg-purple-500 text-white"
        };
      default:
        return {
          bg: "bg-slate-50 border-slate-100",
          num: "bg-slate-500 text-white"
        };
    }
  };

  return (
    <section className="uni-steps-section py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800">
            How to Apply for {data.name} Online Courses
          </h2>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto text-sm leading-relaxed">
            Students can easily enrol in {data.name} Online courses. Candidates can conveniently apply by selecting their desired program. Follow these steps to secure admission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.applySteps.map((step, idx) => {
            const colors = getColorClasses(step.colorClass);
            return (
              <div key={idx} className={`p-6 rounded-2xl border ${colors.bg} flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}>
                <div className={`w-8 h-8 rounded-full ${colors.num} flex items-center justify-center font-bold text-sm`}>
                  {step.number}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
