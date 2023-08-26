import { useState } from "react";

interface ButtonProps {
  numero: number;
}

const Button = ({ numero }: ButtonProps) => {
  const [_, setValor] = useState(numero);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 
      hover:border-blue-500 w-[60px]"
      onClick={() => setValor(numero)}
    >
      {numero}
    </button>
  );
};

export default Button;
