import React, { useState } from "react";
import "./App.css";
import Abuelo from "./components/Abuelo";
import EjmeploIteracion from "./components/EjemploIteracion";
import EjemploReloj from "./components/EjemploReloj";
import EjemploUseEffect from "./components/EjemploUseEffect";
import FormularioTexto from "./components/FormularioTexto";
import MostrarTexto from "./components/MostrarTexto";
import ProyectarContenido2 from "./components/ProyectarContenido2";
import ValorContext from "./context/ValorContext";
import { Persona } from "./interfaces/Ejemplos";

const App = () => {
  let [texto, setTexto] = useState("");
  let [check, setCheck] = useState(false);
  let arr: Persona[] = [
    {
      id:1,
      nombre: "Ronaldo",
      edad: 24,
    },
    {
      id:2,
      nombre: "Daniel",
      edad: 16,
    },
    {
      id:3,
      nombre: "",
      edad: -1,
    },
  ];
  const handleKeyUp = (e: string) => {
    setTexto(e);
  };
  const algo: JSX.Element = (
    <>
      <FormularioTexto
        handleKeyUp={(e: string) => {
          handleKeyUp(e);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.currentTarget.checked)}
        />{" "}
        Mostrar contenido?
      </label>

      <br />
      {check && <MostrarTexto texto={texto} />}
      {check && <EjemploUseEffect />}
    </>
  );

  return (
    <>
      <ProyectarContenido2
        parteSup={<h1>Hola Mundo</h1>}
        parteMid={<EjemploReloj />}
        parteInf={algo}
      />
      <hr />
      {arr.map((x) => <EjmeploIteracion key={x.id} persona={x} />)}
      <hr />
      <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>
    </>
  );
};

export default App;
