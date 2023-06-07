import { useContext } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { DataContext } from "../../contexts/DataContext";
import { Input } from "../Input";

export function Altura() {
  const { setAltura } = useContext(DataContext);
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <GiBodyHeight size={24} />
        </span>
        <h2 className="text-2xl mr-1">Altura</h2>
      </header>
      <div className="flex flex-col h-full items-center justify-center mb-2">
        <Input placeholder={"181"} set={setAltura} />
        <span>centímetros</span>
      </div>
    </>
  );
}
