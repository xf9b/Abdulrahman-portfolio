const certificates = [
  "Basic Life Support (SHA)",
  "McKinsey.org Forward Program",
  "Patient Safety Saudi Commission for Health Specialties",
  "Infection Prevention and Control Saudi Commission for Health Specialties",
  "Code of Ethics Saudi Commission for Health Specialtiess",
  "Principles of Clinical Pharmacology National Institutes of Health",
  "Introduction to the Principles and Practice of Clinical Research National Institutes of Health",
];

export default function Certificates() {
  return (
 <section
  id="certificates"
  className="bg-slate-900 py-24 text-white"
>
      <div className="mx-auto max-w-7xl px-8">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold">Professional Development</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/60"
            >
              <p className="text-lg font-semibold">{certificate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}