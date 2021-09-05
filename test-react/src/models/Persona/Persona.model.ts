export interface Persona {
  id: number;
  nombre: string;
  aPaterno: string;
  aMaterno: string;
  edad: number;
}

export interface Column {
  id: 'id' | 'nombre' | 'aPaterno' | 'aMaterno' | 'edad' ;
  label: string;
  minWidth?: number;
  align?: 'center';
}