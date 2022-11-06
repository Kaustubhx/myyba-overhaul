import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input() data:any;

  constructor(private router:Router) { }


  // scroll: any

  ngOnInit(): void {
    // this.scroll = this.scrollTo.scrollToLabel()
  }
  routeTo(page:any)
  {
  this.router.navigate([page])
  }
  callTo(link:any){
    window.location.href="tel:"+link
  }
  mailTo(link:any)
  {
    window.location.href="mailto:"+link
  }
  goTo(link:any)
  {
    window.location.href=link
  }
}
