import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{DashboardComponent} from'./dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppModule } from '../app.module';
import { CardComponent } from '../share/Cards/card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
