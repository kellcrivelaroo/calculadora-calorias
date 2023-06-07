import { ImTarget } from "react-icons/im";
import { useState } from "react";
import { CardObjetivoButton } from "./card-content/CardObjetivoButton";

import magro from "../assets/corredor.json";
import manutencao from "../assets/manutencao.json";
import atleta from "../assets/atleta.json";

export const objetivos = {
  1: {
    title: "Emagrecimento",
    image: magro,
  },
  2: {
    title: "Manutenção do Peso",
    image: manutencao,
  },
  3: {
    title: "Ganho de Massa Muscular",
    image: atleta,
  },
};

export function CardObjetivo() {
  const [objetivoSelecionado, setObjetivoSelecionado] = useState<string>("");

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400/40 p-4 gap-4 text-xl
    basis-[90%] md:basis-[400px] lg:basis-[944px]"
    >
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <ImTarget size={24} />
        </span>
        <h2 className="text-2xl mr-1">Objetivo Principal</h2>
      </header>
      <div className="flex flex-wrap w-full items-center justify-center gap-4">
        {Object.entries(objetivos).map(([key, value]) => {
          return (
            <CardObjetivoButton
              key={key}
              id={Number(key)}
              imagem={value.image}
              type={value.title}
            />
          );
        })}
      </div>
    </div>
  );
}
