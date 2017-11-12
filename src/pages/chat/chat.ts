import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'chat.html',
})

export class ChatsPage {

  chats = [{
    imageUrl: 'https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'https://static.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
  ,
  {
    imageUrl: 'https://img.teleflora.com/images/o_0/l_flowers:t43-1a,pg_6/w_272,h_340,cs_no_cmyk,c_pad,g_south/f_png,q_auto:eco,e_sharpen:200/flowers/t43-1a/Teleflora%27sBeHappy%C2%AEBouquetwithRoses',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];

  constructor(public navCtrl: NavController) {}

  viewMessages(chat) {
    this.navCtrl.push('MessagesPage', { chatId: chat.id });
  }
}
