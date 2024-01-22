import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchListRoutingModule } from './watch-list-routing.module';
import { WatchListIndexComponent } from './watch-list-index/watch-list-index.component';
import { TableModule } from '../share/table/table.module';
import { WatchAddComponent } from './watch-add/watch-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WatchListIndexComponent,
    WatchAddComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule,
    WatchListRoutingModule,
    ReactiveFormsModule
  ]
})
export class WatchListModule { }
