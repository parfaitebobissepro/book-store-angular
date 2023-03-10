import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  bookId: number = 12;
  authorId: number = 100;

  constructor(private route: ActivatedRoute) {
    this.route.firstChild?.params.subscribe(param => {
      console.log(param);
    })
  }

}
