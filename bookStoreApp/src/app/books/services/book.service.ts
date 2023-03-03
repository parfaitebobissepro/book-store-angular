import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


  constructor(private _httpClient: HttpClient) {

   }

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): Observable<BookModel[]> {
    // return this.allBooks;
    return this._httpClient.get<BookModel[]>('https://localhost:7287/api/books');
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
