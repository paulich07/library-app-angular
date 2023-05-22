import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() book: Book;

  months:Array<string> = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  constructor(public apiservice:ApiService) {}

  onDelete() {
    this.apiservice.deleteBook(this.book.id)
    .subscribe(
      res => {
        console.log(res);
      }
    )
  }

  editBook() {
    /*
    this.apiservice.editBook(this.book.id)
    .subscribe(
      res => {
        console.log(res);
      }
    )
    */
  }

  toReadableDate(date:string) {
    if (typeof date === 'string' || typeof date === 'object') {
      const x = new Date(date);
      const day = x.getDate();
      const month = this.months[x.getMonth()];
      const year = x.getFullYear().toString();
  
      return `${day} ${month} ${year}`;
      // return day + month + year;
    }
  
    return undefined;
  }
}
