import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibicaoConsultaComponent } from './card-exibicao-consulta.component';

describe('CardExibicaoConsultaComponent', () => {
  let component: CardExibicaoConsultaComponent;
  let fixture: ComponentFixture<CardExibicaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibicaoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibicaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
