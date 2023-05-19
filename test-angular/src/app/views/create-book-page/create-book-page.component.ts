import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-book-page',
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.scss']
})
export class CreateBookPageComponent {

  saved:boolean = false;

  constructor(public apiservice: ApiService) {}

  createBook($event:any) {
    let form = $event.value;
    this.apiservice.createBook(form).subscribe(res => {
      this.saved = true;
    });
  }
}
