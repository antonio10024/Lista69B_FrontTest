import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { cardResumen } from './dashboard/cardResumen';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit ,OnDestroy {
  cardsResumen:cardResumen[]=[];
  list69BData!:cardResumen ;
  listWatchData!:cardResumen;
  listFoundData!:cardResumen;
  listSubcription:Subscription[]=[];

  constructor(
    private listaService:DashboardService 
   ){
   
  }
  ngOnDestroy(): void {
    this.listSubcription.forEach(element => {
      element.unsubscribe();
    });
  }
  ngOnInit(): void {
    
    this.listSubcription.push(this.listaService.getList69B().subscribe(data=>{this.list69BData=data}));
    this.listSubcription.push(this.listaService.getListWatch().subscribe(data=>{this.listWatchData=data}));
    this.listSubcription.push(this.listaService.getListFound().subscribe(data=>{this.listFoundData=data}));
  }
  

}
