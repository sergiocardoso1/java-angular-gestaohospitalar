import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroServicoDeProcedimentoComponent } from './cadastro-servico-de-procedimento.component';

describe('CadastroServicoDeProcedimentoComponent', () => {
  let component: CadastroServicoDeProcedimentoComponent;
  let fixture: ComponentFixture<CadastroServicoDeProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroServicoDeProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroServicoDeProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
