import { VlocityService } from './../../services/vlocity.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { ShareddataService } from './../../services/shareddata.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.scss']
})
export class MessangerComponent implements OnInit {
  @ViewChild('basicModal') public basicModal: ModalDirective;

  public isModalShown = false;
  userDetails: any;
  messageFrom = 'Rodrigo Schreiner';
  shouldShowModal: boolean;
  messageTo: string;
  myMessage: string;
  private messageUrl = 'vlocity_save_message.php';
  private getMessageUrl = 'vlocity_getmy_messages.php';

  constructor(
    private sharedData: ShareddataService,
    private veloService: VlocityService
  ) { }

  ngOnInit() {
    this.getMyMessages(this.messageFrom, this.getMessageUrl);
    this.sharedData.showMBox.subscribe(message => this.isModalShown = message);
    this.sharedData.selectedUserData.subscribe(message => this.userDetails = message);
  }

  public showModal(editMode): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.basicModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }

  sendMessage(frm) {
    this.hideModal();
    const messageTo = this.userDetails.name;
    const message = frm.myMessage;
    const messageContent = '{"msgFrom":"' + this.messageFrom + '", "msg":"' + message + '", "msgTo":"' + messageTo + '"}';

   this.veloService.sendMessage(messageContent, this.messageUrl).subscribe(response => {
      if (response) {
        this.getMyMessages(this.messageFrom, this.getMessageUrl);
      }
    });
   this.myMessage = '';
  }

  getMyMessages(entry: string, url: string) {
    this.veloService.getMessagesByUser(entry, url).subscribe(response => {
      if (response) {
        this.sharedData.displayUserMessages(response);
      }
    });
  }
}
