import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AllBooksComponent } from './components/all-books/all-books.component';



@NgModule({
  declarations: [
    HomeComponent,
    BookDetailsComponent,
    AllBooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
