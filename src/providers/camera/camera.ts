import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';


@Injectable()
export class CameraProvider {

  constructor(private camera: Camera) {
   
  }

  /**
   * Method to get picture from Camera
   *
   * @param {}
   */
  getPictureFromCamera() {
    return this.getImage(this.camera.PictureSourceType.CAMERA);
  }

  /**
   * Method to get picture from Image Library
   *
   * @param {}
   */
  getPictureFromPhotoLibrary() {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  /**
   * Method to start camera.
   *
   * @param {string} source: Source from where to get the image
   */
  getImage(source) {
    const options = {
      quality : 80,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : source,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1024,
      targetHeight: 768,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    return this.camera.getPicture(options).then(imageData => {
      return imageData;
    }, error => {
      console.log('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }

}
