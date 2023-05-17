import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryPageComponent } from './views/library-page/library-page.component';
import { CreateBookPageComponent } from './views/create-book-page/create-book-page.component';
import { BookDetailsPageComponent } from './views/book-details-page/book-details-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    BookListComponent,
    LibraryPageComponent,
    CreateBookPageComponent,
    BookDetailsPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
