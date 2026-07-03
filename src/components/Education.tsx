export default function Education() {
  return (
    <section
  id="education"
  className="bg-slate-900 py-24 text-white"
>
      <div className="mx-auto max-w-7xl px-8">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Education & Licensure
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Academic Background
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10">
            <h3 className="text-2xl font-bold">
              Doctor of Pharmacy (PharmD)
            </h3>

            <p className="mt-3 text-cyan-300">
              Shaqra University
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Graduated with a Doctor of Pharmacy (PharmD) degree, completing
              comprehensive academic and clinical training in pharmaceutical
              sciences, pharmacotherapy, patient care, clinical pharmacy,
              medication safety, and evidence-based practice.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Professional Licensure
            </h3>

            <p className="mt-3 text-cyan-300">
              Saudi Commission for Health Specialties (SCFHS)
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Licensed Pharmacist authorized to practice pharmacy in the
              Kingdom of Saudi Arabia with a valid professional license issued
              by the Saudi Commission for Health Specialties.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}