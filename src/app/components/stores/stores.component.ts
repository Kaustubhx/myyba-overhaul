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
}
