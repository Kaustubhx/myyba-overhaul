import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.html',
  styleUrls: ['./career.component.scss'],
})
export  class Career implements OnInit {
  data: any
  sectors: any;
  constructor(private router:Router,private  dataService:DataService){
    
  }  
  ngOnInit() {
    this.data=this.dataService.data
    this.sectors=['Engineering', 'Social Media', 'Media Influencing', 'Marketing & Sales', 'Operations','Legal & Accounting']
  }
  back(){
    this.router.navigate(["/"])
  }

}
