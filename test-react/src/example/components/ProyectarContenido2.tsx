import { ReactElement } from "react";

type Props = {
  parteSup?: ReactElement;
  parteMid: ReactElement;
  parteInf: ReactElement;
};

const ProyectarContenido2 = (props: Props) => {
  return (
    <>
      {props.parteSup ? props.parteSup : <h3>Hola Mundo por defecto</h3>}
      <hr />
      {props.parteMid}
      <hr />
      {props.parteInf}
    </>
  );
};

export default ProyectarContenido2;
