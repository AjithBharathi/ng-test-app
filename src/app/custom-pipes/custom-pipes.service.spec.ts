import { TestBed } from '@angular/core/testing';

import { CustomPipesService } from './custom-pipes.service';

describe('CustomPipesService', () => {
  let service: CustomPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
