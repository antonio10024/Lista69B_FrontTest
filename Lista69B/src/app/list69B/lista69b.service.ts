import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Lista69bService {

  constructor(private api:HttpClient ) { }

  getList69B(){
    const endPoint='Lista69B/Active';
    return this.api.get<Lista69BDTO>(environment.apiLista69B+endPoint);
  }
}
// Generated by https://quicktype.io

export interface Lista69BDTO {
  id:            string;
  registerCount: number;
  createDate:    string;
  items:         Item[];
}

export interface Item {
  id:                                                           number;
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

