import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import  firebase from 'firebase'
import { CameraProvider } from '../../providers/camera/camera'
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { ImageRecognitionProvider } from '../../providers/image-recognition/image-recognition'
import { AibotProvider } from '../../providers/aibot/aibot'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  searchBar: string;
  college: Observable<any[]>;

  constructor(public navCtrl: NavController,
              private cameraUtil: CameraProvider,
              private ai: AibotProvider,
              private imageRe: ImageRecognitionProvider,
              db: AngularFirestore,
              adb: AngularFireDatabase) {
                ai.getResponse("hi")
                // this.imageRe.test().then(data =>{
                //   console.log(data)
                // })

                this.college = adb.list('colleges/-KxR5p-kMxFj0DvuEjMm').valueChanges()
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
