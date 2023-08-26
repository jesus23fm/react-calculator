interface AddProps {
  numero1: number;
  numero2: number;
}

const Add = ({ numero1, numero2 }: AddProps) => {
  return <>{numero1 + numero2}</>;
};

export default Add;
