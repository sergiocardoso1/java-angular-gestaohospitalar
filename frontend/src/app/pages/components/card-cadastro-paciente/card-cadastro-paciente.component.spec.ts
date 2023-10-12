import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroPacienteComponent } from './card-cadastro-paciente.component';

describe('CardCadastroPacienteComponent', () => {
  let component: CardCadastroPacienteComponent;
  let fixture: ComponentFixture<CardCadastroPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
