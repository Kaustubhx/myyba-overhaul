import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DataService } from './service/data.service.service';
import { FeaturesComponent } from './components/features/features.component';
import { MyybaplansComponent } from './components/myybaplans/myybaplans.component';
import { StoresComponent } from './components/storestypes/stores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomepageComponent,
    StoresComponent,
    FeaturesComponent,
    MyybaplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
