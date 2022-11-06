import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile: boolean=false;

  constructor(private dataService:DataService, private route:Router) { }

  ngOnInit(): void {
    this.mobile=this.dataService.getMobile()
  }


  routeTo(page:any){
    this.route.navigate([page])
  }
}
