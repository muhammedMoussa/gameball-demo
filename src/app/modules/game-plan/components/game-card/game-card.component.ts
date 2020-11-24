import { Component, Input } from '@angular/core';

@Component({
  selector: 'gmbl-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})

export class GameCardComponent {
  @Input() active: boolean;
  @Input() avatar: string;
  @Input() title: string;
  @Input() date: Date;
  @Input() text: string;
  @Input() frubies: number;
  @Input() points: number;
  @Input() milestones: number;
  @Input() tag: string;
}
