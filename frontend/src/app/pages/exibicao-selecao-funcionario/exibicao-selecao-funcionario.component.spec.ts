import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoSelecaoFuncionarioComponent } from './exibicao-selecao-funcionario.component';

describe('ExibicaoSelecaoFuncionarioComponent', () => {
  let component: ExibicaoSelecaoFuncionarioComponent;
  let fixture: ComponentFixture<ExibicaoSelecaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoSelecaoFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoSelecaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
