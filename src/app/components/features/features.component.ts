import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private featuresAndDetailsData: DataService, private apiService: ApiserviceService) { }

  @Input() data: any
  featureAndDetails: any

  ngOnInit(): void {

    this.featureAndDetails = this.data


  }

}
