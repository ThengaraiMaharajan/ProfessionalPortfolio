import { TestBed } from '@angular/core/testing';

import { ResumeDownloaderService } from './resume-downloader.service';

describe('ResumeDownloaderService', () => {
  let service: ResumeDownloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeDownloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
