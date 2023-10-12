import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarcarProcedimentoComponent } from './card-marcar-procedimento.component';

describe('CardMarcarProcedimentoComponent', () => {
  let component: CardMarcarProcedimentoComponent;
  let fixture: ComponentFixture<CardMarcarProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarcarProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMarcarProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
