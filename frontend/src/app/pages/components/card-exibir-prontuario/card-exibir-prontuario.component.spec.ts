import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExibirProntuarioComponent } from './card-exibir-prontuario.component';

describe('CardExibirProntuarioComponent', () => {
  let component: CardExibirProntuarioComponent;
  let fixture: ComponentFixture<CardExibirProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExibirProntuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExibirProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
