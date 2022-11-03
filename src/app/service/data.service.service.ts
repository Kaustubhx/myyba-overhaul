import { Injectable } from '@angular/core';
import { storeImage } from 'src/interfaces/storeImage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static mobile: boolean;

  constructor() { }


  getMobile() {
    return DataService.mobile
  }

  storeImages: storeImage[] = [
    {
      img: '/assets/images/FashionStore.png',
      storeType: 'Fashion',
    },
    {
      img: '/assets/images/AutomobileStore.png',
      storeType: 'Automobile',
    },
    {
      img: '/assets/images/CafeStore.png',
      storeType: 'Cafe / Restaurant',
    },
    {
      img: '/assets/images/VeggiesStore.png',
      storeType: 'Fruits & Vegetables',
    },
    {
      img: '/assets/images/FashionStore.png',
      storeType: 'Fruits & Vegetables',
    },
  ]
}
