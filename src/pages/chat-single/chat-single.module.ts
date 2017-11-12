
import { MessagesPage } from './chat-single';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    MomentModule,
    IonicPageModule.forChild(MessagesPage),
  ],
  exports: [
    MessagesPage
  ]
})

export class MessagesPageModule { }
