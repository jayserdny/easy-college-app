import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleDetailPage } from './single-detail';

@NgModule({
  declarations: [
    SingleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleDetailPage),
  ],
})
export class SingleDetailPageModule {}
