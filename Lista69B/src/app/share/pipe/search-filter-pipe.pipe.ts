import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(value:any, args: any): any {
    if(!value) return null;
    if(!args) return value;
    if(args.len<3) return value;

    args=args.toLowerCase();
    return value.filter(function(item:any){
      
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    });
    
  }

}
