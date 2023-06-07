import Lottie from "lottie-react";
import Man from "../../assets/man-avatar.json";
import Woman from "../../assets/woman-avatar.json";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useState, useRef, useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export function Sexo() {
  const { sexo, setSexo } = useContext(DataContext);
  const manLottie = useRef<any>(null);
  const womanLottie = useRef<any>(null);

  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <BsGenderAmbiguous size={24} />
        </span>
        <h2 className="text-2xl mr-4">Sexo</h2>
      </header>
      <div className="flex gap-2">
        <button
          className={`flex flex-col items-center border-[1px] transition-colors duration-300
        ease-linear rounded-lg p-2 w-24 font-semibold ${
          sexo === "m"
            ? "bg-slate-200 border-slate-400 text-sky-600"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
          onClick={(e) => {
            e.preventDefault();
            setSexo("m");
            manLottie.current.stop();
            manLottie.current.play();
          }}
        >
          <Lottie
            animationData={Man}
            lottieRef={manLottie}
            autoPlay={false}
            loop={false}
          />
          Homem
        </button>
        <button
          className={`flex flex-col items-center border-[1px] transition-colors duration-300
        ease-linear rounded-lg p-2 w-24 font-semibold ${
          sexo === "f"
            ? "bg-slate-200 border-slate-400 text-pink-500"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
          onClick={(e) => {
            e.preventDefault();
            setSexo("f");
            womanLottie.current.stop();
            womanLottie.current.play();
          }}
        >
          <Lottie animationData={Woman} lottieRef={womanLottie} />
          Mulher
        </button>
      </div>
    </>
  );
}
