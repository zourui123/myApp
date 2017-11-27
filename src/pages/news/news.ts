import { Component,ChangeDetectorRef, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DemoService} from "../../app/services/demo.service";
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   // 接收数据用

 contactInfo: Object; 
 listData: Object;
  constructor(public navCtrl: NavController, private ref: ChangeDetectorRef, public navParams: NavParams,private demoService: DemoService) {
  }

  ionViewDidLoad() {
 
    let  id =  this.navParams.get('id')
    console.log(id)
   // 网络请求
   this.getHomeInfo();

   // 本地 json
   this.getRequestContact();
  }
  
  getHomeInfo(){
   this.demoService.getHomeInfo()
    .subscribe(res => {
     this.listData = res.json();
     // 数据格式请看log
     console.log("listData------->",this.listData);
     this.ref.detectChanges();
    }, error => {
     console.log(error);
    });
  }
  getRequestContact(){
    this.demoService.getRequestContact()
     .subscribe(res => {
      this.contactInfo = res.json();
      console.log("contactInfo------->",this.contactInfo);
      this.ref.detectChanges();
     }, error => {
      console.log(error);
     });
   }
  
}
