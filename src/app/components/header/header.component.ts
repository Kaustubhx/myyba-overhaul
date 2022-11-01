import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile: boolean=false;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.mobile=this.dataService.getMobile()
  }


}
