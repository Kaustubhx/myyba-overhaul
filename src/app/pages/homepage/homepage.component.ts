import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }
  data: any
  ngOnInit(): void {

    this.apiService.getData().subscribe(res => {
      this.data = res
    })
  }
}
