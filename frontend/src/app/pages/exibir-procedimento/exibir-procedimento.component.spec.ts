import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirProcedimentoComponent } from './exibir-procedimento.component';

describe('ExibirProcedimentoComponent', () => {
  let component: ExibirProcedimentoComponent;
  let fixture: ComponentFixture<ExibirProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirProcedimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
