import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { WatchListService, trackingItem } from '../watch-list.service';
import { header } from 'src/app/share/table/table/table.component';
import { ColdefDirective } from 'src/app/share/table/coldef.directive';

@Component({
  selector: 'app-watch-list-index',
  templateUrl: './watch-list-index.component.html',
  styleUrls: ['./watch-list-index.component.scss']
})
export class WatchListIndexComponent implements AfterViewInit {
  @ContentChildren(ColdefDirective) templates!: QueryList<ColdefDirective>;
  list!:trackingItem[];
  listHeader:header[]=[
    {key:'rfc',caption:'RFC',width:100 ,sclass:'px-2 w-[12rem]' },
    {key:'razonSocial',caption:'Nombre del contribuyente',width:100, sclass:'px-2 flex-1  min-w-[20rem]'},
    {key:'activo',caption:'Estatus',width:100,sclass:'w-[5rem]'},
    {key:'edit',caption:'',width:100,sclass:'w-[4rem]'}
  ];
  constructor(private api:WatchListService ){
    api.getWatchList().subscribe(x=>{
      this.list=x;
    });
  }
  ngAfterViewInit(): void {
    console.log('Esto es del padre');
    console.log(this.templates);
  }
}
