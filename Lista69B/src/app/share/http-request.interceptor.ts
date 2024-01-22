import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, filter, map, tap, throwError } from 'rxjs';
import { LoadingService } from './loading/loading.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private loadinService:LoadingService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadinService.setloading(true,request.url);
   
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loadinService.setloading(false,request.url);
        return  throwError(error);
      })
    )
    .pipe(
      tap(
        even=>{
          console.log(even);
          if(even.type== HttpEventType.Response){
            this.loadinService.setloading(false,request.url);
            
          }


        }
      )
    );
      
    
    
  }
}
