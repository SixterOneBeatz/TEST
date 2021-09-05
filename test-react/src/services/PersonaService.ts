import { Persona } from "../models/Persona/Persona.model";
import request from "./HttpClient";
const endPoint = "/Personas";
export const postPersona = (persona: Persona) => {
  return request.post(`${endPoint}`, persona);
};
export const putPersona = (persona: Persona) => {
  return request.put(`${endPoint}/${persona.id}`, persona);
};
export const getPersonas = () => {
  return request.get(`${endPoint}`);
};
export const getPersona = (persona: Persona) => {
  return request.get(`${endPoint}/${persona.id}`);
};
export const deletePersona = (persona: Persona) => {
  return request.delete(`${endPoint}/${persona.id}`);
};
