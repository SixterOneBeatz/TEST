import { useContext } from "react";
import ValorContext from "../context/ValorContext";

const Hijo = () => {
  const valor = useContext(ValorContext);
  return (
    <>
      <h3>
        Componente hijo {"->"} Valor contexto: {valor}
      </h3>
    </>
  );
};

export default Hijo;
