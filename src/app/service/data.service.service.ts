import { Injectable } from '@angular/core';
import { featureDetail } from 'src/interfaces/feature&Details';
import { serviceList } from 'src/interfaces/servicesList';
import { storeImage } from 'src/interfaces/storeImage';
import { ApiserviceService } from './apiservice.service';

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
      // serviceName: '',
      detailAns: 'Yes, get all the products you sell into an all in 1 QR code and share it with your customers to place order online. Customers can scan the code and visit your website to place an order',
      img: '/serviceSummarys/newImages/QRScanning.serviceImg'
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

  myybaShopPlans = [
    {
      percentOff: '',
      discountPrice: '',
      actualPrice: '₹ 999*',
      span: '1 MONTH PLAN',
    },
    {
      percentOff: '5% OFF',
      discountPrice: '₹2,849*',
      actualPrice: '₹2,999',
      span: '3 MONTHS PLAN',
    },
    {
      percentOff: '10% OFF',
      discountPrice: '₹ 5,999*',
      actualPrice: '₹ 5,399*',
      span: '3 MONTH PLAN',
      recommended: true,
    },
    {
      percentOff: '15% OFF',
      discountPrice: '₹11,999',
      actualPrice: '₹10,199*',
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
}
