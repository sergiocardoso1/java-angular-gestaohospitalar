import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelecionarAgendaComponent } from './card-selecionar-agenda.component';

describe('CardSelecionarAgendaComponent', () => {
  let component: CardSelecionarAgendaComponent;
  let fixture: ComponentFixture<CardSelecionarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelecionarAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelecionarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
