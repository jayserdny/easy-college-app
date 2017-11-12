import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SelfProfilePage} from '../pages/self-profile/self-profile'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";/**Change this back to HomePage */

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'My Profile', component: "SelfProfilePage", icon: "contact" },
      { title: 'Messages', component: "ChatsPage", icon: "chatbubbles"},
      { title: 'Categories', component: "CategoryPage", icon: "list" },
      { title: 'Customer Support', component: HomePage, icon: "build" },
      { title: 'Settings', component: HomePage, icon: "settings" },
      { title: 'Test AI', component: "TestAiPage", icon: "settings" },
      { title: 'Log Out', component: HomePage, icon: "log-out" },



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
