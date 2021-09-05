import { Persona } from "../interfaces/Ejemplos";

type Props = {
  persona: Persona;
};

const EjmeploIteracion = (props: Props) => {
  try {
    if (props.persona.edad >= 18) {
      return (
        <>
          <span>
            Nombre: {props.persona.nombre} Edad: {props.persona.edad} Con
            derecho a votar
          </span>
          <br/>
        </>
      );
    } else if (props.persona.edad < 0) {
      throw new Error(`No puede haber edad igual o menor a 0`);
    } else {
      return (
        <>
          <span>
            Nombre: {props.persona.nombre} Edad: {props.persona.edad} Sin
            derecho a votar
          </span>
          <br/>
        </>
      );
    }
  } catch (error) {
    return (
      <>
        <label>{error.message}</label>
        <br/>
      </>
    );
  }
};

export default EjmeploIteracion;
