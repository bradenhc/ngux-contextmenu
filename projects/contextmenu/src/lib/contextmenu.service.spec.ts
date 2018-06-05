import { TestBed, inject } from '@angular/core/testing';

import { ContextmenuService } from './contextmenu.service';

describe('ContextmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContextmenuService]
    });
  });

  it('should be created', inject([ContextmenuService], (service: ContextmenuService) => {
    expect(service).toBeTruthy();
  }));
});
