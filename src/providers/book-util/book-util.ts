import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Book } from '../../models/models';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import  firebase   from 'firebase';

var metadata = {
  contentType: 'image/png'
};

@Injectable()
export class BookUtilProvider {

  // Initialize a collection for the books
  private bookCollection: AngularFirestoreCollection<Book>;
  public RequestPictureRef: any;


  constructor(private afs: AngularFirestore) {
    // Make a reference of the collection in firebase
    this.bookCollection = afs.collection<Book>('books');
    this.RequestPictureRef = firebase.storage().ref('assets/listingPictures/');
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


  /**
   * Method to add a book to firestore in firebase
   * @param book
   */
  addBook(book: Book, userId, bookTitle) {


    return new Promise(resolve => {
      this.RequestPictureRef.child(userId).child(bookTitle).child(this.makeid()+".png")
      .put(book.cover, metadata).then((savedPicture) => {
        book.postedDate = new Date()
        book.cover = savedPicture.downloadURL
        this.bookCollection.add(book)
      })
      resolve()

      //resolve(book)
    }).catch(error =>{
      console.log(error)
    })


  }

  getBooks() {

  }





}
