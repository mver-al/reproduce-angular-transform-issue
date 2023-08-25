import { TestBed } from '@angular/core/testing';

import { ReproduceTransformIssueService } from './reproduce-transform-issue.service';

describe('ReproduceTransformIssueService', () => {
  let service: ReproduceTransformIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReproduceTransformIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
