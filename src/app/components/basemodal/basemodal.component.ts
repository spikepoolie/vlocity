import { ShareddataService } from './../../services/shareddata.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-basemodal',
  templateUrl: './basemodal.component.html',
  styleUrls: ['./basemodal.component.scss']
})

export class BasemodalComponent implements OnInit {
  @Input() viewBaseModal: boolean;
  isBaseModalShown = false;
  mobHeight: number;
  mobWidth: number;
  usermessages: any;
  messagescount: number;
  @ViewChild('basicMainModal') public basicMainModal: ModalDirective;

  constructor(private sharedData: ShareddataService) {}

  ngOnInit(): void {
    this.sharedData.userMesg.subscribe(message => this.usermessages = message);
    this.sharedData.showModal.subscribe(messageModal => this.isBaseModalShown = messageModal);
    this.messagescount = this.usermessages.length;
  }

  public onHidden(): void {
    this.isBaseModalShown = false;
  }

  public showModal(): void {
    this.isBaseModalShown = true;
  }

  public hideModal(): void {
    this.basicMainModal.hide();
  }

}
