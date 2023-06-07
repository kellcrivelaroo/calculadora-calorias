import { useContext } from "react";
import { FaWeight } from "react-icons/fa";
import { DataContext } from "../../contexts/DataContext";
import { Input } from "../Input";

export function Peso() {
  const { setPeso } = useContext(DataContext);
  return (
    <>
      <header className="flex items-center gap-2">
        <span>
          <FaWeight size={24} />
        </span>
        <h2 className="text-2xl mr-1">Peso</h2>
      </header>
      <div className="flex flex-col h-full items-center justify-center mb-2">
        <Input placeholder={"85"} set={setPeso} focus />
        <span>quilos</span>
      </div>
    </>
  );
}
