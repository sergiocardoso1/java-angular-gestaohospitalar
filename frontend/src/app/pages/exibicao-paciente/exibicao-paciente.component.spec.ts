import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoPacienteComponent } from './exibicao-paciente.component';

describe('ExibicaoPacienteComponent', () => {
  let component: ExibicaoPacienteComponent;
  let fixture: ComponentFixture<ExibicaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
