import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarProcedimentoComponent } from './verificar-procedimento.component';

describe('VerificarProcedimentoComponent', () => {
  let component: VerificarProcedimentoComponent;
  let fixture: ComponentFixture<VerificarProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
