import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, endWith } from "rxjs";
import { Book } from "../models/Book";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient){}

    searchBooks(s:string): Observable<Book[]> {
        let url = 'http://localhost:8080/books?search='+s;
        return this.http.get<Book[]>(url);
    }

    getBooks(): Observable<Book[]> {
        let url = 'http://localhost:8080/books';
        return this.http.get<Book[]>(url);
    }

    getBookById(id:number): Observable<Book> {
        let url = 'http://localhost:8080/' + id;
        return this.http.get<Book>(url);
    }

    createBook(form:FormGroup): Observable<Book> {
        /*
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Origin,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
              'Access-Control-Expose-Headers': 'Content-Length,Content-Range',
            })
          };
        */

        console.log(form);
        let url = 'http://localhost:8080/books';
        return this.http.post<Book>(url, form);
    }
}