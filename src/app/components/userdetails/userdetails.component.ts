import { MessangerComponent } from './../messanger/messanger.component';
import { Component, OnInit } from '@angular/core';
import { ShareddataService } from './../../services/shareddata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  hasUserDetailData: boolean;
  userDetails: any;
  message: boolean;
  shouldShowModal: boolean;
  maxRatingStars = 5;
  userOptions = ['Likes', 'Dislikes'];
  constructor(private sharedData: ShareddataService) { }

  ngOnInit() {
    this.sharedData.currentMessage.subscribe(message => this.hasUserDetailData = message);
    this.sharedData.selectedUserData.subscribe(message => this.userDetails = message);
    this.sharedData.showMBox.subscribe(message => this.shouldShowModal = message);
  }

  createRange(number) {
    const items = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  closePanel() {
    this.hasUserDetailData = false;
    this.sharedData.changeCurrentUser('');
  }

  openCloseModal() {
    this.sharedData.displayMBox(true);
  }

}
