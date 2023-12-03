import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibirProcedimentoComponent } from './card-exibir-procedimento.component';

describe('CardExibirProcedimentoComponent', () => {
  let component: CardExibirProcedimentoComponent;
  let fixture: ComponentFixture<CardExibirProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibirProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibirProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
