import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoLaudoComponent } from './exibicao-laudo.component';

describe('ExibicaoLaudoComponent', () => {
  let component: ExibicaoLaudoComponent;
  let fixture: ComponentFixture<ExibicaoLaudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoLaudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoLaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
