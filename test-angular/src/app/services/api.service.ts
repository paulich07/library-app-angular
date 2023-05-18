import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/Book";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient){}

    getBooks(): Observable<Book[]> {
        let url = 'http://localhost:8080/books';
        return this.http.get<Book[]>(url);
    }
}