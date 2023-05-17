import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  inputBook:string = "";

  @Output() searchBookInParent = new EventEmitter<string>();

  onSearch () {
    this.searchBookInParent.emit(this.inputBook);
  }
}
