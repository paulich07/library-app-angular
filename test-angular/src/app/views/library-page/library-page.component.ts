import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
    { value: 'dateAdded', label: 'Data di inserimento (dal più recente)' },
    { value: 'title', label: 'Titolo (A-Z)' },
    { value: 'author', label: 'Autore (A-Z)' },
    { value: 'numberOfReads', label: 'N. Letture (dal meno letto)' },
  ];

  constructor(public apiservice: ApiService, private _router: Router, private route: ActivatedRoute) {
    _router.events.subscribe(($event) => {
      if ($event instanceof NavigationEnd) {
        console.log($event.url);
        this.getUrlValues();
        this.searchBooks();
      }
    })
  }

  ngOnInit () {
    // search params in route
    this.getUrlValues();
    this.searchBooks();
  }

  getUrlValues () {
    // search params in route
    this.route.queryParams
    .subscribe((params) => {
      this.sort = params['sort'] || this.sort;
      this.size = params['size'] || this.size;
      this.search = params['search'] || this.search;
      this.page = params['page'] || this.page;
    })
  }

  searchBooks () {
    let params = { 'sort': this.sort, 'search': this.search };
    this.apiservice.searchBooks(params).subscribe(
      res => {
        // console.log(res.content);
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
    this.searchBooks();
  }

  goToLibrary () {
    this._router.navigate(['/']);
  }
}
