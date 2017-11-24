import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsPage } from '../news/news'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  go(){
    this.navCtrl.push(NewsPage)
  }
}
