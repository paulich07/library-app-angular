import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-book-page',
  templateUrl: './create-book-page.component.html',
  styleUrls: ['./create-book-page.component.scss']
})
export class CreateBookPageComponent {

  constructor(public apiservice: ApiService, private _router: Router) {}

  createBook($event:any) {
    let form = $event.value;
    console.log(form);
    this.apiservice.createBook(form).subscribe(
      (res) => {
        console.log(res.id);
        this._router.navigate(['book', res.id])
      },
      (e) => {
        console.error(e);
      }
    );
  }
}
