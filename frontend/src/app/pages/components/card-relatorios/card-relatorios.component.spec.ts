import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRelatoriosComponent } from './card-relatorios.component';

describe('CardRelatoriosComponent', () => {
  let component: CardRelatoriosComponent;
  let fixture: ComponentFixture<CardRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRelatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
