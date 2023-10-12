import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialidadesComponent } from './card-especialidades.component';

describe('CardEspecialidadesComponent', () => {
  let component: CardEspecialidadesComponent;
  let fixture: ComponentFixture<CardEspecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEspecialidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
