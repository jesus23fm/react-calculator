import { useState } from "react";

interface SymbolProps {
  symbolo: string;
}

const Symbol = ({ symbolo }: SymbolProps) => {
  const [_, setSymbol] = useState(symbolo);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700
       hover:border-blue-500 w-[60px]"
      onClick={() => setSymbol(symbolo)}
    >
      {symbolo}
    </button>
  );
};

export default Symbol;
