import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.component.scss'],
})
export  class Privacy implements OnInit {
 

  constructor(private router:Router){
    
  }  
  ngOnInit() {
  }
  back(){
    this.router.navigate(["/"])
  }

}
