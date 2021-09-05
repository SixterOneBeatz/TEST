import { createContext } from "react";
import { Persona } from "../../models/Persona/Persona.model";
const PersonaContext = createContext<Persona>({
    id: 0,
    nombre: "",
    aPaterno: "",
    aMaterno: "",
    edad: 1,
  });
export default PersonaContext;