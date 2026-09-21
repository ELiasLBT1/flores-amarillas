import { Component } from '@angular/core';
import { YellowFlowersComponent } from './yellow-flowers/yellow-flowers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [YellowFlowersComponent],
  template: `
    <app-yellow-flowers></app-yellow-flowers>
  `
})
export class AppComponent {
  title = 'flores-amarillas';
}
