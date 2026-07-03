export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Abdulrahman Alotaibi. Built with React & Tailwind CSS.
    </footer>
  );
}