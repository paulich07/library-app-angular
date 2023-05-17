import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPageComponent } from './views/library-page/library-page.component';
import { CreateBookPageComponent } from './views/create-book-page/create-book-page.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryPageComponent
  },
  {
    path: 'create',
    component: CreateBookPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
