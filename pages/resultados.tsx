import type { NextPage } from "next";
import Link from "next/link";
import Script from "next/script";
import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Basal } from "../components/resultados/Basal";
import { Sugestao } from "../components/resultados/Sugestao";
import { DataContext, initialValue } from "../contexts/DataContext";

const Resultados: NextPage = () => {
  const {
    sexo,
    altura,
    peso,
    idade,
    atividade,
    objetivo,
    setSexo,
    setAltura,
    setPeso,
    setIdade,
    setAtividade,
    setObjetivo,
  } = useContext(DataContext);

  const [basal, setBasal] = useState(0);
  const [objetivoMin, setObjvetivoMin] = useState(0);
  const [objetivoMax, setObjvetivoMax] = useState(0);

  useEffect(() => {
    calculoBasal();
    calculoSugestao();
  });

  function calculoBasal() {
    let b = 0;
    if (sexo === "m") {
      b = 66 + 13.8 * peso + 5 * altura - 6.8 * idade;
    } else {
      b = 655 + 9.6 * peso + 1.9 * altura - 4.7 * idade;
    }
    setBasal(b);
  }

  function calculoSugestao() {
    let min = 0;
    let max = 0;
    let manutencao = 0;
    if (atividade == 1) {
      manutencao = basal * 1.2;
    } else if (atividade == 2) {
      if (sexo == "m") manutencao = basal * 1.35;
      else manutencao = basal * 1.3;
    } else if (atividade == 3) {
      if (sexo == "m") manutencao = basal * 1.5;
      else manutencao = basal * 1.45;
    } else {
      if (sexo == "m") manutencao = basal * 1.7;
      else manutencao = basal * 1.65;
    }

    if (objetivo == 1) {
      min = manutencao - 500;
      max = manutencao - 300;
    } else if (objetivo == 2) {
      min = manutencao - 100;
      max = manutencao + 100;
    } else {
      min = manutencao + 300;
      max = manutencao + 500;
    }
    setObjvetivoMin(min);
    setObjvetivoMax(max);
  }

  function resetData() {
    setSexo(initialValue.sexo);
    setPeso(initialValue.peso);
    setAltura(initialValue.altura);
    setIdade(initialValue.idade);
    setAtividade(initialValue.atividade);
    setObjetivo(initialValue.objetivo);
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-col">
        <Header />

        <main className="flex flex-col justify-start items-center mt-2 text-slate-800 text-center mb-4">
          <div className="flex items-center justify-center w-full max-w-5xl rounded-xl p-2">
            <Script
              async
              id="ad-sense-res"
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7819905148018536"
              crossOrigin="anonymous"
            ></Script>
            <ins
              className="adsbygoogle block text-center"
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-7819905148018536"
              data-ad-slot="9732755258"
            ></ins>
          </div>
          <h1 className="text-5xl font-semibold">Calculadora de Calorias</h1>
          <div
            className="flex flex-wrap justify-center gap-4 mt-6 px-4 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
            max-w-5xl py-4 shadow-lg shadow-slate-400/50"
          >
            <h2 className="text-3xl font-semibold w-full">Resultados</h2>
            <Basal basal={basal} />
            <Sugestao min={objetivoMin} max={objetivoMax} />
            <Link href="/" passHref>
              <a
                onClick={() => {
                  resetData();
                }}
              >
                <Button>Novo Cálculo</Button>
              </a>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Resultados;
