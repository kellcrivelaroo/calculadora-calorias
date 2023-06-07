export function Button({ children }: any) {
  return (
    <div
      className="relative text-3xl px-10 pt-2 pb-[10px] rounded-full border-2 hover:text-sky-600 border-slate-800
    hover:shadow-[0px_0px_30px] hover:border-sky-600 hover:shadow-sky-500 transition-all duration-300 tracking-wide
    group mt-2 mb-1 font-semibold"
    >
      <i
        className="absolute top-[-2px] left-[120%] h-[2.5px] w-6 translate-x-[-50%] skew-x-[310deg]
      transition-all duration-300 group-hover:left-[25%] group-hover:bg-bgcolor ease-in"
      ></i>
      <i
        className="absolute bottom-[-2px] left-[-20%] h-[2.5px] w-6 translate-x-[-50%] skew-x-[310deg]
      transition-all duration-300 group-hover:left-[75%] group-hover:bg-bgcolor ease-in"
      ></i>
      {children}
    </div>
  );
}
