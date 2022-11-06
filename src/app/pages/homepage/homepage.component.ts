import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { DataService } from 'src/app/service/data.service.service';
import { NoticationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  constructor(private apiService:ApiserviceService,private notify:NoticationService,private dataService:DataService) { }
data:any
  ngOnInit(): void {

    // this.apiService.getData().subscribe(res=>{
    //   this.data=res
    // })
    this.data=this.dataService.data

  }



  whatsApp(){
    window.location.href="https://wa.me/"+this.data.metadata[0].whatsapp_number+"?text=Hi, Myyba shops, I want to create my online store."

  }
  whatsAppDemo(){

    window.location.href="https://wa.me/"+this.data.metadata[0].whatsapp_number+"?text=Hi Myyba Shops, I need a demo of your Application"

  }
  joinUs(){
    window.location.href="https://wa.me/"+this.data.metadata[0].whatsapp_number+"?text=Hi Myyba Shops, I want to work for myyba shops"
  }
  gotoPricing(){
  }
  call(){
   
    window.location.href="tel:"+this.data.metadata[0].whatsapp_number

  }
}
