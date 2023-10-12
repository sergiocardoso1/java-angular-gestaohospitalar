import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroEspecialidadeComponent } from './card-cadastro-especialidade.component';

describe('CardCadastroEspecialidadeComponent', () => {
  let component: CardCadastroEspecialidadeComponent;
  let fixture: ComponentFixture<CardCadastroEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
