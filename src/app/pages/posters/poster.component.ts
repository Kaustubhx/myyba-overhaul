import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export  class  Poster implements OnInit {
 
  @Input() theme:any
  @Input() data:any
  elementUrl: any;
  correctionLevel: any;

  constructor(){}  
  ngOnInit() {
   
  }
  
getElementUrl(){
  this.elementUrl=NgxQrcodeElementTypes.URL
  return this.elementUrl
}
getCorrectionLevel(){
  this.correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
  return this.correctionLevel
}
getName(ev:any){
  if(ev==null || ev=="")
  {
    return "Myyba"
  }
  else{
    return ev
  }
}
getUrl(ev:any){
  if(ev==null || ev=="")
  {
    return "myyba.com/myyba"
  }
  else{
    return ev
  }
}
getFile(ev:any)
{
  if(ev==null || ev=="")
  {
    return "../../../assets/icon/imagerep.png"
  }
  else{
    return ev
  }
}
}
