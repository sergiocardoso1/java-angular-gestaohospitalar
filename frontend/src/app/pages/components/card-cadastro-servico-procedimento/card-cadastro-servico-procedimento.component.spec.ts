import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroServicoProcedimentoComponent } from './card-cadastro-servico-procedimento.component';

describe('CardCadastroServicoProcedimentoComponent', () => {
  let component: CardCadastroServicoProcedimentoComponent;
  let fixture: ComponentFixture<CardCadastroServicoProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroServicoProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroServicoProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
