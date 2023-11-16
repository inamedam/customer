import { TestBed } from '@angular/core/testing';

import { HistorylogService } from './historylog.service';

describe('HistorylogService', () => {
  let service: HistorylogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorylogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
