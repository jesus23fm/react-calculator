interface SubProps {
  numero1: number;
  numero2: number;
}

const Sub = ({ numero1, numero2 }: SubProps) => {
  return <>{numero1 - numero2}</>;
};

export default Sub;
