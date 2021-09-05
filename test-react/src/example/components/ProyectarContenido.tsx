import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};
const ProyectarContenido = (props: Props) => {
  return (
    <>
      <h3>Parte superior</h3>
      {props.children}
      <h3>Parte inferior</h3>
    </>
  );
};

export default ProyectarContenido;
