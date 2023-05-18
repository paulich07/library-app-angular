import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/Book";

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
}