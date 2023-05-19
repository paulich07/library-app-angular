import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent {

  books:Book[] = new Array();

  loading:boolean = false;

  constructor(public apiservice: ApiService) { }

  ngOnInit():void {
    this.listAllBooks()
  }

  listAllBooks():void {
    this.apiservice.getAllBooks().subscribe(res => {
      this.books = res;
    })
  }

  searchBook (s:string):void {
    this.apiservice.searchBooks(s).subscribe(res => {
      this.books = res;
    })
  }

}
