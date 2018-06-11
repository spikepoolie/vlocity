
import { FormsModule } from '@angular/forms';
import { ShareddataService } from './services/shareddata.service';
import { VlocityService } from './services/vlocity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { UserloggedComponent } from './components/userlogged/userlogged.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { MessangerComponent } from './components/messanger/messanger.component';
import { BasemodalComponent } from './components/basemodal/basemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserloggedComponent,
    UserlistComponent,
    UserdetailsComponent,
    SearchUserPipe,
    MessangerComponent,
    BasemodalComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [VlocityService, ShareddataService],
  bootstrap: [AppComponent],
  exports: [SearchUserPipe]
})
export class AppModule { }
