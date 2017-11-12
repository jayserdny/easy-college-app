import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchText: string;
  results: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.searchText = this.navParams.get("text")
    this.doSearch()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  doSearch() {
    let type = typeof this.searchText;
    if (this.searchText.match("[0-9]+") ) {

      this.results = this.db.collection('books', book => book.where('isbn', '==', this.searchText)).valueChanges()

    } else {
      
      this.results = this.db.collection('books', book => book.where('title', '==', this.searchText)).valueChanges()
    }
    
      


  }

  openDetails(book: any) {
    this.navCtrl.push("SingleDetailPage", {
      details: book
    })
  }

}
