import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private storageKey = 'estudiantes';

  constructor() {}

  // Agregar un estudiante al almacenamiento
  agregarEstudiante(estudiante: any): void {
    const estudiantes = this.obtenerEstudiantes();
    estudiantes.push(estudiante);
    localStorage.setItem(this.storageKey, JSON.stringify(estudiantes));
  }

  // Obtener todos los estudiantes del almacenamiento
  obtenerEstudiantes(): any[] {
    const estudiantes = localStorage.getItem(this.storageKey);
    return estudiantes ? JSON.parse(estudiantes) : [];
  }
}

