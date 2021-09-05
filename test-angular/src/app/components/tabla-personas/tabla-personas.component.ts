import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css'],
})
export class TablaPersonasComponent implements OnInit {
  constructor(
    private _personaService: PersonaService,
    private _router: Router
  ) {}
  ListaPersonas: Persona[];
  displayedColumns: string[] = [
    'Nombre',
    'ApellidoPaterno',
    'ApellidoMaterno',
    'Edad',
    'Acciones',
  ];
  dataSource = [];

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this._personaService.getPersonas().subscribe(
      (resp) => {
        console.log(resp);
        this.dataSource = [...resp];
      },
      (ex) => {
        console.log(ex);
      }
    );
  }

  editPersona(id: number) {
    this._router.navigate([`/personas/editar/${id}`]);
  }
  
  deletePersona(id: number) {
    this._personaService.deletePersona(id).subscribe(
      (resp) => {
        alert('Se borró correctamente');
        this._router.navigate([`/`]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
