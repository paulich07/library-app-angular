import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent {

  id: string|null;

  constructor(public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
 
  }
}
