import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaProcedimentoComponent } from './agenda-procedimento.component';

describe('AgendaProcedimentoComponent', () => {
  let component: AgendaProcedimentoComponent;
  let fixture: ComponentFixture<AgendaProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
