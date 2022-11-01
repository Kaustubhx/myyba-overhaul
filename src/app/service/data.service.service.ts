import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static mobile: boolean;

  constructor() { }


  getMobile(){
    return DataService.mobile
  }
}
