import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfProfilePage } from './self-profile';

@NgModule({
  declarations: [
    SelfProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SelfProfilePage),
  ],
})
export class SelfProfilePageModule {}
