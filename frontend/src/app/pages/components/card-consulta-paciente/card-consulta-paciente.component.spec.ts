import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultaPacienteComponent } from './card-consulta-paciente.component';

describe('CardConsultaPacienteComponent', () => {
  let component: CardConsultaPacienteComponent;
  let fixture: ComponentFixture<CardConsultaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConsultaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
