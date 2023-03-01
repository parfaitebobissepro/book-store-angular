import { Component,OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(public _counterService: CounterService) {

  }
  ngOnInit(): void {
    
  }

  public childData($event:any):void{
    console.log($event);
    
  }
}
