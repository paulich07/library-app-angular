import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/models/BookDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent {

  book: BookDetails|null = null;

  id: string|null;

  constructor(public route: ActivatedRoute, public http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.getBookDetails(this.id)
    }
    console.log(this.id);
  }

  getBookDetails(id:string):void{
    this.book = {
      isbn: 2134324,
      title: 'Harry Potter',
      views: 10,
      author: 'J.K. Rowling',
      plot: 'Lorem ipsum',
    }
    /*
    let url = 'mockurl/api/' + id; 
    this.http.get<Book[]>(url)
    .subscribe(res => {
      console.log(res);
    })
    */
  }
}
