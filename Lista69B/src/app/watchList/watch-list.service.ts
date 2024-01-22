import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private api:HttpClient) { }

  getWatchList():Observable<trackingItem[]>{
    const endPoint='ListaDeSeguimiento';
    return this.api.get<trackingItem[]>(environment.apiLista69B+endPoint); 
  }

  add(entity:any){
    const endPoint='ListaDeSeguimiento';
   
    return this.api.post(environment.apiLista69B+endPoint,JSON.stringify(entity) );
  }
}
// Generated by https://quicktype.io

export interface trackingItem {
  id:          string;
  rfc:         string;
  razonSocial: string;
  activo:      boolean;
}