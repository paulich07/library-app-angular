import { Component, Input } from '@angular/core';
import { BookDetails } from 'src/app/models/BookDetails';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() bookDetails: BookDetails;
}
