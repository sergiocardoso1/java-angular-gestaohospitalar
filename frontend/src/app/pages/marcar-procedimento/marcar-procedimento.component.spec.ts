import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarProcedimentoComponent } from './marcar-procedimento.component';

describe('MarcarProcedimentoComponent', () => {
  let component: MarcarProcedimentoComponent;
  let fixture: ComponentFixture<MarcarProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcarProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcarProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
