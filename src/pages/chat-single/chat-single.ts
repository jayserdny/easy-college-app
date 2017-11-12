import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'chat-single.html'
})
export class MessagesPage {
  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'https://i.pinimg.com/736x/55/62/16/55621658bd0197afd7ec2d91ea0c8339--swings-cho-kyuhyun.jpg',
    username: 'Venkman',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e15/10903590_585774918225081_1873336001_n.jpg?ig_cache_key=ODk0Njk0NTM4MTAzNzI5NTY4.2',
    username: 'Marty',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: "https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e15/10903590_585774918225081_1873336001_n.jpg?ig_cache_key=ODk0Njk0NTM4MTAzNzI5NTY4.2",
      text: 'Wow!!'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: "https://i.pinimg.com/736x/55/62/16/55621658bd0197afd7ec2d91ea0c8339--swings-cho-kyuhyun.jpg",
      text: 'what??'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: "https://i.pinimg.com/564x/57/e1/c4/57e1c4c50fd479756351b48762f5ecc5.jpg",
      text: 'Pretty long message with lots of content'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Pretty long message with even way more of lots and lots of content'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'what??'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'yes!'
    }
  ];

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';

  }

  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Just a quick reply'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}
