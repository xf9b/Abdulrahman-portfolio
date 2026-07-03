import { HeartPulse, Hospital, Building2, Pill } from "lucide-react";

const timeline = [
  {
    place: "Prince Sultan Cardiac Center",
    role: "Adult Cardiology, Coronary Care Unit & Ambulatory Care",
    period: "2025-2026",
    icon: HeartPulse,
    points: [
      "Participated in adult cardiology and CCU patient care discussions.",
      "Reviewed ACS, heart failure, anticoagulation, and antiplatelet therapy.",
      "Contributed to evidence-based therapeutic recommendations.",
    ],
  },
  {
    place: "King Saud Medical City",
    role: "Internal Medicine",
    period: "2025-2026",
    icon: Hospital,
    points: [
      "Joined internal medicine rounds and case discussions.",
      "Prepared SOAP notes and pharmacotherapy recommendations.",
      "Reviewed infectious diseases, stroke, diabetes emergencies, and hypertension cases.",
    ],
  },
  {
    place: "Riyadh Third Health Cluster",
    role: "Inpatient, Outpatient, Drug Information & Administration",
    period: "2025-2026",
    icon: Building2,
    points: [
      "Gained experience in dispensing, formulary processes, and pharmacy workflow.",
      "Handled drug information inquiries using evidence-based resources.",
      "Developed understanding of medication safety and pharmacy operations.",
    ],
  },
  {
    place: "Innova Pharmacy",
    role: "Community Pharmacy",
    period: "2026",
    icon: Pill,
    points: [
      "Provided patient counseling and OTC recommendations.",
      "Practiced prescription screening and medication education.",
      "Improved communication and patient-centered care skills.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-8">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Clinical Training
        </p>

        <h2 className="mt-4 text-4xl font-bold">Internship Timeline</h2>

        <div className="mt-14 space-y-10 border-l border-cyan-400/30 pl-8">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.place} className="relative">
                <div className="absolute -left-[54px] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-slate-900">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{item.place}</h3>
                      <p className="mt-2 text-cyan-300">{item.role}</p>
                    </div>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}