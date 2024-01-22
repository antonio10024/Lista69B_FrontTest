import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {cardResumen} from '../dashboard/dashboard/cardResumen'
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor( private api:HttpClient ) { }

  getList69B():Observable<cardResumen>{
    const endPoint='Lista69B/Active';
    return this.api.get(environment.apiLista69B+endPoint).pipe(map((response:any ) => {
      return {
        Title:'Lista 69B',
        total:response.registerCount,
        date:new Date(response.createDate).toLocaleString()
      }
    }));
  }

  getListFound():Observable<cardResumen>{
    const endPoint='ListaDeSeguimiento/ListFound';
    return this.api.get(environment.apiLista69B+endPoint).pipe(
      map((response:any)=>{
        return {
          Title:'Personas Encontradas',
        total:response.count,
        
        }
      }
      )
    );
  }
  getListWatch():Observable<cardResumen>{
    const endPoint='ListaDeSeguimiento/Active';
    return this.api.get(environment.apiLista69B+endPoint).pipe(
      map((response:any)=>{
        return {
          Title:'Personas en Seguimiento',
        total:response.registerCount,
        
        }
      }
      )
    );
  }
  

}




//interface para manejo de response
export interface responseLista69BDTO {
  id:            string;
  registerCount: number;
  createDate:    string;
}


export interface ListFoundDTO {
  count: number;
  list:  listFound[];
}

export interface listFound {
  foundRFC:         string;
  registroLista69B: RegistroLista69B[];
}

export interface RegistroLista69B {
  no:                                                           number;
  rfc:                                                          string;
  nombredelContribuyente:                                       string;
  situacionContribuyente:                                       string;
  numeroYFechaDeOficioGlobalDePresuncionSAT:                    string;
  publicacionPaginaSATPresuntos:                                string;
  numeroYFechaDeOficioGlobalDePresuncionDOF:                    string;
  publicacionDOFPresuntos:                                      string;
  numeroYFechaDeOficioGlobalDeContribuyentesQueDesvirtuaronSAT: string;
  publicacionPaginaSATDesvirtuados:                             string;
  numeroyFechaDeOficioGlobalDeContribuyentesQueDesvirtuaronDOF: string;
  publicacionDOFDesvirtuados:                                   string;
  numeroYFechaDeOficioGlobalDeDefinitivosSAT:                   string;
  publicacionPaginaSATDefinitivos:                              string;
  numeroYFechaDeOficioGlobalDeDefinitivosDOF:                   string;
  publicacionDOFDefinitivos:                                    string;
  numeroYFechaDeOficioGlobalDeSentenciaFavorableSAT:            string;
  publicacionPaginaSATSentenciaFavorable:                       string;
  numeroYFechaDeOficioGlobalDeSentenciaFavorableDOF:            string;
  publicacionDOFSentenciaFavorable:                             string;
}
