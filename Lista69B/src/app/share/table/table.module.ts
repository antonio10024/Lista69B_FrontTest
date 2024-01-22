import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SearchFilterPipePipe } from '../pipe/search-filter-pipe.pipe';
import { ColdefDirective } from './coldef.directive';



@NgModule({
  declarations: [
    TableComponent,
    SearchFilterPipePipe,
    ColdefDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
    SearchFilterPipePipe,
    ColdefDirective
  ]
})
export class TableModule { }
