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
    title: 'CreateABook',
    component: CreateBookPageComponent,
  },
  {
    path: 'book/:id',
    title: 'BookDetails',
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
