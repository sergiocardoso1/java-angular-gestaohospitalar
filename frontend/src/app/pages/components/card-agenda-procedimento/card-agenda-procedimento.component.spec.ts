import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgendaProcedimentoComponent } from './card-agenda-procedimento.component';

describe('CardAgendaProcedimentoComponent', () => {
  let component: CardAgendaProcedimentoComponent;
  let fixture: ComponentFixture<CardAgendaProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAgendaProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAgendaProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
