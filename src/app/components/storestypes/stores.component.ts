import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private storeDetail: DataService) { }

  stores: any


  ngOnInit(): void {
    this.stores = this.storeDetail.storeImages
    console.log(this.stores)
  }

  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 0
      }
    }
  };
}