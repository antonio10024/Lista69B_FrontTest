import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListIndexComponent } from './watch-list-index/watch-list-index.component';
import { WatchAddComponent } from './watch-add/watch-add.component';
import { watchItemResolver } from './watch-item.resolver';

const routes: Routes = [
  {path:'',component:WatchListIndexComponent},
  {path:'add',component:WatchAddComponent},
  {path:'update/:id',component:WatchAddComponent ,resolve:{item:watchItemResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchListRoutingModule { }
