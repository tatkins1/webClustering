import { TestBed, inject } from '@angular/core/testing';

import { WebclusterService } from './webcluster.service';

describe('WebclusterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebclusterService]
    });
  });

  it('should be created', inject([WebclusterService], (service: WebclusterService) => {
    expect(service).toBeTruthy();
  }));
});
