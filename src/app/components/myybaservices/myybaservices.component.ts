import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Myybaservices',
  templateUrl: './myybaservices.component.html',
  styleUrls: ['./myybaservices.component.scss']
})
export class MyybaservicesComponent implements OnInit {

  constructor(private serviceList: DataService) { }

  ourServices: any;

  ngOnInit(): void {
    this.ourServices = this.serviceList.serviceListData
  }

}
