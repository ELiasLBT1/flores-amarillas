import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

interface MemoryPhoto {
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-yellow-flowers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yellow-flowers.component.html',
  styleUrl: './yellow-flowers.component.css'
})
export class YellowFlowersComponent {
  readonly message = 'Para mi princesa';
  readonly subMessage = 'Feliz día de las flores amarillas';
  readonly specialNote = 'Amor, sé que estamos un poquito lejos, pero quiero que sepas que no importa la distancia: siempre voy a estar contigo en lo que necesites. Eres mi vidita linda, mi chiquita preciosaaa. Te quiero demasiado y te extraño un monton espero que nos veamos pronto mi amorcito preciosa <3';

  readonly photos: MemoryPhoto[] = [
    { src: 'photos/juntos-01.jpeg', alt: 'Nosotros compartiendo un momento juntos', caption: 'Mi lugar favorito' },
    { src: 'photos/juntos-02.jpeg', alt: 'Nosotros sonriendo juntos', caption: 'Tu sonrisa y la mía' },
    { src: 'photos/juntos-03.jpeg', alt: 'Un recuerdo espontáneo de nuestro día', caption: 'Los días cotidianos' },
    { src: 'photos/juntos-04.jpeg', alt: 'Un beso lleno de cariño', caption: 'Besitos que guardo' },
    { src: 'photos/juntos-05.jpeg', alt: 'Ella sonriendo durante una salida', caption: 'Esa sonrisa bonita' },
    { src: 'photos/juntos-06.jpeg', alt: 'Nosotros abrazados junto a una ventana', caption: 'Siempre cerquita' },
    { src: 'photos/juntos-07.jpeg', alt: 'Retrato de ella sonriendo', caption: 'Mi persona favorita' },
    { src: 'photos/juntos-08.jpeg', alt: 'Ella bajo un árbol de flores', caption: 'Donde todo florece' },
    { src: 'photos/juntos-09.jpeg', alt: 'Una noche especial bajo un árbol rosado', caption: 'Noches para recordar' },
    { src: 'photos/juntos-10.jpeg', alt: 'Retrato de ella en casa', caption: 'Bonita, siempre' }
  ];

  readonly petals = Array.from({ length: 16 }, (_, index) => index);
  letterOpen = false;
  selectedPhotoIndex: number | null = null;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  scrollToMemories(): void {
    this.document.getElementById('recuerdos')?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleLetter(): void {
    if (this.letterOpen) {
      this.closeLetter();
      return;
    }

    this.openLetter();
  }

  openLetter(): void {
    this.letterOpen = true;

    // Wait for the expanding panel to enter the layout before focusing it.
    setTimeout(() => {
      this.document.getElementById('carta')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 120);
  }

  closeLetter(): void {
    this.letterOpen = false;
    setTimeout(() => {
      this.document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  }

  openPhoto(index: number): void {
    this.selectedPhotoIndex = index;
    this.document.body.classList.add('modal-open');
  }

  closePhoto(): void {
    this.selectedPhotoIndex = null;
    this.document.body.classList.remove('modal-open');
  }

  changePhoto(direction: number): void {
    if (this.selectedPhotoIndex === null) return;
    this.selectedPhotoIndex = (this.selectedPhotoIndex + direction + this.photos.length) % this.photos.length;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (this.selectedPhotoIndex === null) return;
    if (event.key === 'Escape') this.closePhoto();
    if (event.key === 'ArrowLeft') this.changePhoto(-1);
    if (event.key === 'ArrowRight') this.changePhoto(1);
  }
}
