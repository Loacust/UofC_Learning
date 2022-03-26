import { TestBed } from '@angular/core/testing';

import { HospitalPatientsService } from './hospital-patients.service';

describe('HospitalPatientsService', () => {
  let service: HospitalPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
