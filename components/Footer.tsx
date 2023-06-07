export function Footer() {
  return (
    <div>
      <div
        id="f-HR"
        className="border-t-[1px] border-slate-400 h-2 mx-6 mt-2"
      ></div>
      <footer className="flex flex-col justify-end grow items-center text-center text-slate-600 pb-2">
        <a
          href="http://github.com/kellcrivelaro"
          target="_blank"
          rel="author noreferrer"
          className="hover:text-sky-600"
        >
          Feito por Kell.
        </a>
      </footer>
    </div>
  );
}
