import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroLaudoComponent } from './card-cadastro-laudo.component';

describe('CardCadastroLaudoComponent', () => {
  let component: CardCadastroLaudoComponent;
  let fixture: ComponentFixture<CardCadastroLaudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroLaudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroLaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
