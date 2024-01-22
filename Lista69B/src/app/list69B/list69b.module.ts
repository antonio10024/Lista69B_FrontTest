import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { List69bRoutingModule } from './list69b-routing.module';
import { Lista69bIndexComponent } from './lista69b-index/lista69b-index.component';
import { TableModule } from '../share/table/table.module';


@NgModule({
  declarations: [
    Lista69bIndexComponent
  ],
  imports: [
    CommonModule,
    List69bRoutingModule,
    TableModule
  ]
})
export class List69bModule { }
