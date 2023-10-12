import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarcarConsultaComponent } from './card-marcar-consulta.component';

describe('CardMarcarConsultaComponent', () => {
  let component: CardMarcarConsultaComponent;
  let fixture: ComponentFixture<CardMarcarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMarcarConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMarcarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
