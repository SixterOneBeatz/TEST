import { useContext } from "react";
import ValorContext from "../context/ValorContext";
import Hijo from "./Hijo";

const Padre = () => {
  const valor = useContext(ValorContext);
  return (
    <>
      <h3>
        Componente Padre {"->"} Valor contexto: {valor}
      </h3>
      <Hijo />
    </>
  );
};

export default Padre;
