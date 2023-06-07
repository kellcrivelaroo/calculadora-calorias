import { createContext, ReactNode, useState } from "react";

type DataContextProps = {
  children: ReactNode;
};

type DataContextType = {
  sexo: string;
  setSexo: (newSexo: string) => void;
  idade: number;
  setIdade: (newIdade: number) => void;
  altura: number;
  setAltura: (newAltura: number) => void;
  peso: number;
  setPeso: (newPeso: number) => void;
  atividade: number;
  setAtividade: (newAtividade: number) => void;
  objetivo: number;
  setObjetivo: (newObjetivo: number) => void;
  validation: boolean;
  setValidation: (newValidation: boolean) => void;
};

export const initialValue = {
  sexo: "m",
  setSexo: () => {},
  idade: 0,
  setIdade: () => {},
  altura: 0,
  setAltura: () => {},
  peso: 0,
  setPeso: () => {},
  atividade: 1,
  setAtividade: () => {},
  objetivo: 1,
  setObjetivo: () => {},
  validation: false,
  setValidation: () => {},
};

export const DataContext = createContext<DataContextType>(initialValue);

export const DataContextProvider = ({ children }: DataContextProps) => {
  const [sexo, setSexo] = useState(initialValue.sexo);
  const [idade, setIdade] = useState(initialValue.idade);
  const [altura, setAltura] = useState(initialValue.altura);
  const [peso, setPeso] = useState(initialValue.peso);
  const [atividade, setAtividade] = useState(initialValue.atividade);
  const [objetivo, setObjetivo] = useState(initialValue.objetivo);
  const [validation, setValidation] = useState(initialValue.validation);

  return (
    <DataContext.Provider
      value={{
        sexo,
        setSexo,
        idade,
        setIdade,
        altura,
        setAltura,
        peso,
        setPeso,
        atividade,
        setAtividade,
        objetivo,
        setObjetivo,
        validation,
        setValidation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
