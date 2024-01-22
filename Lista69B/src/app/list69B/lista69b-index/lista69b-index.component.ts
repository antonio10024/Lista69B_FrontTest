import { Component } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { TableModule } from 'src/app/share/table/table.module';
import { Lista69bService } from '../lista69b.service';
import { header } from 'src/app/share/table/table/table.component';

@Component({
  selector: 'app-lista69b-index',
  templateUrl: './lista69b-index.component.html',
  styleUrls: ['./lista69b-index.component.scss'],
  providers:[TableModule]
})
export class Lista69bIndexComponent {
  list!:any[];
  listHeader:header[]=[
    {key:'no',caption:'#',width:100 ,sclass:'py-2  w-24' },
    {key:'rfc',caption:'RFC',width:100 ,sclass:'py-2 w-[12rem]' },
    {key:'nombredelContribuyente',caption:'Nombre del contribuyente',width:100, sclass:'py-2 flex-1  min-w-[20rem]'},
    {key:'situacionContribuyente',caption:'Situacion',width:100,sclass:'w-[12rem]'},
  ];
  fecha:string='';

  constructor( 
    dashboardService:Lista69bService
  ){
    dashboardService.getList69B().subscribe(x=>{
            this.list=x.items.slice(0,50);
            this.fecha=x.createDate
    });
  }
}
