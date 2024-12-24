import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesRegistradosComponent } from './estudiantes-registrados.component';

describe('EstudiantesRegistradosComponent', () => {
  let component: EstudiantesRegistradosComponent;
  let fixture: ComponentFixture<EstudiantesRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudiantesRegistradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
