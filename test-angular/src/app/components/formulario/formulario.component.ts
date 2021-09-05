import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit,OnChanges {
  constructor(
    private _formBuilder: FormBuilder,
    private _personaService: PersonaService,
    private _router: Router
  ) {}
  @Input() persona: Persona;
  formPersona: FormGroup = this._formBuilder.group({
    id: [0, Validators.required],
    nombre: ['', Validators.required],
    aPaterno: ['', Validators.required],
    aMaterno: ['', Validators.required],
    edad: [0, [Validators.required, Validators.min(1)]],
  });
  ngOnInit(): void {
    if(this.persona!== undefined){
      this.formPersona.patchValue(this.persona);
    }
  }
  ngOnChanges(): void {
    if(this.persona!== undefined){
      this.formPersona.patchValue(this.persona);
    }
  }
  AddEdit(persona: Persona) {
    console.log(persona);
    if (persona.id === 0) {
      this._personaService.postPersona(persona).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/']);
          alert('Se agregó correctamente')
        },
        (ex) => console.log(ex)
      );
    } else {
      this._personaService.putPersona(persona).subscribe(
        (res) => {
          console.log(res);
          alert('Se modificó correctamente')
          this._router.navigate(['/']);
        },
        (ex) => console.log(ex)
      );
    }
  }
}
