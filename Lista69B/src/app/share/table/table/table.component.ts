import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { ColdefDirective } from '../coldef.directive';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  
})
export class TableComponent implements OnInit,AfterViewInit  {
  @Input() header!:header[];
  @ViewChild('searcValue') textInput!: ElementRef ;
  @Input() value!:any[];

  @ContentChildren(ColdefDirective) templates!: QueryList<ColdefDirective>;
 

  searchText:string='';

  constructor(){
   
  }
  ngAfterViewInit(): void {

    
    console.log(this.templates.get(0));
    const inputElement: HTMLInputElement = this.textInput.nativeElement;

    // Crea un observable a partir del evento 'input'
    const inputObservable = fromEvent(inputElement, 'input');

    // Aplica debounceTime de 3000 ms (3 segundos) y distinctUntilChanged
    inputObservable.pipe(
      debounceTime(3000),
      distinctUntilChanged()
    ).subscribe(() => {  
      console.log(inputElement.value);
      
      this.searchText=inputElement.value;
    });
  }
  ngOnInit(): void {
    
  }
  getStyleCol( colName:string){
    return this.templates.filter(x=>x.name===colName).length;
  }

}

export interface header{
  key:string,
  caption:string,
  width?:number,
  sclass?:string
}