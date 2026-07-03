export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-8">

        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Clinical Pharmacist with Diverse Hospital Training
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Professional Summary</h3>

            <p className="mt-5 leading-8 text-slate-300">
              PharmD graduate and Registered Pharmacist with comprehensive
              internship experience across tertiary care hospitals, coronary
              care, internal medicine, ambulatory care, inpatient pharmacy,
              outpatient pharmacy, community pharmacy and drug information.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Passionate about evidence-based medicine, medication safety,
              interdisciplinary collaboration and continuous professional
              development.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-semibold">
              Areas of Interest
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Clinical Pharmacy",
                "Cardiology",
                "Coronary Care",
                "Internal Medicine",
                "Medication Safety",
                "Evidence-Based Practice",
                "Medical Affairs",
                "Hospital Pharmacy",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}