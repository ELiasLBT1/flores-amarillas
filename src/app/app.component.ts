import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { YellowFlowersComponent } from './yellow-flowers/yellow-flowers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, YellowFlowersComponent],
  template: `
    <app-yellow-flowers></app-yellow-flowers>
  `
})
export class AppComponent {
  title = 'flores-amarillas';
}