import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { User } from '../../models/models'
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AuthProvider {

  defaultImage: string = "https://firebasestorage.googleapis.com/v0/b/vendelo-comodo.appspot.com/o/placeholder_user.png?alt=media&token=ef5a83ae-f38b-4104-ac1a-0bfd7d0c1db6";
  
  constructor(public http: Http, private af: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  /**
  * Method to log in with email
  * 
  * @param {} credentials: Array with login credentials
  */
  loginWithEmail(user: User) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  /**
  * Method to create user
  *
  * @param {} credentials: Array with signup credentials
  */
  signupUser(user: User) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((newUser) => {
      firebase.auth().currentUser.updateProfile({
        displayName: user.name, photoURL: null
      })
      firebase.database().ref('/userProfile').child(newUser.uid).set({
        name: user.name,
        email: user.email,
        college: user.college,
        userId: newUser.uid,
        major: user.major,
        profilePicture: this.defaultImage,
        wishList: [],
        stats: {
          traded: 0,
          posted: 0,
          followers: 0,
          following: 0,
          wishList: 0
        }
      }).then(() => {
        // After register, send user email verification
        this.sendEmailVerification();
      })

      
    }).catch(error => {
      console.log(error)
    })
    
  }

  /*
  * Method to reset user password
  * email: string with user's email
  */
  resetPassword(emailAddress: any) {
    
    return firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(res => {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    
  }

  /*
  * Method to logout
  */
  logout() {
    this.af.auth.signOut();
  }

  /*
  * Method to send email verification to new user
  */
  sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      console.log('email sent'); //uncomment for debug
    }).catch((error) => {
      //console.log('error', error); //uncomment for debug
    });
  }

}
