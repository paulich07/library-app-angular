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

  sort:String='dateAdded';
  sortDesc:boolean=true;
  size:number;
  page:number;
  search:string = '';

  books:Book[] = new Array();

  totalPages:number;
  currentPage:number;
  totalElements:number;

  loading:boolean = false;

  filterOptions = [
    { value: 'dateAdded', label: 'Data di inserimento' },
    { value: 'title', label: 'Titolo (A-Z)' },
    { value: 'author', label: 'Autore (A-Z)' },
    { value: 'numberOfReads', label: 'N. Letture' },
  ];

  constructor(public apiservice: ApiService, private _router: Router) { }

  ngOnInit () {
    this.listAllBooks()
  }

  listAllBooks() {
    this.searchBook();
  }

  searchBook () {
    let params = { 'sort': this.sort, 'sortDesc': this.sortDesc, 'search': this.search };
    this.apiservice.searchBooks(params).subscribe(
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

  updateSearch (s:string) {
    this.search = (s.length > 0) ? s : '';
    this.searchBook();
  }

  goToLibrary () {
    this._router.navigate(['/']);
  }
}
