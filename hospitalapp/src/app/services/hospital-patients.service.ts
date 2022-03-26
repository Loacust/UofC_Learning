import { Injectable } from '@angular/core';
import { Patients } from '../interfaces/patients';

@Injectable({
  providedIn: 'root'
})
export class HospitalPatientsService {
    patients:Patients[] =[
      {name: 'Franky', illness:'death'},
      {name: 'Booby', illness:'farts'},
      {name: 'Crawly', illness:'life'},
       ]

  

  constructor() { }
}
