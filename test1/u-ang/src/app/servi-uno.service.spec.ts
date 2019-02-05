import { TestBed } from '@angular/core/testing';

import { ServiUnoService } from './servi-uno.service';

describe('ServiUnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiUnoService = TestBed.get(ServiUnoService);
    expect(service).toBeTruthy();
  });
});
