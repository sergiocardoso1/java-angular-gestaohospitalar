import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEdicaoFuncionarioComponent } from './card-edicao-funcionario.component';

describe('CardEdicaoFuncionarioComponent', () => {
  let component: CardEdicaoFuncionarioComponent;
  let fixture: ComponentFixture<CardEdicaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEdicaoFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEdicaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
