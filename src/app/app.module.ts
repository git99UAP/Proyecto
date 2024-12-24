import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar FormsModule y ReactiveFormsModule
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';
import { EstudiantesRegistradosComponent } from './estudiantes-registrados/estudiantes-registrados.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroEstudiantesComponent,
    EstudiantesRegistradosComponent,
    InicioComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Necesario para [(ngModel)]
    ReactiveFormsModule // Necesario para formGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
