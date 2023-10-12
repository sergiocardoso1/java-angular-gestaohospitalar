import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibicaoPacienteComponent } from './card-exibicao-paciente.component';

describe('CardExibicaoPacienteComponent', () => {
  let component: CardExibicaoPacienteComponent;
  let fixture: ComponentFixture<CardExibicaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibicaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibicaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
