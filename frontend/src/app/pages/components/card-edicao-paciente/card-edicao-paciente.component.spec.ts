import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEdicaoPacienteComponent } from './card-edicao-paciente.component';

describe('CardEdicaoPacienteComponent', () => {
  let component: CardEdicaoPacienteComponent;
  let fixture: ComponentFixture<CardEdicaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEdicaoPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEdicaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
