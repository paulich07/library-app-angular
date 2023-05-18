import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookDetails } from 'src/app/models/BookDetails';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss']
})
export class EditBookFormComponent {

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      'title': ['', Validators.required],
      'author': ['', Validators.required],
      'isbn': ['', Validators.required],
      'views': ['', Validators.required],
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

  saveBookDetails():void {
    if(!this.form.valid) {
      alert('Compilare tutti i campi');
      return;
    }
    console.log(
      this.form.controls['title'].value,
      this.form.controls['author'].value
    );
  }
}
