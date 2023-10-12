import { TestBed } from '@angular/core/testing';

import { ServicoProcedimentoService } from './servico-procedimento.service';

describe('ServicoProcedimentoService', () => {
  let service: ServicoProcedimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoProcedimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
