export default function Footer() {
  return (
    <footer className="py-20 bg-background-light dark:bg-background-dark text-center border-t border-gray-200 dark:border-gray-800">
      <div className="mb-8">
        <h2 className="font-display text-3xl tablet:text-5xl tracking-tighter text-primary dark:text-white select-none">
          <span className="font-black">MINI</span>{" "}
          <span className="font-light">home</span>
        </h2>
      </div>
      <div className="flex justify-center gap-6 mb-8 text-gray-500 text-sm">
        <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
          이용약관
        </a>
        <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
          개인정보처리방침
        </a>
        <a className="hover:text-black dark:hover:text-white transition-colors" href="#">
          Instagram
        </a>
      </div>
      <p className="text-[10px] tablet:text-xs text-gray-400 dark:text-gray-500 tracking-widest font-mono">
        © MINI home Agency. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

