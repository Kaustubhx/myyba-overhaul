import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.component.scss'],
})
export  class About implements OnInit {
  data: any
  constructor(private router:Router,private  dataService:DataService){
    
  }  
  ngOnInit() {
    this.data=this.dataService.data
  }
  back(){
    this.router.navigate(["/"])
  }

}
