import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  // scroll: any

  ngOnInit(): void {
    // this.scroll = this.scrollTo.scrollToLabel()
  }
}
