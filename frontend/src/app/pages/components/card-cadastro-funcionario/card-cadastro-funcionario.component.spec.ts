import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroFuncionarioComponent } from './card-cadastro-funcionario.component';

describe('CardCadastroFuncionarioComponent', () => {
  let component: CardCadastroFuncionarioComponent;
  let fixture: ComponentFixture<CardCadastroFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
