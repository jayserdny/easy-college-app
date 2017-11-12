import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'chat.html',
})

export class ChatsPage {

  chats = [{
    imageUrl: 'https://career.virginia.edu/sites/career.virginia.edu/files/styles/sane_output/public/profile%20blank_2.jpg?itok=7Mt86Vqh',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'https://career.virginia.edu/sites/career.virginia.edu/files/styles/sane_output/public/profile%20blank_2.jpg?itok=7Mt86Vqh',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
  ,
  {
    imageUrl: 'https://career.virginia.edu/sites/career.virginia.edu/files/styles/sane_output/public/profile%20blank_2.jpg?itok=7Mt86Vqh',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];

  constructor(public navCtrl: NavController) {}

  viewMessages(chat) {
    this.navCtrl.push('MessagesPage', { chatId: chat.id });
  }
}
