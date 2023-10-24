import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoConsultaPacienteComponent } from './exibicao-consulta-paciente.component';

describe('ExibicaoConsultaPacienteComponent', () => {
  let component: ExibicaoConsultaPacienteComponent;
  let fixture: ComponentFixture<ExibicaoConsultaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoConsultaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
