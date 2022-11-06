import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  enter(mobile:any) {
    let opt= {
   
       "mobile": mobile,
      
       "user_role": environment.role
     }
     return this.http.post(`${environment.HOST}/user/enter`,opt)
   }
 
   validateOtp(optin:any,otp: any, number: any) { 
   return this.http.post(`${environment.HOST}/user/validateOtp?mobile=`+number+'&otp='+otp+'&role='+environment.role+'&optin='+optin,"");
   }
  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get(`${environment.HOST}/shopSite/shopsite/get`);
  }

}
