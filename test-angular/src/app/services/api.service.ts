import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Book } from "../models/Book";
import { FormGroup } from "@angular/forms";

interface BookResponse {
    content: Book[];
    totalElements: number;
    totalPages: number;
    number: number;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient){}
    
    searchBooks(s:string, params:object): Observable<BookResponse> {
        console.log(params);
        let queryParams = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
        let url = 'http://localhost:8080/books?' + queryParams;
        return this.http.get<BookResponse>(url);
    }

    getAllBooks(): Observable<BookResponse> {
        let url = 'http://localhost:8080/books';
        return this.http.get<BookResponse>(url);
    }

    getBookById(id:number): Observable<Book> {
        let url = 'http://localhost:8080/books/' + id;
        return this.http.get<Book>(url);
    }

    editBook(id:number, form:FormGroup): Observable<Book> {
        let url = 'http://localhost:8080/books/' + id;
        return this.http.put<Book>(url, form);
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

    deleteBook(id:number): Observable<Book> {
        let url = 'http://localhost:8080/books/' + id;
        return this.http.delete<Book>(url);
    }

    addOneView(id:number): Observable<Book> {
        let url = 'http://localhost:8080/books/' + id + '/read';
        return this.http.delete<Book>(url);
    }
}