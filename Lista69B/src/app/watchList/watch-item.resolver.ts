import { ResolveFn } from '@angular/router';
import { WatchListService, trackingItem } from './watch-list.service';
import {  inject } from '@angular/core';

export const watchItemResolver: ResolveFn<trackingItem> = (route, state) => {
  


  return inject(WatchListService).getById(route.paramMap.get('id')!) ;
};
