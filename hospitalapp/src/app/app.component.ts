import { Component } from '@angular/core';
import { Doctor } from './interfaces/doctor';
import { Patients } from './interfaces/patients';
import { HospitalDoctorsService } from './services/hospital-doctors.service';
import { HospitalPatientsService } from './services/hospital-patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  doctors:Doctor[];
  patients:Patients[];

  constructor(private doctorService: HospitalDoctorsService, private patientService:HospitalPatientsService){
        this.doctors = doctorService.doctors;
        this.patients = patientService.patients;

  }

  getCount(){
    return this.doctorService.doctors.length + this.patientService.patients.length;
  }
}
