import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

import { Column, Persona } from "../../models/Persona/Persona.model";
import { StyledTableCell, useStyles } from "./TablaPersonas.styles";
import { deletePersona } from "../../services/PersonaService";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

type Props = {
  handleEditPersona(persona: Persona): void;
  onDeletePersona():void;
  personas: Persona[];
};

const columns: Column[] = [
  { id: "id", label: "Id", align: "center" },
  { id: "nombre", label: "Nombre", align: "center" },
  { id: "aPaterno", label: "Apellido Paterno", align: "center" },
  { id: "aMaterno", label: "Apellido Materno", align: "center" },
  { id: "edad", label: "Edad" },
];

const TablaPersonas = (props: Props) => {
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  const eliminarPersona = (persona: Persona) => {
    deletePersona(persona)
      .then((response) => {props.onDeletePersona();})
      .catch((ex) => console.log(ex));
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.personas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}

                    <TableCell align="center" key={"acciones"}>
                      <IconButton
                        color="primary"
                        className={classes.margin}
                        onClick={(e) => {
                          e.preventDefault();
                          props.handleEditPersona(row);
                        }}
                      >
                        <EditIcon></EditIcon>
                      </IconButton>
                      <IconButton
                        color="secondary"
                        className={classes.margin}
                        onClick={(e) => {
                          e.preventDefault();
                          eliminarPersona(row);
                        }}
                      >
                        <DeleteIcon></DeleteIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.colorFooter}
        rowsPerPageOptions={[
          10,
          25,
          100,
          { value: props.personas.length, label: "Todas" },
        ]}
        count={props.personas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        component="div"
      />
    </Paper>
  );
};

export default TablaPersonas;
