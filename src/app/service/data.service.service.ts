import { Injectable } from '@angular/core';
import { featureDetail } from 'src/interfaces/feature&Details';
import { storeImage } from 'src/interfaces/storeImage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static mobile: boolean;

  constructor() { }


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
      // toBeBold: '',
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
      detailAns: "Keep a track on your sales with Myyba’s sales report feature and get insights of your customer’s buying activity to improve your sales over the time",
      img: '/assets/newImages/Saletracking.png'
    },
  ]
}
