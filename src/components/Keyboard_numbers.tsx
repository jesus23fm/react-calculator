import Display from "./Display";
import { useState } from "react";

{
  /*INSERCION DE NUMEROS*/
}
interface ButtonProps {
  numero: string[];
  onClick: () => void;
}

const Button = ({ numero, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[60px]"
    >
      {numero}
    </button>
  );
};

interface SymbolProps {
  symbolo: string;
  onClick_symbolo: () => void;
}

{
  /*INSERCION DE SYMBOLOS*/
}
const Symbol = ({ symbolo, onClick_symbolo }: SymbolProps) => {
  return (
    <button
      onClick={onClick_symbolo}
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[60px]"
    >
      {symbolo}
    </button>
  );
};

let cadena_antigua: string[] = [];

const Keyboard_numbers = () => {
  const [symPulsado, setSymPulsado] = useState<string[]>([]);

  let cadena: string[] = symPulsado;
  let ultimo_pulsado = cadena[cadena.length - 1];

  if (symPulsado.length === 0) {
    cadena = ["0"];
  }
  if (ultimo_pulsado === "=") {
    cadena_antigua = cadena.slice(0, -1);
    let x = (
      "" +
      cadena.join("").replace("x", "*").replace("÷", "/") +
      ""
    ).slice(0, -1);
    try {
      console.log(eval(x));
      cadena = [eval(x)];
    } catch (error) {
      /*console.log(error);*/
      cadena = ["Expresión invalida"];
      cadena_antigua = [];
    }
  }

  if (ultimo_pulsado === "AC") {
    cadena = [];
    cadena_antigua = [];
    setSymPulsado([]);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="grid">
        <div className="font-bold text-white text-2xl bg-black 	">
          <Display symbolos={cadena} antigua={cadena_antigua} />
        </div>
        <div className="space-x-1 space-y-1 bg-black">
          <Button
            numero={["9"]}
            onClick={() => setSymPulsado(symPulsado.concat("9"))}
          />
          <Button
            numero={["8"]}
            onClick={() => setSymPulsado(symPulsado.concat("8"))}
          />
          <Button
            numero={["7"]}
            onClick={() => setSymPulsado(symPulsado.concat("7"))}
          />
          <Symbol
            symbolo="+"
            onClick_symbolo={() => setSymPulsado(cadena.concat("+"))}
          />
        </div>

        <div className="space-x-1 space-y-1 bg-black">
          <Button
            numero={["6"]}
            onClick={() => setSymPulsado(symPulsado.concat("6"))}
          />
          <Button
            numero={["5"]}
            onClick={() => setSymPulsado(symPulsado.concat("5"))}
          />
          <Button
            numero={["4"]}
            onClick={() => setSymPulsado(symPulsado.concat("4"))}
          />
          <Symbol
            symbolo="-"
            onClick_symbolo={() => setSymPulsado(cadena.concat("-"))}
          />
        </div>

        <div className="space-x-1 space-y-1 bg-black">
          <Button
            numero={["3"]}
            onClick={() => setSymPulsado(symPulsado.concat("3"))}
          />
          <Button
            numero={["2"]}
            onClick={() => setSymPulsado(symPulsado.concat("2"))}
          />
          <Button
            numero={["1"]}
            onClick={() => setSymPulsado(symPulsado.concat("1"))}
          />
          <Symbol
            symbolo="x"
            onClick_symbolo={() => setSymPulsado(cadena.concat("x"))}
          />
        </div>

        <div className="space-x-1 space-y-1 bg-black">
          <Button
            numero={["0"]}
            onClick={() => setSymPulsado(symPulsado.concat("0"))}
          />
          <Symbol
            symbolo="="
            onClick_symbolo={() => setSymPulsado(cadena.concat("="))}
          />
          <Symbol
            symbolo="AC"
            onClick_symbolo={() => setSymPulsado(cadena.concat("AC"))}
          />
          <Symbol
            symbolo="÷"
            onClick_symbolo={() => setSymPulsado(cadena.concat("÷"))}
          />
        </div>
      </div>
    </div>
  );
};

export default Keyboard_numbers;
