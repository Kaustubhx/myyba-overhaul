import { Injectable, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { featureDetail } from 'src/interfaces/feature&Details';
import { serviceList } from 'src/interfaces/servicesList';
import { storeImage } from 'src/interfaces/storeImage';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @ViewChild(IonContent, { static: false })
  static mobile: boolean;

  constructor() { }

  content: IonContent | any
  scrollToLabel(label: any) {
    var titleELe = document.getElementById(label);
    this.content.scrollToPoint(0, titleELe?.offsetTop, 1000);
  }

  getMobile() {
    return DataService.mobile
  }
  

  storeImages: storeImage[] = [
    {
      img: '/assets/images/FashionStore.png',
      storeType: 'Fashion',
    },
    {
      img: '/assets/images/AutomobileStore.png',
      storeType: 'Automobile',
    },
    {
      img: '/assets/images/CafeStore.png',
      storeType: 'Cafe / Restaurant',
    },
    {
      img: '/assets/images/VeggiesStore.png',
      storeType: 'Fruits & Vegetables',
    },
    {
      img: '/assets/images/FashionStore.png',
      storeType: 'Fruits & Vegetables',
    },
  ]

  featureSectionData: featureDetail[] = [
    {
      questionTxt: 'YOUR ENTIRE STORE INTO A QR CODE?',
      // serviceName: '',
      detailAns: 'Yes, get all the products you sell into an all in 1 QR code and share it with your customers to place order online. Customers can scan the code and visit your website to place an order',
      img: '/assets/newImages/QRScanning.png'
    },
    {
      questionTxt: 'More than 150 Payment Options for your customers',
      // toBeBold: '150 Payment Options',
      detailAns: 'All banks credit / debit cards, netbanking, Google Pay, PayTM, PhonePe & pay later options. Collect payments in any payment mode you want',
      img: '/assets/newImages/OnlinePayment.png'
    },
    {
      questionTxt: 'SEAMLESS ORDER MANAGEMENT & ROBUST POS',
      // toBeBold: 'SEAMLESS',
      detailAns: 'Control everything from a single dashboard with centralised order management, pricing, discounting, theme customizing & more',
      img: '/assets/newImages/Ordermanagement.png'
    },
    {
      questionTxt: 'AUTOMATED ORDER UPDATES ON WHATSAPP AND SMS',
      // toBeBold: 'WHATSAPP AND SMS',
      detailAns: 'No need to worry about all the post order query calls, we update your customers about their orders over WhatsApp and SMS',
      img: '/assets/newImages/OrderUpdates.png'
    },
    {
      questionTxt: 'eASY SALES TRACKING AND CUSTOMER MANAGEMENT',
      // toBeBold: 'eASY SALES',
      detailAns: "Keep a track on your sales with Myyba???s sales report feature and get insights of your customer???s buying activity to improve your sales over the time",
      img: '/assets/newImages/Saletracking.png'
    },
  ]

  myybaShopPlans = [
    {
      percentOff: '',
      discountPrice: '',
      actualPrice: '??? 999*',
      span: '1 MONTH PLAN',
    },
    {
      percentOff: '5% OFF',
      discountPrice: '???2,849*',
      actualPrice: '???2,999',
      span: '3 MONTHS PLAN',
    },
    {
      percentOff: '10% OFF',
      discountPrice: '??? 5,999*',
      actualPrice: '??? 5,399*',
      span: '3 MONTH PLAN',
      recommended: true,
    },
    {
      percentOff: '15% OFF',
      discountPrice: '???11,999',
      actualPrice: '???10,199*',
      span: '3 MONTH PLAN',
    },
  ]

  serviceListData: serviceList[] = [
    {
      serviceName: 'WHATSAPP AND SMS CAMPAIGNS',
      // toBeBold: '',
      serviceSummary: 'Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo',
      serviceImg: '/assets/newImages/ServiceImage-1.png'
    },
    {
      serviceName: 'INFLUENCER MARKETING',
      // toBeBold: '150 Payment Options',
      serviceSummary: 'Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo',
      serviceImg: '/assets/newImages/ServiceImage-1.png'
    },
    {
      serviceName: 'SOCIAL MEDIA MANAGEMENT',
      // toBeBold: 'SEAMLESS',
      serviceSummary: 'Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo',
      serviceImg: '/assets/newImages/ServiceImage-1.png'
    },
    {
      serviceName: 'TARGETED MARKETING CAMPAIGNS',
      // toBeBold: 'WHATSAPP AND SMS',
      serviceSummary: 'Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo',
      serviceImg: '/assets/newImages/ServiceImage-1.png'
    },
    {
      serviceName: 'OFFLINE MARKETING',
      // toBeBold: 'eASY SALES',
      serviceSummary: 'Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo',
      serviceImg: '/assets/newImages/ServiceImage-1.png'
    },
  ]


data={"metadata":[{"id":1,"whatsapp_number":"917709060525","mail":"info@vtorlabs.com","title":"Myyba Shops","meta":"Create My Online Shop, Online Shop, Shop, Store, Create Only Store, Create Online Shop, Online Shop, Ecommerce,cars, pizza, food , delivery, online, shop","address":"Gayatri Darshan, Thakur Village, Kandivali East,Mumbai,Maharashtra, India","logopath":"myybashop/sitedata/logo/logo.png","logo":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/logo/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=c4cca712b83268647d0bb5fc885f726dbc618ed16f0e18350e97d7870deb71dd","bannerpath":"myybashop/sitedata/banner/banner.png","bannerimage":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/banner/banner.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6df3da9ac72cf74506f136ffd0b450a1690b7e3e014dead09c641606eb81531b","youtube_video":"https://www.youtube.com/embed/KB_GMUuV44c"}],"subscriptions":[{"id":5,"name":"1 MONTH PLAN","position":1,"amount":999.0,"selling_amount":999.0,"tag1":null,"tag2":null,"isHighlighted":null},{"id":6,"name":"3 MONTHS PLAN","position":2,"amount":2999.0,"selling_amount":2849.0,"tag1":"5% OFF","tag2":null,"isHighlighted":null},{"id":8,"name":"6 MONTHS PLAN","position":3,"amount":5999.0,"selling_amount":5399.0,"tag1":"10% OFF","tag2":"Recommended","isHighlighted":null},{"id":9,"name":"12 MONTHS PLAN","position":4,"amount":11999.0,"selling_amount":10199.0,"tag1":"15% OFF","tag2":null,"isHighlighted":null}],"feature":[{"id":3,"name":null,"position":1,"description":"<h1>YOUR ENTIRE STORE INTO A <b>QR CODE?</b></h1><br><p>Yes, get all the products you sell into an all in 1 QR code and share it with your customers to place order online. Customers can scan the code and visit your website to place an order</p>\n","path":"myybashop/sitedata/features/1.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=8ffc826858cc6906b46c0a397aca6e1e696374d0da8fefbe5a31df6f42e232c6"},{"id":7,"name":null,"position":5,"description":"\n<h1>\n<b>EASY SALES</b> TRACKING AND CUSTOMER MANAGEMENT\n</h1>\n<br>\n<p>\nKeep a track on your sales with Myyba???s sales report feature and get insights of your customer???s buying activity to improve your sales over the time</p>\n\n","path":"myybashop/sitedata/features/5.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=8a7b53fc5d74c1ae8e349d6fac022a7a76c9d197b6415293c1edb5c28edff88c"},{"id":6,"name":null,"position":4,"description":"<h1>\nAUTOMATED ORDER UPDATES ON <b>WHATSAPP AND SMS</b>\n</h1>\n<br>\n<p>\nNo need to worry about all the post order query calls, we update your customers about their orders over WhatsApp and SMS</p>\n","path":"myybashop/sitedata/features/4.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=dd8be8df7c4293831f528c7eb606506756fb5020e1bd9398d91e66eb15a6d28a"},{"id":8,"name":null,"position":6,"description":"<h1>\nmyybas <b>bizz buddies</b> are always 1 step ahead in providing the support\n</h1>\n<br>\n<p>\nOur on ground 1:1 agents whom we call Bizz Buddies are around the clock available to help your with any issues you are facing to help you grow your business with ease</p>","path":"myybashop/sitedata/features/6.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=489ec9721412802b398366fbb643557bd2f578092ede548978bfdbf56f3dfeb2"},{"id":4,"name":null,"position":2,"description":"<h1>More than <b>150 Payment Options</b>\nfor your customers</h1><br><p>All banks credit / debit cards, netbanking, Google Pay, PayTM, PhonePe & pay later options. Collect payments in any payment mode you want</p>\n","path":"myybashop/sitedata/features/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=e054031483df34e3342af69d3ccb2d5dce16068288166e9fde69d51e5d89791b"},{"id":5,"name":null,"position":3,"description":"<h1>\n<b>SEAMLESS</b> ORDER MANAGEMENT & <b>ROBUST</b> POS\n</h1>\n<br>\n<p>\nControl everything from a single dashboard with centralised order management, pricing, discounting, theme customizing & more\n</p>","path":"myybashop/sitedata/features/3.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/features/3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=b59021e35a8f5cde4d3a539339d3cf81793266940296401c13a44e05f0ae1072"}],"testimony":[],"shoptype":[{"id":3,"name":"FASHION","position":2,"path":"myybashop/sitedata/shoptype/FASHION.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/shoptype/FASHION.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=745674725550007734794ef63851a766593ac66b82a8b98716aa44323e39dac2"},{"id":4,"name":"AUTOMOBILE","position":3,"path":"myybashop/sitedata/shoptype/AUTOMOBILE.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/shoptype/AUTOMOBILE.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=660860eff54dc4fc0455be87d9381761b56669d721e7de8e079eb4ebb50a3b79"},{"id":5,"name":"CAFE / RESTAURANT","position":1,"path":"myybashop/sitedata/shoptype/CAFERESTAURANT.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/shoptype/CAFERESTAURANT.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=00ca5b78f45a59059d427bfb3a63d72d796637f49a1662fd271ab9b9909d66a7"},{"id":6,"name":"FRUITS & VEGETABLES","position":4,"path":"myybashop/sitedata/shoptype/FRUITSVEGETABLES.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/shoptype/FRUITSVEGETABLES.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=956471f3030db57c6661f821af0e0e791105fe7404a29e35eb3eac5b927ceea7"}],"client":[{"id":2,"name":"Laziz Pizza","position":1,"path":"myybashop/sitedata/testimony/LazizPizza.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/testimony/LazizPizza.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=a2fb291183cfdc7b50f8a24489cbbc1a759c9aab784921253958e8bd9e521afe"},{"id":3,"name":"Little Birdie","position":2,"path":"myybashop/sitedata/testimony/LittleBirdie.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/testimony/LittleBirdie.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=360ff6b9275b17fc6221f77e9e9c3f9b70457b3cfe7bb6dc35ec6969f1416711"},{"id":4,"name":"World Pizza","position":3,"path":"myybashop/sitedata/testimony/WorldPizza.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/testimony/WorldPizza.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=82ef3e44c8a5906948e3286802be83b37880a3d5b70c9b0192b882b1af22b6a1"},{"id":5,"name":"Brotherzz","position":4,"path":"myybashop/sitedata/testimony/Brotherzz.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/testimony/Brotherzz.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=88f68472fbfbf4e2bd15ca19f91c44c94b141e721ec3af840a873dc13670b62f"},{"id":6,"name":"NSP","position":5,"path":"myybashop/sitedata/testimony/NSP.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/testimony/NSP.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6e296da401aba29b7f278c46c44012cdeb794c8f0fe5b14ee0e4d89f9e8d00f9"}],"services":[{"id":2,"name":null,"position":1,"description":"<h1><b>WHATSAPP AND SMS CAMPAIGNS</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>\n","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":3,"name":null,"position":2,"description":"\n<h1><b>INFLUENCER MARKETING</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>\n","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":4,"name":null,"position":3,"description":"\n<h1><b>SOCIAL MEDIA MANAGEMENT</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>\n","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":5,"name":null,"position":4,"description":"<h1><b>TARGETED MARKETING CAMPAIGNS</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side,\n managing all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":6,"name":null,"position":4,"description":"<h1><b>TARGETED MARKETING CAMPAIGNS</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side,\n managing all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":7,"name":null,"position":5,"description":"\n<h1><b>OFFLINE MARKETING</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, \nmanaging all your social media platforms does not feel like a task. How? click the button below to get a free demo</p>\n","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=de16858b23a043520c3f2c95fbd0d78e4dfef1d579dede5cb93ba3aad9b86b45"},{"id":8,"name":null,"position":6,"description":"<h1><b>BRANDING AND DESIGNING SERVICES</b></h1><br>\n<p>Managing and growing your brand reputation has never been this easy. With Bizz Buddy by your side, managing all your social media platforms does not feel like a task. \nHow? click the button below to get a free demo</p>","path":"myybashop/sitedata/services/null.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/services/null.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=205a9044d9fab8d09e9025ead7cf0c12e00b5e00967b053a20beef1782090146"}],"team":[{"id":4,"name":"Abhijit Chaudhry","position":1,"designation":"Co-Founder","description":"He is from Information Technology & Security background he is the one to ensure myyba tech and security and its smooth provision.","path":"myybashop/sitedata/team/AbhijitChaudhry.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/team/AbhijitChaudhry.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=46fcbbae50210ae61cc7531ac09325b8509dd019908e482545f964bec8573b0e","linkedIn":"https://www.linkedin.com/in/abhijit-chaudhry-97aa9619b/"},{"id":5,"name":"Moxesh Mehta","position":2,"designation":"Co-Founder","description":"He is from Product & Marketing background, he is the one who ensures myyba propogation and sales","path":"myybashop/sitedata/team/MoxeshMehta.png","image":"https://myyba.s3.ap-south-1.amazonaws.com/myybashop/sitedata/team/MoxeshMehta.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221105T201014Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA5MMWY3PWINB4WFOB%2F20221105%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=c54471f36f9cfe57f8ca0413454b8b5dcd6e9a2a9e2c755b8582226fd6c50dc9","linkedIn":"https://www.linkedin.com/in/moxesh-mehta-a64a67147/"}],"message":"Successfully got the subscriptions","status":200}
  

}
