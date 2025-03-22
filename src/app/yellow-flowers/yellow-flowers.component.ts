import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yellow-flowers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yellow-flowers.component.html',
  styleUrl: './yellow-flowers.component.css'
})
export class YellowFlowersComponent implements OnInit {
  message = 'Para el amor de mi vida ❤️';
  subMessage = 'Feliz 21 de Marzo';
  specialNote = 'Amor sé que estamos lejos pero quiero que sepas que no importa la distancia siempre voy a estar contigo en lo que necesites, eres mi pequeñita, mi puchunguita, mi vida, sí sabía lo de las flores amarillas pero me hice el loco porque quería sorprenderte de hecho lo hice en el trabajo jeje, y les conte todo de ti que eres mejor que me ha pasado ufff cada día me siento más afortunado de tenerte en mi vida quiero que sepas que cuentas conmigo para todo lo que venga eres mi mayor alegría y te amo más de lo que puedo expresar 🌻💛';
  flowers: number[] = [];
  fallingPetals: number[] = [];
  isHeartBeating = false;

  ngOnInit() {
    // Initialize arrays
    this.flowers = Array.from({ length: 15 }, (_, i) => i);
    this.fallingPetals = Array.from({ length: 10 }, (_, i) => i);
    
    // Heart animation
    setInterval(() => {
      this.isHeartBeating = !this.isHeartBeating;
    }, 1000);
  }
}