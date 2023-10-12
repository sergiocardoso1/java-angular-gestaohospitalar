import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibirFuncionarioComponent } from './card-exibir-funcionario.component';

describe('CardExibirFuncionarioComponent', () => {
  let component: CardExibirFuncionarioComponent;
  let fixture: ComponentFixture<CardExibirFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibirFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibirFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
