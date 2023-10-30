import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibicaoLaudoComponent } from './card-exibicao-laudo.component';

describe('CardExibicaoLaudoComponent', () => {
  let component: CardExibicaoLaudoComponent;
  let fixture: ComponentFixture<CardExibicaoLaudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibicaoLaudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibicaoLaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
