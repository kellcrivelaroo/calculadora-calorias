import { useContext } from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { DataContext } from "../../contexts/DataContext";
import { Input } from "../Input";

export function Idade() {
  const { setIdade } = useContext(DataContext);
  return (
    <>
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <BsHourglassSplit size={24} />
        </span>
        <h2 className="text-2xl mr-3">Idade</h2>
      </header>
      <div className="flex flex-col h-full items-center justify-center mb-2">
        <Input placeholder={"21"} set={setIdade} />
        <span>anos</span>
      </div>
    </>
  );
}
