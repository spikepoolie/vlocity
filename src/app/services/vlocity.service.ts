import { BaseService } from './base.service';
import { AppComponent } from '../app.component';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class VlocityService extends BaseService {
  private static RESOURCE = '';

  constructor(public http: Http) {
    super(http, VlocityService.RESOURCE);
  }

  sendMessage(myentry: string, myurl: string): Observable<any> {
    return this.sendObjectWithPost(myentry, myurl);
  }

  getListofPeople(entry: string, resource: string): Observable<any> {
    return this.getArray(entry);
  }

  getAllMyDocuments(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getDocumentsByFlow(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getDocReview(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getMessagesByUser(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getDocumentsById(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getDocsToBeCompared(myentry: any, myurl: string): Observable<Object[]> {
    return this.getArrayWithPost(myentry, myurl);
  }

  getCampaignList(myurl: string): Observable<Object[]> {
    return this.getArray(myurl);
  }

  getUsersList(myurl: string): Observable<Object[]> {
    return this.getArray(myurl);
  }

  getRolesList(myurl: string): Observable<Object[]> {
    return this.getArray(myurl);
  }

  getAssetsList(myurl: string): Observable<Object[]> {
    return this.getArray(myurl);
  }

  createDocument(myentry: any, myUrl: string): Observable<Object[]> {
    return this.sendObjectWithPost(myentry, myUrl);
  }


}

