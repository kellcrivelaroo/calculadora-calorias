import { FaDumbbell } from "react-icons/fa";
import { CardAtividadeButton } from "./card-content/CardAtividadeButton";
import sedentario from "../assets/sedentario.json";
import ativo from "../assets/ativo.json";
import trabalhadores from "../assets/worker.json";
import entregador from "../assets/entregador.json";
import { useState } from "react";

export const nivelAtividade = {
  1: {
    title: "Atividade Leve",
    description:
      "Trabalha sentado na maior parte do tempo ou não costuma praticar atividades físicas.",
    image: sedentario,
  },
  2: {
    title: "Moderada",
    description:
      "Trabalha em pé na maior parte do tempo ou pratica atividades físicas regularmente.",
    image: entregador,
  },
  3: {
    title: "Intensa",
    description:
      "Seu trabalho exige que se locomova bastante e pratica atividades físicas regularmente.",
    image: ativo,
  },
  4: {
    title: "Muito intensa",
    description:
      "Trabalho que exige atividade física intensa como por exemplo, pedreiro ou atleta.",
    image: trabalhadores,
  },
};

export function CardAtividade() {
  const [atividadeSelecionada, setAtividadeSelecionada] = useState<string>("");

  return (
    <div
      className="flex flex-col items-center rounded-lg border-[1px] border-slate-400/40 p-4 gap-4 text-xl
    basis-[90%] md:basis-[400px] lg:basis-[944px]"
    >
      <header className="flex items-center justify-center">
        <span className="pt-1 ml-2 md:ml-0 mr-0 md:mr-2">
          <FaDumbbell />
        </span>
        <h2 className="text-2xl mr-1 w-[220px] md:w-fit">
          Nível de Atividade Diária
        </h2>
      </header>
      <div className="flex flex-wrap w-full items-center justify-center gap-4">
        {Object.entries(nivelAtividade).map(([key, value]) => {
          return (
            <CardAtividadeButton
              key={key}
              id={Number(key)}
              imagem={value.image}
              type={value.title}
              description={value.description}
            />
          );
        })}
      </div>
    </div>
  );
}
