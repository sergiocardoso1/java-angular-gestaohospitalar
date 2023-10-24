import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoConsultaComponent } from './exibicao-consulta.component';

describe('ExibicaoConsultaComponent', () => {
  let component: ExibicaoConsultaComponent;
  let fixture: ComponentFixture<ExibicaoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
