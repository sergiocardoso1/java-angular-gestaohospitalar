import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFuncionariosComponent } from './card-funcionarios.component';

describe('CardFuncionariosComponent', () => {
  let component: CardFuncionariosComponent;
  let fixture: ComponentFixture<CardFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
