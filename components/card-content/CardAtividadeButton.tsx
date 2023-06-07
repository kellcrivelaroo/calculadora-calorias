import { useContext, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { DataContext } from "../../contexts/DataContext";
// import Lottie from "react-lottie";

interface Props {
  id: number;
  imagem: any;
  type: string;
  description: string;
  // atividadeSelecionada: string;
  // setAtividadeSelecionada: (nivel: string) => void;
}

export function CardAtividadeButton({ id, imagem, type, description }: Props) {
  const { atividade, setAtividade } = useContext(DataContext);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    lottieRef.current.stop();
  }, []);

  return (
    <button
      className={`flex flex-col items-center border-[1px] transition-colors duration-300 grow
        ease-linear rounded-lg p-2 h-[295px] basis-[100%] md:basis-[40%] lg:basis-[20%] ${
          atividade == id
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
      onClick={(e) => {
        e.preventDefault();
        setAtividade(id);
        lottieRef.current.stop();
        lottieRef.current.play();
        setTimeout(() => {
          lottieRef.current.stop();
        }, 2000);
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-36">
          <Lottie
            animationData={imagem}
            lottieRef={lottieRef}
            autoPlay={false}
            loop={false}
            size={12}
          />
        </div>

        <h2
          className={`text-xl font-semibold ${
            atividade == id && "text-sky-600"
          }`}
        >
          {type}
        </h2>
        <p className="text-base leading-5">{description}</p>
      </div>
    </button>
  );
}
