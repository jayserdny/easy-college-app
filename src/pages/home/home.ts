import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraProvider } from '../../providers/camera/camera'
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  searchBar: string;

  constructor(public navCtrl: NavController,
              private cameraUtil: CameraProvider,
              db: AngularFirestore) {

                this.items = db.collection('books', ref => ref.orderBy("postedDate", "desc")).valueChanges();

  }

  /**
   * Method to open the camera to take a photo
   */
  takePhoto() {
    this.cameraUtil.getPictureFromCamera().then(data => {
      this.navCtrl.push("PostBoookPage", {
        photo: data
      })
    })
  }

  /**
   * Method to select the image from the library
   */
  selectFromLibrary() {
    this.cameraUtil.getPictureFromPhotoLibrary().then(data => {
      this.navCtrl.push("PostBoookPage", {
        photo: data
      })
    })
  }

  search() {
    this.navCtrl.push("SearchPage", {
      text: this.searchBar
    })
  }

  openPage(book: any) {
    this.navCtrl.push("SingleDetailPage", {
      details: book
    })
  }

}
