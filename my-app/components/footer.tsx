export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/70 bg-white/70 px-4 py-8 text-center text-sm text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300 md:px-8">
      <p> Smon Kidane · {new Date().getFullYear()}</p>
    </footer>
  );
}
