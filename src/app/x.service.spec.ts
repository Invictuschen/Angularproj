import { TestBed, inject } from '@angular/core/testing';

import { XService } from './x.service';

describe('XService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XService]
    });
  });

  it('should be created', inject([XService], (service: XService) => {
    expect(service).toBeTruthy();
  }));
});
