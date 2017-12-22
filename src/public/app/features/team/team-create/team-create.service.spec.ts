import { TestBed, inject } from '@angular/core/testing';

import { TeamCreateService } from './team-create.service';

describe('TeamCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamCreateService]
    });
  });

  it('should be created', inject([TeamCreateService], (service: TeamCreateService) => {
    expect(service).toBeTruthy();
  }));
});
