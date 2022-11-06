import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Bussinesspartners',
  templateUrl: './bussinesspartners.component.html',
  styleUrls: ['./bussinesspartners.component.scss']
})
export class BussinesspartnersComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
