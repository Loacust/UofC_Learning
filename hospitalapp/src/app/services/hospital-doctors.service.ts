import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class HospitalDoctorsService {
  doctors:Doctor[] = [
    {name:'Dr.Frank', specialization:'Chiro'},
    {name:'Dr.George',specialization:'Cardio'},
    {name:'Dr.Colin', specialization: 'Proctology'}
  ]
  constructor() { }
}
