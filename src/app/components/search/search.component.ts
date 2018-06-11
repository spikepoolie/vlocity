import { SearchUserPipe } from './../../pipes/search-user.pipe';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shouldShow = true;
  doc_name = '';
  searchText = '';
  values = '';

  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.doc_name = '';
  }

  searchPeople(username) {
    alert(this.doc_name);
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }


}
