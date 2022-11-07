import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussinesspartnersComponent } from './components/bussinesspartners/bussinesspartners.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeaderComponent } from './components/header/header.component';
import { MyybaplansComponent } from './components/myybaplans/myybaplans.component';
import { MyybaservicesComponent } from './components/myybaservices/myybaservices.component';
import { StoresComponent } from './components/storestypes/stores.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ApiserviceService } from './service/apiservice.service';
import { DataService } from './service/data.service.service';
import { NoticationService } from './service/notification.service';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { Terms } from './pages/static/static.component';
import { About } from './pages/about/about.component';
import { Privacy } from './pages/privacy/privacy.component';
import { Poster } from './pages/posters/poster.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { Career } from './pages/career/career.component';
import { TakedemoComponent } from './components/takedemo/takedemo.component';
import { FoundersComponent } from './components/founders/founders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomepageComponent,
    StoresComponent,
    FeaturesComponent,
    MyybaplansComponent,
    MyybaservicesComponent,
    BussinesspartnersComponent,
    TestimonyComponent,
    FooterComponent,
    Terms,
    About,
    Privacy,
    Poster,
    Career,
    TakedemoComponent,
    FoundersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [DataService, ApiserviceService, HttpClient, NoticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
