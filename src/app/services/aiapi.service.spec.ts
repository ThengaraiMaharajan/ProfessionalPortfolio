import { TestBed } from '@angular/core/testing';

import { AIApiService } from './aiapi.service';

describe('AIApiService', () => {
  let service: AIApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
