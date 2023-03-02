import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorsModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,OnDestroy {

  @ContentChild(AuthorsAddressComponent) authAddress: AuthorsAddressComponent;

  @Input() data:number;
  @Input() data2:boolean;
  @Input() author:AuthorsModel;

  public childCounter:number = 0;
  

  constructor() { 
    console.log("Hello from Child constructor");
  }
  ngAfterContentChecked(): void {
    console.log('after content checked ' + this.authAddress?.address);
  }
  ngAfterContentInit(): void {
    console.log('after content init ' + this.authAddress?.address);
  }
  ngDoCheck(): void {
    // console.log(this.author);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log("Hello from Child ngOn init");
  }

  incCounter():void{
    this.childCounter++;
  }

  ngOnDestroy(): void {
    console.log('Authors component destroy');
    
  }
  
}
