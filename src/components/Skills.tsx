const skills = [
  "Clinical Pharmacy",
  "Pharmacotherapy",
  "Medication Safety",
  "Patient Counseling",
  "Drug Information",
  "Evidence-Based Practice",
  "Internal Medicine",
  "Cardiology",
  "Coronary Care Unit (CCU)",
  "Community Pharmacy",
  "Hospital Pharmacy",
  "Clinical Documentation",
  "SOAP Notes",
  "Microsoft Office",
  "Communication",
  "Teamwork",
];

export default function Skills() {
  return (
    <section
  id="skills"
  className="bg-slate-950 py-24 text-white"
>
      <div className="mx-auto max-w-6xl px-8">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Professional Skills
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-cyan-400/30 bg-white/5 px-5 py-3 text-sm transition hover:bg-cyan-400 hover:text-slate-950"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}