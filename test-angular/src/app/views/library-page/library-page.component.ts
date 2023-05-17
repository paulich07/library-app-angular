import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent {

  loading:boolean = false;

  constructor(public http: HttpClient) { }

  searchBook (s:string):void {
    this.loading = true;
    let url = 'mockurl/api?search=' + s; 
    this.http.get<Book[]>(url)
    .subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }
}
