interface DivProps {
  numero1: number;
  numero2: number;
}

const Div = ({ numero1, numero2 }: DivProps) => {
  return <>{numero1 / numero2}</>;
};

export default Div;
