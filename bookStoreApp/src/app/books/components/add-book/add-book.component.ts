import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from 'src/app/shared/models/books.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  @ViewChild('myForms') myForm: NgForm;
  prices: any[] = [
    {value: 100, viewValue: '$ 100'},
    {value: 200, viewValue: '$ 200'},
    {value: 300, viewValue: '$ 300'},
  ];
  public model: BookModel;
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.model = new BookModel();
    //this.model.title = 'Book';
    this.model.totalPages = 100;
    this.model.price = { currency: '$', value: 100 };
    this.model.isPublished = true;
  }

  saveBook(): void {
    console.log(this.model);
    if(this.myForm.valid){
      this._bookService.addBook(this.model);
    }else{
      alert('Form invalid')
    }
  }



}
