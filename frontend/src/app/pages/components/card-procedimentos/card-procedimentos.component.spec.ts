import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcedimentosComponent } from './card-procedimentos.component';

describe('CardProcedimentosComponent', () => {
  let component: CardProcedimentosComponent;
  let fixture: ComponentFixture<CardProcedimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProcedimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProcedimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
