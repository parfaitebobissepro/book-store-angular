import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';



@NgModule({
  declarations: [
    BookDetailsComponent,
    AllBooksComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBookComponent,
    AddBookReactiveComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class BooksModule { }

