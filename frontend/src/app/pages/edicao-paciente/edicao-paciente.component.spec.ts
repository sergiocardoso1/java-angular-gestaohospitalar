import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPacienteComponent } from './edicao-paciente.component';

describe('EdicaoPacienteComponent', () => {
  let component: EdicaoPacienteComponent;
  let fixture: ComponentFixture<EdicaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
