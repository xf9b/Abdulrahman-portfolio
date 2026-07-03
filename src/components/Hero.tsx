import profile from "../assets/profile/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="bg-slate-950 pt-40 pb-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            PROFESSIONAL PORTFOLIO
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-tight">
            Abdulrahman
            <br />
            Alotaibi
          </h1>

          <h2 className="mt-6 text-3xl text-slate-200">
            PharmD | Registered Pharmacist | Clinical Pharmacy Enthusiast
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-slate-400">
            Passionate PharmD graduate with diverse clinical training in cardiology,
            coronary care unit, internal medicine, hospital pharmacy, and community
            pharmacy. Dedicated to evidence-based practice, medication safety, and
            improving patient outcomes.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Contact Me
            </a>

            <a
              href="/Abdulrahman_Alotaibi_CV.pdf"
              download
              className="rounded-xl border border-white/10 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:border-cyan-400"
            >
              Download CV
            </a>

            <a
              href="#research"
              className="rounded-xl border border-cyan-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
            >
              View Research
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={profile}
            alt="Abdulrahman Alotaibi"
            className="w-[380px] rounded-3xl border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 transition duration-500 hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}