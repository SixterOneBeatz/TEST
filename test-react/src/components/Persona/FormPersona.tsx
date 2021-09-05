import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./FormPersona.styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { postPersona, putPersona } from "../../services/PersonaService";
import { Persona } from "../../models/Persona/Persona.model";
import { useContext } from "react";
import PersonaContext from "./Persona.context";

type Props = {
  onSubmited(): void;
};
const validations = yup.object({
  nombre: yup.string().required("El nombre es requerido"),
  aPaterno: yup.string().required("El apellido paterno es requerido"),
  aMaterno: yup.string().required("El apellido materno es requerido"),
  edad: yup
    .number()
    .required("La edad es requerida")
    .min(1, "La edad mínima debe ser 1"),
});

const FormularioPersona = (props: Props) => {
  const style = useStyles();
  const persona = useContext<Persona>(PersonaContext);

  const formik = useFormik<Persona>({
    initialValues: persona,
    validationSchema: validations,
    onSubmit: (values) => {
      if (values.id === 0)
        postPersona(values)
          .then((response) => {
            props.onSubmited();
            formik.resetForm();
          })
          .catch((ex) => {
            console.error(ex);
          });
      else
        putPersona(values)
          .then((response) => {
            props.onSubmited();
            formik.resetForm();
          })
          .catch((ex) => {
            console.error(ex);
          });
    },
  });

  useEffect(() => {
    formik.setValues({ ...persona });
    //eslint-disable-next-line
  }, [persona]);

  return (
    <Container component="main" maxWidth="xl">
      <div className={style.paper}>
        <Typography component="h2" variant="h4">
          Datos de la persona
        </Typography>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                name="nombre"
                variant="outlined"
                fullWidth
                label="Nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="aPaterno"
                variant="outlined"
                fullWidth
                label="Apellido paterno"
                value={formik.values.aPaterno}
                onChange={formik.handleChange}
                error={
                  formik.touched.aPaterno && Boolean(formik.errors.aPaterno)
                }
                helperText={formik.touched.aPaterno && formik.errors.aPaterno}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                name="aMaterno"
                variant="outlined"
                fullWidth
                label="Apellido paterno"
                value={formik.values.aMaterno}
                onChange={formik.handleChange}
                error={
                  formik.touched.aMaterno && Boolean(formik.errors.aMaterno)
                }
                helperText={formik.touched.aMaterno && formik.errors.aMaterno}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                type="number"
                name="edad"
                variant="outlined"
                fullWidth
                label="Edad"
                value={formik.values.edad}
                onChange={formik.handleChange}
                error={formik.touched.edad && Boolean(formik.errors.edad)}
                helperText={formik.touched.edad && formik.errors.edad}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                disabled={!formik.isValid}
                color="primary"
                type="submit"
                fullWidth
                variant="contained"
                size="large"
              >
                Enviar
              </Button>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                color="secondary"
                fullWidth
                variant="contained"
                size="large"
                onClick={() => {formik.resetForm()}}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default FormularioPersona;
