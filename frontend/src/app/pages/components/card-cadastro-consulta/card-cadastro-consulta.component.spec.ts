import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroConsultaComponent } from './card-cadastro-consulta.component';

describe('CardCadastroConsultaComponent', () => {
  let component: CardCadastroConsultaComponent;
  let fixture: ComponentFixture<CardCadastroConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
