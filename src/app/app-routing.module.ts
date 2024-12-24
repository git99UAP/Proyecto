import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';
import { EstudiantesRegistradosComponent } from './estudiantes-registrados/estudiantes-registrados.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaymentFormComponent } from './payment-form/payment-form.component'; // Importar el componente de pago

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro-estudiantes', component: RegistroEstudiantesComponent },
  { path: 'estudiantes-registrados', component: EstudiantesRegistradosComponent },
  { path: 'pago-inscripcion', component: PaymentFormComponent }, // Ruta para el formulario de pago
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
