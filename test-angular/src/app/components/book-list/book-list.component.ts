import { Component, OnInit } from '@angular/core';
import { Book } from './../../models/Book';
  
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Book[] = new Array();

  ngOnInit(): void {
    this.books = [
      { 
        title: 'Stranger Things',
        isbn: 2349238423,
        views: 2
      },
      { 
        title: 'Harry Potter',
        isbn: 34423345353,
        views: 10
      },
    ]
  }

  goToDetails (i:object) {
    console.log(i);
  }

}
