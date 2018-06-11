import { any } from 'codelyzer/util/function';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class ShareddataService {

  private hasDetailsData = new BehaviorSubject(false);
  currentMessage = this.hasDetailsData.asObservable();

  private userDetailsData = new BehaviorSubject<any>([]);
  selectedUserData = this.userDetailsData.asObservable();

  private userCurrent = new BehaviorSubject<any>([]);
  selectedUser = this.userCurrent.asObservable();

  private showMessageForm = new BehaviorSubject(false);
  showMBox = this.showMessageForm.asObservable();

  private showMainModal = new BehaviorSubject(false);
  showModal = this.showMainModal.asObservable();

  private userMessages = new BehaviorSubject<any>([]);
  userMesg = this.userMessages.asObservable();

  changeMessage(message: any) {
    this.hasDetailsData.next(message);
  }

  changeUserData(message: any) {
    this.userDetailsData.next(message);
  }

  changeCurrentUser(message: any) {
    this.userCurrent.next(message);
  }

  displayMBox(message: any) {
    this.showMessageForm.next(message);
  }

  displayMainModal(message: any) {
    this.showMainModal.next(message);
  }

  displayUserMessages(message: any) {
    this.userMessages.next(message);
  }

  constructor() { }
}
