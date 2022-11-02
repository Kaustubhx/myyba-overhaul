import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: any

  constructor() { }

  ngOnInit(): void {
    this.banners = [{
      'src': "/assets/images/bannerDevices.png",
      'text': '',
    }]
  }


}
