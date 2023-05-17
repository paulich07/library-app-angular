import { Component, Input } from '@angular/core';
import { Book } from './../../models/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  constructor(private _router: Router) { }

  goToDetails (isbn:number) {
    this._router.navigate(['book', isbn])
    console.log(isbn);
  }

  @Input() bookList: Book[];

}
