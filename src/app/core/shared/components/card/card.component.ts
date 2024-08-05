import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  isHover = false;
  pokemon = input.required<any>();

  pokeEnter() {
    this.isHover = true;
  }
  pokeLeave() {
    this.isHover = false;
  }
}
