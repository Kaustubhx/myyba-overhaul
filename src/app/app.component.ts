import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from './service/data.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myyba-redesign';


  constructor(private platform:Platform){
    this.init()
  }

  init()
  {
    this.platform.ready().then(res=>{
      if(this.platform.width()>800)
      {
        DataService.mobile=false
      }
      else{
        DataService.mobile= true
      }
      
    }
      )
  }
}
