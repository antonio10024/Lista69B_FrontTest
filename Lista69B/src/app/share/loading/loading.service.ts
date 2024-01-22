import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);

  loadingUrl:Map<string,boolean>=new Map<string, boolean>();

  constructor() { }

  setloading(loading: boolean, url: string){
    if (loading === true) {
      this.loadingUrl.set(url, loading);
      this.isLoading.next(true);
    }else if (loading === false && this.loadingUrl.has(url)) {
      this.loadingUrl.delete(url);
    }

    if(this.loadingUrl.size==0)
    {
      this.isLoading.next(false);
    }

  }
}
