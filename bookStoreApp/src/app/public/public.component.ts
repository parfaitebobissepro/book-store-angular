import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

  bookId: number = 12;
  authorId: number = 100;

  constructor(private route: ActivatedRoute) {
    this.route.firstChild?.params.subscribe(param => {
      console.log(param);
    })
  }

}
