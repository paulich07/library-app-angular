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
    // to do if url has params search book
    this.listAllBooks()
  }

  listAllBooks():void {
    this.apiservice.getAllBooks().subscribe(
      (res) => {
        this.books = res.content;
        console.log(res.content);
      },
      (err) => {
        console.log('Error:', err);
      }
    )
  }

  searchBook (s:string):void {
    // to do search component calls ChangeURL function
    // to do changeURLParams function
    // to do add listeners of url (if url changes searchBook is called)
    this.apiservice.searchBooks(s).subscribe(res => {
      this.books = res;
    })
  }

}
