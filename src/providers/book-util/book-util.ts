import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Book } from '../../models/models';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BookUtilProvider {

  // Initialize a collection for the books 
  private bookCollection: AngularFirestoreCollection<Book>;

  constructor(private afs: AngularFirestore) {
    // Make a reference of the collection in firebase
    this.bookCollection = afs.collection<Book>('books');
  }

  /**
   * Method to add a book to firestore in firebase
   * @param book 
   */
  addBook(book: Book) {
    return new Promise((resolve, reject) => {
      this.bookCollection.add(book).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  



}
