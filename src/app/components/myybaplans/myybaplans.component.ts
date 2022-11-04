import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'MyybaPlans',
  templateUrl: './myybaplans.component.html',
  styleUrls: ['./myybaplans.component.scss']
})
export class MyybaplansComponent implements OnInit {

  constructor(private myybaPlans: DataService) { }

  plans: any

  ngOnInit(): void {
    this.plans = this.myybaPlans.myybaShopPlans
  }

  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 10,
  };

}
