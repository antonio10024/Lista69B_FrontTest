import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListIndexComponent } from './watch-list-index/watch-list-index.component';
import { WatchAddComponent } from './watch-add/watch-add.component';

const routes: Routes = [
  {path:'',component:WatchListIndexComponent},
  {path:'add',component:WatchAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchListRoutingModule { }
