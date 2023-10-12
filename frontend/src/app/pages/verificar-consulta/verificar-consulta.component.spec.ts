import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarConsultaComponent } from './verificar-consulta.component';

describe('VerificarConsultaComponent', () => {
  let component: VerificarConsultaComponent;
  let fixture: ComponentFixture<VerificarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
