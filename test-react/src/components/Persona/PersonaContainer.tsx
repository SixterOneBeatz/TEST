import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { Persona } from "../../models/Persona/Persona.model";
import { getPersonas } from "../../services/PersonaService";
import FormularioPersona from "./FormPersona";
import PersonaContext from "./Persona.context";
import TablaPersonas from "./TablaPersonas";
import { startConnection, hubConnection } from "../../services/SignalRService";

const PersonaContainer = () => {
  let [persona, setPersona] = useState<Persona>({
    id: 0,
    nombre: "",
    aPaterno: "",
    aMaterno: "",
    edad: 1,
  });

  let [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    obtenerPersonas();
    startConnection();
    if(hubConnection){
      hubConnection.on('DbChanges',(data:Persona[])=> {
        setPersonas(data);
      })
    }
  }, []);

  const obtenerPersonas = () => {
    getPersonas()
      .then((response) => {
        setPersonas([...response.data]);
      })
      .catch((ex) => {
        setPersonas([]);
        console.error(ex);
      });
  };

  return (
    <PersonaContext.Provider value={persona}>
      <Container component="main" maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <FormularioPersona
              onSubmited={() => {
                obtenerPersonas();
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TablaPersonas
              personas={personas}
              handleEditPersona={(p: Persona) => {
                setPersona(p);
              }}
              onDeletePersona={() => obtenerPersonas()}
            />
          </Grid>
        </Grid>
      </Container>
    </PersonaContext.Provider>
  );
};

export default PersonaContainer;
