import { TestBed } from '@angular/core/testing';

import { TokentradicionalService } from './tokentradicional.service';

describe('TokentradicionalService', () => {
  let service: TokentradicionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokentradicionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
