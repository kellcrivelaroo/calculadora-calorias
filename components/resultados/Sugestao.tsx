import AnimatedNumber from "animated-number-react";

interface Props {
  min: number;
  max: number;
}

export function Sugestao({ min, max }: Props) {
  return (
    <div
      className="flex flex-col items-center rounded-lg border-[1px] border-slate-400/40 p-4 text-xl
    basis-[90%] md:basis-[48%]"
    >
      <header className="flex items-center justify-center gap-2">
        <span className="pt-1">{/* <FaDumbbell /> */}</span>
        <h2 className="text-2xl mr-1 font-semibold">
          Sugestão de Calorias Diárias
        </h2>
      </header>
      <div className="flex items-end justify-center gap-2 text-sky-600 font-semibold mt-6 mb-1 flex-wrap">
        <AnimatedNumber
          value={min}
          formatValue={(v: number) => v.toFixed(0)}
          duration={750}
          delay={0}
          className="text-4xl"
        />
        <span>até</span>
        <AnimatedNumber
          value={max}
          formatValue={(v: number) => v.toFixed(0)}
          duration={750}
          delay={0}
          className="text-4xl"
        />
        <span>kcal</span>
      </div>
      <p className="text-lg">
        Calorias que você deve ingerir por dia para chegar no Objetivo escolhido
        na calculadora (inclui todos os gastos e o déficit calórico).
      </p>
    </div>
  );
}
