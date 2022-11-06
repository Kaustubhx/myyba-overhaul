import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static',
  templateUrl: './static.html',
  styleUrls: ['./static.component.scss'],
})
export  class Terms implements OnInit {
 

  constructor(private router:Router){
    
  }  
  ngOnInit() {
  }
  back(){
    this.router.navigate(["/"])
  }

}
