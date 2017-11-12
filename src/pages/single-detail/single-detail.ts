import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-detail',
  templateUrl: 'single-detail.html',
})
export class SingleDetailPage {

  private book;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.book = this.navParams.get("details")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleDetailPage');
  }

}
