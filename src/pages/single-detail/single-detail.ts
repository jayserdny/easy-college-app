import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

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
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              db: AngularFirestore) {

    this.book = this.navParams.get("details")
    this.items = db.collection('books', ref => ref.orderBy("postedDate", "desc")).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleDetailPage');
  }

}
