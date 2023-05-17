import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPageComponent } from './views/library-page/library-page.component';
import { CreateBookPageComponent } from './views/create-book-page/create-book-page.component';
import { BookDetailsPageComponent } from './views/book-details-page/book-details-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Library',
    component: LibraryPageComponent,
  },
  {
    path: 'create',
    title: 'Create A Book',
    component: CreateBookPageComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailsPageComponent,
  },
  {
    path: '**',
    component: LibraryPageComponent, // or 404 page
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
