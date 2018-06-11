import { Component, OnInit } from '@angular/core';
import { ShareddataService } from './../../services/shareddata.service'

@Component({
  selector: 'app-userlogged',
  templateUrl: './userlogged.component.html',
  styleUrls: ['./userlogged.component.scss']
})

export class UserloggedComponent implements OnInit {
  showOptions = false;
  showBaseModal: boolean;
  usermessages: any;
  username = 'Rodrigo Schreiner';
  messagesCount: number;


  constructor(private sharedData: ShareddataService) { }

  ngOnInit() {}

  openBaseModal() {
    this.sharedData.displayMainModal(true);
  }

  getMessagesCount() {
    this.sharedData.userMesg.subscribe(message => this.usermessages = message);
    this.messagesCount = this.usermessages.length;
  }

}
