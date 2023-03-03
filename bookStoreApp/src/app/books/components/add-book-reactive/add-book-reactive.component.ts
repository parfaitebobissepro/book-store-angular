import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  public titleErrorMessage: string;

  prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' },
  ];
  currencies: any[] = [
    { value: 'USD', viewValue: 'Us Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' },
  ];

  public addBookForm: FormGroup;


  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
    });


    const formaTypeControl = this.addBookForm.get('formatType');
    formaTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChange(x);
    });
  }

  public get authors(): FormArray {
    return <FormArray>this.addBookForm.get('authors');
  }

  private initForm(): void {
    this.addBookForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      //author: '',
      totalPages: '',
      price: this._formBuilder.group(
        {
          currency: '',
          value: '',
        }
      ),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([
        this.getAuthorControl(),
        this.getAuthorControl(),
      ]),
    });

  }
  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: ''
    })
  }

  updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'nitish Kaushik',
      author: 'default'
    });
  }


  saveBook(): void {
    console.log(this.addBookForm.value);
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    } else {
      alert('Form invalid')
    }
  }

  private validateTitleControl(titleControl: AbstractControl): void {
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors['required']) {
        this.titleErrorMessage = 'This is a required field';
      } else if (titleControl.errors['minlength']) {
        this.titleErrorMessage = 'Min length is ' + titleControl.errors?.['minlength']['requiredLength'];
      }
    }
  }

  private formatTypeChange(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if (formatType == 'pdf') {
      pdfControl?.addValidators([Validators.required, Validators.minLength(10)]);
      docControl?.clearValidators();
    } else if (formatType == 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    } else {

    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i:number):void{
    this.authors.removeAt(i);
  }

}
