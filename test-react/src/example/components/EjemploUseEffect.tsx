import { useEffect, useState } from "react";

const EjemploUseEffect = () => {
  let [click, setClick] = useState(0);
  let [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    console.log("useEffect click");
    document.title = `Has clickeado ${click} veces`;
    return () => {
        document.title = "React App"
        console.log("destruye useEffect click");}
  }, [click]);

  useEffect(() => {
    console.log("useEffect fecha");
    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("destruye useEffect fecha");
    };
  }, [fecha]);

  useEffect(() => {
    console.log("Ejecución unica");
  }, []);

  return (
    <>
      <h2>Ejemplo de useEffect</h2>
      <button
        onClick={() => {
            setClick(click + 1);
        }}
      >
        {" "}
        Me has clickeado en {click} ocasiones
      </button>
      <label>{fecha.toString()}</label>
    </>
  );
};

export default EjemploUseEffect;
