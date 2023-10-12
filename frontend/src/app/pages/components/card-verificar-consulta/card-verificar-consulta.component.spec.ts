import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVerificarConsultaComponent } from './card-verificar-consulta.component';

describe('CardVerificarConsultaComponent', () => {
  let component: CardVerificarConsultaComponent;
  let fixture: ComponentFixture<CardVerificarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVerificarConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVerificarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
