import { Injectable } from '@angular/core';
import { BookModel } from '../../shared/models/books.model';

@Injectable(
  { "providedIn": "root" }
)
export class BookService {

  private allBooks: any[] = [
    {
      "id": 1,
      "title": "HTML Web API",
      "totalPages": 546,
      "author": "Ebobisse parfait",
      "price": {
        "currency": "USD",
        "value": 400
      },
    },
    {
      "id": 2,
      "title": "CSS Web API",
      "totalPages": 7826,
      "author": "Grace Epoune",
      "price": {
        "currency": "USD",
        "value": 400
      },

    }
  ];


  constructor() { }

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): any[] {
    return this.allBooks;
  }
  public recentBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "HTML Web API",
        "totalPages": 546,
        "author": "Ebobisse parfait",
        "price": {
          "currency": "USD",
          "value": 400
        },
      },
      {
        "id": 2,
        "title": "CSS Web API",
        "totalPages": 7826,
        "author": "Grace Epoune",
        "price": {
          "currency": "USD",
          "value": 400
        },
      },

    ]
  }
}
