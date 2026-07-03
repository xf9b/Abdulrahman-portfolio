export default function Contact() {
  return (
    <section
  id="contact"
  className="bg-slate-950 py-24 text-white"
>
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">Let’s Connect</h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Open to opportunities in hospital pharmacy, clinical pharmacy,
            pharmaceutical companies, medical affairs, and healthcare-related roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=a.f.alrouqi@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
>
  Email Me
</a> 
<a
  href="/Abdulrahman_Alotaibi_CV.pdf"
  download
  className="rounded-xl border border-white/10 px-6 py-3 hover:border-cyan-400"
>
  Download CV
</a>
            <a
              href="https://www.linkedin.com/in/abdulrahman-alotaibi-pharmd"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-6 py-3 hover:border-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}