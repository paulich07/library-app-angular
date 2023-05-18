import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent {

  editMode:boolean = false;

  book: Book;

  id: any;

  isbn:number = 0;
  author:string|null = "";
  title:string|null = "";
  numberOfReads:number = 0;
  plot:string|null = "";

  constructor(public route: ActivatedRoute, public apiservice: ApiService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getBookDetails(this.id)
    }
    console.log(this.id);
  }

  getBookDetails(id:number):void{
    this.apiservice.getBookById(id).subscribe(res => {
      console.log('res');
      console.log(res);
    })
  }

  saveBookDetails():void{
    /*e
    this.book = {
      isbn: this.isbn,
      title: this.title,
      views: this.views,
      author: this.author,
      plot: this.plot,
    }
    */
  }
}
