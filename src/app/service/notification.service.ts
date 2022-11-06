import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class NoticationService {
  constructor(public toastController: ToastController) { }

  async presentToast(msg:any) {
    const toast = await this.toastController.create({
      message:msg,
      duration: 5000,
      animated: true,
      
 
      color: 'danger'
    });
    toast.present();
  }

  async presentToast1(msg:any,duration:any) {
    const toast = await this.toastController.create({
      message:msg,
      duration: duration,
      animated: true,
     
      color: 'danger'
    });
    toast.present();
  }
  async presentSuccessToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      animated: true,
      position:'top',
     
      color: 'success'
    });
    toast.present();
  }

  async presentSuccessToast1(msg:any,duration:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      animated: true,
      position:'top',
      
      color: 'success'
    });
    toast.present();
  }




  errorNotification(message:any){


  
    this.presentToast(message);

  

  }
  
  errorNotification1(message:any,duration:any){


  
    this.presentToast1(message,duration);

  

  }

}
