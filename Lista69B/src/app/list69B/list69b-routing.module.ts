import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista69bIndexComponent } from './lista69b-index/lista69b-index.component';

const routes: Routes = [
  {path:'',component:Lista69bIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class List69bRoutingModule { }
