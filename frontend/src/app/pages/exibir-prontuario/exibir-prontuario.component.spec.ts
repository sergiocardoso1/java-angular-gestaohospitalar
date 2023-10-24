import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirProntuarioComponent } from './exibir-prontuario.component';

describe('ExibirProntuarioComponent', () => {
  let component: ExibirProntuarioComponent;
  let fixture: ComponentFixture<ExibirProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirProntuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
