export default function Research() {
  return (
    <section
  id="research"
  className="bg-slate-900 py-24 text-white"
>
      <div className="mx-auto max-w-6xl px-8">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Research
        </p>

        <h2 className="mt-4 text-4xl font-bold">Published Work</h2>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Peer-Reviewed Publication
          </p>

          <h3 className="mt-4 text-2xl font-bold">
            Health Risks and Toxicological Outcomes of Excessive Vitamin D Intake
          </h3>

          <p className="mt-5 leading-8 text-slate-300">
            Published research in Bali Medical Journal discussing the health
            risks and toxicological outcomes associated with excessive vitamin D intake.
          </p>

          <a
            href="https://balimedicaljournal.ejournals.ca/index.php/bmj/article/view/5803/3635"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            View Publication
          </a>
        </div>
      </div>
    </section>
  );
}