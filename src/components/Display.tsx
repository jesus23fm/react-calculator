interface DisplayProps {
  symbolos: string[];
  antigua: string[];
}

const Display = ({ symbolos, antigua }: DisplayProps) => {
  return (
    <>
      <div className="opacity-25">{antigua}</div>
      <div className="bg-gray-600 rounded-lg">{symbolos}</div>
    </>
  );
};

export default Display;
