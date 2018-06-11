
import { ShareddataService } from './../../services/shareddata.service';
import { VlocityService } from './../../services/vlocity.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  listOfUser = [];
  chevronUp = false;
  jsonFileName = 'people.json';
  username = '';
  allUsers: any;
  shouldShow = true;
  currentUser: number;


  constructor(
    private vlocityService: VlocityService,
    private sharedData: ShareddataService
  ) {}

  ngOnInit() {
    this.sharedData.selectedUser.subscribe(message => this.currentUser = message);
    this.vlocityService.getListofPeople(this.jsonFileName, '').subscribe(response => {
      if (response) {
        this.listOfUser = response.People;
        this.allUsers = response.People;
      }
    });
  }

  clearSearch() {
    this.username = '';
    this.sharedData.changeMessage(false);
    this.listOfUser = this.allUsers;
  }

  updateResponse(userName: string = '', idx: number) {
      this.currentUser = idx;
      this.chevronUp = !this.chevronUp;
      this.sharedData.changeMessage(true);
      const currentUserSelected = this.listOfUser.find(item => item.name === userName);
      this.username = '';
      this.sharedData.changeUserData(currentUserSelected);
  }

  onKey(event: any) {
    this.sharedData.changeMessage(false);
    this.username = event.target.value;
    this.listOfUser = this.filterUsers(this.allUsers, event.target.value);
  }

  filterUsers(listofusers: any, userToSearch: string): any {
    const lea = listofusers.filter(function (obj) {
    for (const key in obj) {
        if (key === 'name') {
          if (obj[key].toLowerCase().includes(userToSearch.toLowerCase())) {
            return obj;
          }
        }
      }
    });
    return lea;
  }
}
