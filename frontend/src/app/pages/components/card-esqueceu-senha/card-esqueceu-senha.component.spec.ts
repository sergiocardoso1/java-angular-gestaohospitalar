import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEsqueceuSenhaComponent } from './card-esqueceu-senha.component';

describe('CardEsqueceuSenhaComponent', () => {
  let component: CardEsqueceuSenhaComponent;
  let fixture: ComponentFixture<CardEsqueceuSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEsqueceuSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
