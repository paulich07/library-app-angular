import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  loading:boolean = false;

  inputBook:string = "";

  constructor(public http: HttpClient) { }

  onSearch (s:string):void {
    this.loading = true;
    let url = 'mockurl/api?search='+s; 
    this.http.get(url)
    .subscribe(res => {
      console.log(res);
      this.loading = false;
    })
  }

  callback = (res:any) => {
    console.log(res);
  }
}
