interface MulProps {
  numero1: number;
  numero2: number;
}

const Mul = ({ numero1, numero2 }: MulProps) => {
  return <>{numero1 * numero2}</>;
};

export default Mul;
