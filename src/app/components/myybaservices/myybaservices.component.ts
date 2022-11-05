import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Myybaservices',
  templateUrl: './myybaservices.component.html',
  styleUrls: ['./myybaservices.component.scss']
})
export class MyybaservicesComponent implements OnInit {

  constructor(private serviceList: DataService) { }

  ourServices: any;
@Input() data:any
  ngOnInit(): void {

    this.ourServices = this.data
  }

}
