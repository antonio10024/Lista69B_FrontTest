import { Component } from '@angular/core';
import { LoadingService } from './share/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading:boolean=false;
  title = 'Lista69B';

  constructor(
    private loadingService:LoadingService
  ){
    loadingService.isLoading.subscribe(x=>{
     
      this.isLoading=x;
    });
  }
}
