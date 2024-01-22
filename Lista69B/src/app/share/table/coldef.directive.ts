import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColdef]'
})
export class ColdefDirective {
@Input('col-Name') name!:string;

  constructor(public template: TemplateRef<any>) { 

  }

}
