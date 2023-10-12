import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroProcedimentoComponent } from './card-cadastro-procedimento.component';

describe('CardCadastroProcedimentoComponent', () => {
  let component: CardCadastroProcedimentoComponent;
  let fixture: ComponentFixture<CardCadastroProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
