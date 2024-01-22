import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'Dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'List69B',loadChildren:()=>import('./list69B/list69b.module').then(m=>m.List69bModule)},
  {path:'WatchList',loadChildren:()=>import('./watchList/watch-list.module').then(m=>m.WatchListModule)},
  {path:'test',component:TestComponent},
  //{path:'',redirectTo:'Dashboard'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
