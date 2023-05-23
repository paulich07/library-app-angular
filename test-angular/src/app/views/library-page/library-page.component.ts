import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, NavigationEnd, NavigationSkipped, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent {

  sort:String='dateAdded';
  sortDesc:boolean=true;
  search:string = '';
  size:number;
  // page:number;

  books:Book[] = new Array();

  totalPages:number;
  currentPage:number = 0;
  totalElements:number;

  paginationConfig: PaginationInstance = {
    itemsPerPage: 0,
    currentPage: 0,
  };

  loading:boolean = false;

  filterOptions = [
    { value: 'dateAdded', label: 'Data di inserimento (dal più recente)' },
    { value: 'title', label: 'Titolo (A-Z)' },
    { value: 'author', label: 'Autore (A-Z)' },
    { value: 'numberOfReads', label: 'N. Letture (dal meno letto)' },
    // aggiungere ASC e DESC quando verranno implementate nell'api
  ];

  sizeOptions = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
  ]

  constructor(public apiservice: ApiService, private _router: Router, private route: ActivatedRoute) {
    _router.events.subscribe(($event) => {
      console.log($event);
      if ($event instanceof NavigationEnd || $event instanceof NavigationSkipped) {
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
      this.sort = params['sort'] || 'dateAdded';
      this.size = params['size'] || 10;
      this.search = params['search'] || '';
      this.currentPage = params['page'] || 0;
    })
  }

  setUrlValues () {
    let params = { 'sort': this.sort, 'search': this.search, 'page': this.currentPage, 'size': this.size };
    this._router.navigate(['/'], {queryParams: params});
  }
  
  searchBooks () {
    let params = { 'sort': this.sort, 'search': this.search, 'page': this.currentPage-1, 'size': this.size };
    this.apiservice.searchBooks(params)
    .subscribe(
      res => {
        this.books = res.content;
        // this.currentPage = res.number;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;

        this.paginationConfig.currentPage = res.number + 1;
        this.paginationConfig.itemsPerPage = this.size;
        this.paginationConfig.totalItems = this.totalElements;
      }
    )
  }

  updateSearch (s:string) {
    this.search = (s.length > 0) ? s : '';
    this.searchBooks();
  }

  goToLibrary () {
    this._router.navigate(['/'], {queryParams: { search: undefined }});
  }

  previousPage () {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchBooks();
    }
  }

  nextPage () {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchBooks();
    }
  }

  goToPage (page:number) {
    this.currentPage = page;
    this.searchBooks();
  }

  onPageChange(event: number) {
    this.currentPage = event;
    this.searchBooks();
  }
}
