import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent {

  editMode:boolean = false;

  book: Book;

  id: any;

  constructor(public route: ActivatedRoute, public apiservice: ApiService, private _router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getBookDetails(this.id)
    }
  }

  getBookDetails(id:number):void{
    this.apiservice.getBookById(id).subscribe(res => {
      this.book = res;
    })
  }

  editBook($event:any):void {
    let form = $event.value;
    this.apiservice.editBook(this.id, form).subscribe(res => {
      alert('updated')
    })
  }

  createBook($event:any):void {
    let form = $event.value;
    this.apiservice.createBook(form).subscribe(res => {
      alert('created')
    })
  }

  deleteBook():void {
    console.log('delete');
    this.apiservice.deleteBook(this.id).subscribe(res => {
      alert('deleted')
    })

    this._router.navigate(['']);
  }
}
