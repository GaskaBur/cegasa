import { TestBed } from '@angular/core/testing';

import { CegasaService } from './cegasa.service';

describe('CegasaService', () => {
  let service: CegasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CegasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
