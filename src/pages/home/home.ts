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

  takePhoto() {
    this.cameraUtil.getPictureFromCamera().then(data => {
      this.navCtrl.push("PostBoookPage", {
        photo: data
      })
    })
  }

}
