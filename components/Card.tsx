interface Props {
  Content: React.ElementType;
}

export function Card({ Content }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400/40 p-4 gap-4 text-xl
    lg:basis-[220px] md:basis-[400px] basis-[90%] min-h-[200px]"
    >
      <Content />
    </div>
  );
}
