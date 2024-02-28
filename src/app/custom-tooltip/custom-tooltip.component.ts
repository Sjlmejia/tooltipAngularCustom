import { Component } from '@angular/core';

@Component({
  selector: 'cloudauth-ui-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {
  customTooltip;
  top : number = 0;
  left: number = 0;
  width: number = 0;
}
