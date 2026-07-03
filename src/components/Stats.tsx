export default function Stats() {
  const stats = [
    ["6", "Clinical Rotations"],
    ["1", "Published Research"],
    ["+50", "Clinical Interventions"],
  ];

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-8 md:grid-cols-4">

        {stats.map(([number, label]) => (

          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-400"
          >

            <h3 className="text-4xl font-bold text-cyan-400">
              {number}
            </h3>

            <p className="mt-3 text-slate-300">
              {label}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}