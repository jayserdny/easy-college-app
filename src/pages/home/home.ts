import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraProvider } from '../../providers/camera/camera'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private cameraUtil: CameraProvider) {

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

}
