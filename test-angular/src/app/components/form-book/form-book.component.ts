import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent {

  form: FormGroup;
  // bookToEdit: Book;

  @Input() set bookToEdit(newBook:Book) {
    if (JSON.stringify(this.bookToEdit) !== '{}') {
      this.setForm(newBook);
    }1
  }

  setForm(newBook:Book) {
    this.form.patchValue({
      title: newBook.title,
      author: newBook.author,
      isbn: newBook.isbn,
      numberOfReads: newBook.numberOfReads,
      plot: newBook.plot,
    })
  }

  constructor(public fb: FormBuilder) {
      this.form = fb.group({
        'title': ['', Validators.required],
        'author': ['', Validators.required],
        'isbn': ['', Validators.required],
        'numberOfReads': [0, Validators.required],
        'plot': [''],
      })
  }

  checkTitle() {
    let title = this.form.controls['title'].value;
    if(!(title.length > 0)) {
      this.form.controls['user'].setErrors({ incorrect: true });
    } else {
      this.form.controls['user'].setErrors(null);
    }
  }

  @Output() 
  saveBook = new EventEmitter<FormGroup>();
  deleteBook = new EventEmitter();
  
  onSave() {
    if(!this.form.valid) {
      alert('Compilare tutti i campi');
      return;
    }

    this.saveBook.emit(this.form);
  }
  onDelete() {
    this.deleteBook.emit();
  }

}
