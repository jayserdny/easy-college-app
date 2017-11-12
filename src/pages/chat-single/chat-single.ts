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
    pic: 'https://career.virginia.edu/sites/career.virginia.edu/files/styles/sane_output/public/profile%20blank_2.jpg?itok=7Mt86Vqh',
    username: 'Venkman',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'https://career.virginia.edu/sites/career.virginia.edu/files/styles/sane_output/public/profile%20blank_2.jpg?itok=7Mt86Vqh',
    username: 'Marty',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: "http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png",
      text: 'Hey!'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: "http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png",
      text: 'Hi'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: "http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png",
      text: 'Do have a textbook for CS 1111?'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Maybe'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Maybe not'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Are you sure?'
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
      let answers = ["Hey!", "How are you doing?","How may I help you?","Sorry my friend this is just a Demo"]
      //let random = this.shuffle(answers)


      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: answers[Math.floor(Math.random() * answers.length)]
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  // shuffle(answers) {
  //   var currentIndex = answers.length, temporaryValue, randomIndex;
  //
  //   while (0 !== currentIndex) {
  //     randomIndex= Math.floor(Math.random()*currentIndex);
  //     currentIndex=-1;
  //     temporaryValue=answers[currentIndex];
  //     answers[currentIndex]= answers[randomIndex];
  //     answers[randomIndex]= temporaryValue;
  //   }
  //   return answers;
  // }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}
