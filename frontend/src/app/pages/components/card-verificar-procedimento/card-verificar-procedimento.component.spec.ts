import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVerificarProcedimentoComponent } from './card-verificar-procedimento.component';

describe('CardVerificarProcedimentoComponent', () => {
  let component: CardVerificarProcedimentoComponent;
  let fixture: ComponentFixture<CardVerificarProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVerificarProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVerificarProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
