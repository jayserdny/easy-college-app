import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import firebase from 'firebase';

var metadata = {
  contentType: 'image/png'
};

@Injectable()
export class ImageRecognitionProvider {

  private imageData;
  
  private RequestPictureRef;
  private url;

  constructor(public http: Http, private afs: AngularFirestore) {
    console.log('Hello ImageRecognitionProvider Provider');
    this.RequestPictureRef = firebase.storage().ref('assets/ids/');
  }

  test() {
    if (this.imageData) {
      // already loaded data
      return Promise.resolve(this.imageData);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
     
      this.http.get('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?classifier_ids=StudentIdRecognition_1108660553&threshold=0&api_key=3f1a74df06988116cdf0c5e55d9a640e6ebd0f1b&url=https://firebasestorage.googleapis.com/v0/b/book-trade-16567.appspot.com/o/3.jpeg?alt=media&token=09b5f442-402b-4eac-9c18-25b3541eed80&version=2016-05-20')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.imageData = data;
          resolve(this.imageData);
        });
    });
  }

  uploadPhoto(img) {
    let id = ""
    return new Promise(resolve => {
      this.RequestPictureRef.child(this.makeid()+".png")
      .put(img, metadata).then((savedPicture) => {
        id = savedPicture.downloadURL
        
      }).then(() => {
        this.url = id
        console.log(id)
        this.http.get(encodeURI('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?classifier_ids=StudentIdRecognition_1108660553&threshold=0&api_key=3f1a74df06988116cdf0c5e55d9a640e6ebd0f1b&url=' + id + '&version=2016-05-20'))
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.imageData = data;
          resolve(this.imageData);
        });

      })
      //resolve()

      //resolve(book)
    }).catch(error =>{
      console.log(error)
    })

  }

    /**
   * Method to convert base64 data to blobs.
   *
   * @param {String} b64Data: Base64 image data.
   * @param {number} sliceSize: Number of slice size for image.
   * @param {string} fileType: File type of the image.
   */
  b64toBlob(b64Data: string, sliceSize: number,fileType: string) {
    
        sliceSize = sliceSize || 512;
    
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
    
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);
    
          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
    
          var byteArray = new Uint8Array(byteNumbers);
    
          byteArrays.push(byteArray);
        }
        
        let blob;
        blob = new Blob(byteArrays, { type: fileType });
        return blob;
  
  
  }

  generatePictures(snap, pictureArray, userId, listingTitle) {
    
        let urls = [];
    
        this.RequestPictureRef.child(userId).child(listingTitle).child(this.makeid() + ".png")
        .put(snap, metadata).then((savedPicture) => {
    
          for (let i = 0; i < pictureArray.length; i++) {
    
            urls[i] = savedPicture.downloadURL;
    
          }
    
        })
    
        return urls;
    
  }

  /**
   * Method to generate random id.
   *
   * @param
   */
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  //   var visual_recognition = watson.visual_recognition({
  //     api_key: '3f1a74df06988116cdf0c5e55d9a640e6ebd0f1b}',
  //     version: 'v3',
  //     version_date: '2016-05-20'
  //   });
    
  //   var params = {
  //     images_file: "https://books.google.com/books/content?id=hEF-BAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&imgtk=AFLRE71c2VSfu8jlqvHepcFZF-9J-pLV70REdRG1w3i7aECAzpSOvV21bVgBWl1TYhcF1PTKPTqjeoXmQKiIzE4eDMnhCqX69DRKcLYrRnbtSNAvEfyn2IgYNHRowMubxfAk7udhZefa"
  //   };
    
  //   visual_recognition.classify(params, function(err, res) {
  //     if (err)
  //       console.log(err);
  //     else
  //       console.log(res);
  //   });
  // }
  

}
