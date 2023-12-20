import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() Title!:string;
  @Input() CentralText!:string;
  @Input() Footer!:string;

}
