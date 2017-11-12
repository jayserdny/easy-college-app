import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImageRecognitionProvider } from '../../providers/image-recognition/image-recognition'
import { CameraProvider } from '../../providers/camera/camera'

/**
 * Generated class for the TestAiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-ai',
  templateUrl: 'test-ai.html',
})
export class TestAiPage {
  data: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cameraUtil: CameraProvider,
              public alertCtrl: AlertController,
              private imageRec: ImageRecognitionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestAiPage');
  }

  testId() {
    return new Promise((resolve, reject) => {
      this.cameraUtil.getPictureFromCamera().then(data => {
        let image = this.imageRec.b64toBlob(data, 512,"image/png")
        this.imageRec.uploadPhoto(image).then(data => {
          resolve(data as any)
        }).catch(error => {
          reject(error)
        })
      })
    }).then(data => {
      this.data = ((data as any).images[0].classifiers[0].classes[0].score)

      if (this.data >= 0.50) {

        let confirm = this.alertCtrl.create({
          title: 'Welcome College Student',
          message: 'You are a college student! Congratulations',
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Agree',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();

      } else {
        let confirm = this.alertCtrl.create({
          title: 'You are not College Student "(',
          message: 'You are not a college student!',
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Agree',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();
      }
      

    })
    
  }

  showAlert() {
    
  }





}
