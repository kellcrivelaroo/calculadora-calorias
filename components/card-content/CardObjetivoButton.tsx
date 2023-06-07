import { useContext, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { DataContext } from "../../contexts/DataContext";

interface Props {
  id: number;
  imagem: any;
  type: string;
}

export function CardObjetivoButton({ id, imagem, type }: Props) {
  const { objetivo, setObjetivo } = useContext(DataContext);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    lottieRef.current.stop();
  }, []);

  return (
    <button
      className={`flex flex-col flex-wrap items-center border-[1px] transition-colors duration-300 grow
        ease-linear rounded-lg p-2 basis-[100%] lg:basis-[30%] ${
          objetivo == id
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
      onClick={(e) => {
        e.preventDefault();
        console.log(id);
        setObjetivo(id);
        lottieRef.current.stop();
        lottieRef.current.play();
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-40">
          <Lottie
            animationData={imagem}
            lottieRef={lottieRef}
            autoPlay={false}
            loop={false}
          />
        </div>
        <h2
          className={`text-xl font-semibold pb-2 ${
            objetivo == id && "text-sky-600"
          }`}
        >
          {type}
        </h2>
      </div>
    </button>
  );
}
