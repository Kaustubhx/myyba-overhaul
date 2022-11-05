import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { NoticationService } from 'src/app/service/notification.service';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: any
  @Input() data:any
  constructor(private notify:NoticationService,private apiService:ApiserviceService) { }
  mobile: any;
  otp: any;
  page: any;
  hidevalue: any;
  maxTime: any;
  timer: any;
  ngOnInit(): void {
    this.banners = [{
      'src': "/assets/images/bannerDevices.png",
      'text': '',
    }]
    this.page=1
  }

  changeNumber()
  {
    this.page=1  
  }
  submitMobile(){
    if(this.mobile==null)
    {
      this.notify.errorNotification("enter valid mobile number")
    }
    else{
      // this.apiService.enter(this.mobile).subscribe((res:any)=>{
      //   this.page=2
      //   this.maxTime=res.time
      //   this.StartTimer()
      // }) 
      this.page=2
      this.maxTime=100
      this.StartTimer()
    }
  }
  StartTimer(){
    this.timer = setTimeout((x:any) => 
      {
          if(this.maxTime <= 0) { }
          this.maxTime -= 1;
  
          if(this.maxTime>0){
            this.hidevalue = true;
            this.StartTimer();
          }
          
          else{
            
              this.hidevalue = false;
          }
  
      }, 1000);
    }
    resend(){
      this.submitMobile();
    }
  submitOtp(){
    if(this.otp==null)
    {
      this.notify.errorNotification("enter valid OTP")
    }
    else{
    //   this.apiService.validateOtp(true,this.otp,this.mobile).subscribe((res:any)=>{
        
    //     this.mobile=null
    //     this.otp=null
    //    this.page=3
      
    // }) 
    this.mobile=null
    this.otp=null
   this.page=3

    }
  }
  ok(){
    this.otp=null
    this.mobile=null
    this.page=1
  }

}
