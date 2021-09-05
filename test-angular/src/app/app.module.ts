import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';
import { MaterialModule } from './material/material/material.module';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent,
    AgregarComponent,
    EditarComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
