import { TestBed } from '@angular/core/testing';

import { FootballVideosService } from './football-videos.service';

describe('FootballVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballVideosService = TestBed.get(FootballVideosService);
    expect(service).toBeTruthy();
  });
});
