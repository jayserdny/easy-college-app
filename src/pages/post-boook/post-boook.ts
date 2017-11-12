import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Book } from '../../models/models'
import { BookUtilProvider } from '../../providers/book-util/book-util'


@IonicPage()
@Component({
  selector: 'page-post-boook',
  templateUrl: 'post-boook.html',
})
export class PostBoookPage {

  private coverPhoto = 'data:image/png;base64,';
  private book = {} as Book;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              private bookUtil: BookUtilProvider) {
                
    this.coverPhoto = navParams.get("photo")
    this.coverPhoto = this.bookUtil.b64toBlob(this.coverPhoto, 512,"image/png")
    
  }
 
  /**
   * Method to submit the book to the database
   */
  postBook() {
    this.book.cover = this.coverPhoto
    const loading = this.loadingCtrl.create();
    let toast = this.toastCtrl.create({
      message: 'Your book has been posted! 😱',
      duration: 3000
    });
    loading.present();
    return new Promise(resolve => {
      this.bookUtil.addBook(this.book, "userId", "book-title").then(data => {
        resolve(data as any)
        loading.dismiss()
        toast.present()
        this.navCtrl.pop()
      }).catch(error => {
        console.log(error)
      })
    })


  }

}
