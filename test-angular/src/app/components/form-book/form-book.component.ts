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

  @Input() bookToEdit: Book;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      'title': ['', Validators.required],
      'author': ['', Validators.required],
      'isbn': ['', Validators.required],
      'numberOfReads': ['', Validators.required],
      'plot': ['', Validators.required],
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

  @Output() saveBook = new EventEmitter<FormGroup>();
  
  onSave():void {
    if(!this.form.valid) {
      alert('Compilare tutti i campi');
      return;
    }

    this.saveBook.emit(this.form);

    // emit event
    console.log(
      this.form.controls['title'].value,
      this.form.controls['author'].value
    );
  }
}
