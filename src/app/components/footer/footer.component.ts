import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input() data:any;
  constructor() { }


  // scroll: any

  ngOnInit(): void {
    // this.scroll = this.scrollTo.scrollToLabel()
  }
}
