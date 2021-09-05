import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService
  ) {}
  persona: Persona;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.personaService.getPersona(params.id).subscribe(
        (resp) => {
          this.persona = { ...resp };
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
