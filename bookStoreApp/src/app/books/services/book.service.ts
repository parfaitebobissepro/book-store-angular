import { Injectable } from '@angular/core';
import { BookModel } from '../../shared/models/books.model';

@Injectable(
  { "providedIn": "root" }
)
export class BookService {

  constructor() { }

  public getBooks(): any[] {
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
      {
        "id": 3,
        "title": "ReactJS Web API",
        "totalPages": 546,
        "author": "MBIAH EPOUNE Dorette",
        "price": {
          "currency": "USD",
          "value": 400
        },
      },
      {
        "id": 4,
        "title": "Angular Web API",
        "totalPages": 546,
        "author": "Henri EPOUNE",
        "price": {
          "currency": "USD",
          "value": 400
        },
      },
      {
        "id": 5,
        "title": "Design pattern SOLID",
        "totalPages": 546,
        "author": "Nagesh Khatri",
        "price": {
          "currency": "USD",
          "value": 400
        },
      }
    ]
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
