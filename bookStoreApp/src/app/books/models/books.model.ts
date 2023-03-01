import { PriceModel } from "./price.model";

export class BookModel{
    public id:number;
    public title:string;
    public totalPages: number;
    public _author:string;
    public price:PriceModel;

    public set author(value:string){
        this._author = 'MMM' + value;
    }
    public get author(){
       return  this._author;
    }
}