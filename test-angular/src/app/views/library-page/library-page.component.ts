import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent {

  sortBy:String='dateAdded';
  sortDesc:boolean=true;
  size:number;
  page:number;
  search:string;

  books:Book[] = new Array();

  totalPages:number;
  currentPage:number;
  totalElements:number;

  loading:boolean = false;

  constructor(public apiservice: ApiService, private _router: Router) { }

  ngOnInit () {
    this.listAllBooks()
  }

  listAllBooks() {
    this.searchBook('');
  }

  searchBook (s:string) {
    this.search = s;
    let params = { 'sortBy': this.sortBy, 'sortDesc': this.sortDesc, 'search': this.search };
    this.apiservice.searchBooks(s, params).subscribe(
      res => {
        console.log(res.content);
        this.books = res.content;
        this.books = res.content;
        this.currentPage = res.number;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
      },
      (err) => {
        console.log('Error:', err);
      }
    )
  }

  goToLibrary () {
    this._router.navigate(['Library']);
  }
}
