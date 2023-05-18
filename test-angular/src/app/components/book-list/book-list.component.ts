import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  constructor(private _router: Router) { }

  goToDetails (id:number) {
    console.log(id);
    this._router.navigate(['book', id])
  }

  @Input() bookList: Book[];

}
