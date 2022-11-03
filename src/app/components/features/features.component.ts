import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service.service';

@Component({
  selector: 'Features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private featuresAndDetailsData: DataService) { }

  featureAndDetails: any

  ngOnInit(): void {
    this.featureAndDetails = this.featuresAndDetailsData.featureSectionData;
  }

}
