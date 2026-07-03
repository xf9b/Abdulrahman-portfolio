export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 text-white">
        <a href="#" className="text-lg font-bold">
  Abdulrahman<span className="text-cyan-400"> Alotaibi</span>
</a>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#research" className="hover:text-cyan-400">Research</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#certificates" className="hover:text-cyan-400">Certificates</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}