import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'MyybaPlans',
  templateUrl: './myybaplans.component.html',
  styleUrls: ['./myybaplans.component.scss']
})
export class MyybaplansComponent implements OnInit {

  constructor(private myybaPlans: DataService) { }

  plans: any

  @Input() data:any

  ngOnInit(): void {
    this.plans = this.data
  }

  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 10,
  };

}
