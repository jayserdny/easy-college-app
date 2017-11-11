import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostBoookPage } from './post-boook';

@NgModule({
  declarations: [
    PostBoookPage,
  ],
  imports: [
    IonicPageModule.forChild(PostBoookPage),
  ],
})
export class PostBoookPageModule {}
