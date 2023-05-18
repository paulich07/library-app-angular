import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() book: Book;
}
