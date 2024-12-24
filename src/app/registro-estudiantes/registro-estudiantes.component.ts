import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../servicios/estudiante.service';

@Component({
  selector: 'app-registro-estudiantes',
  standalone: false,
  
  templateUrl: './registro-estudiantes.component.html',
  styleUrl: './registro-estudiantes.component.css'
})
export class RegistroEstudiantesComponent implements OnInit {
  formularioEstudiante!: FormGroup;
  carreras: string[] = ['Ingeniería en Sistemas', 'Medicina', 'Derecho', 'Arquitectura'];

  constructor(private fb: FormBuilder, private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.formularioEstudiante = this.fb.group({
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      carrera: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
  }

  registrarEstudiante(): void {
    if (this.formularioEstudiante.valid) {
      this.estudianteService.agregarEstudiante(this.formularioEstudiante.value);
      alert('¡Estudiante registrado con éxito!');
      this.formularioEstudiante.reset();
    }
  }
}