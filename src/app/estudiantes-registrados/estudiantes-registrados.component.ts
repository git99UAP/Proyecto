import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../servicios/estudiante.service';

@Component({
  selector: 'app-estudiantes-registrados',
  standalone: false,
  
  templateUrl: './estudiantes-registrados.component.html',
  styleUrl: './estudiantes-registrados.component.css'
})
export class EstudiantesRegistradosComponent implements OnInit {
  estudiantes: any[] = [];

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.estudiantes = this.estudianteService.obtenerEstudiantes();
  }
}
