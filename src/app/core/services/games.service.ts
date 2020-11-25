import { IGame } from './../../models/game.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// @TODO: CONNECT THIS SERVICE WITH API...

@Injectable()
export class GamesService {
  private games$: BehaviorSubject<IGame[]> = new BehaviorSubject([]);

  private data: IGame[] = [
    {
      id: 1,
      active: true,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 5000,
      points: 2500,
      milestones: 3,
      tag: 'The Big Thing'
    },
    {
      id: 2,
      active: false,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 5500,
      points: 3600,
      milestones: 2,
      tag: 'The Big Thing'
    },
    {
      id: 3,
      active: true,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 8000,
      points: 2400,
      milestones: 1,
      tag: 'The Big Thing'
    },
    {
      id: 4,
      active: true,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 5000,
      points: 2500,
      milestones: 3,
      tag: 'The Big Thing'
    },
    {
      id: 5,
      active: false,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 5000,
      points: 2500,
      milestones: 3,
      tag: 'The Big Thing'
    },
    {
      id: 6,
      active: false,
      avatar: '/assets/images/mushroom.svg',
      title: 'Click & Collect',
      date: new Date(),
      text: 'It is a long established fact that a reader will be distracted by the readable eye.',
      frubies: 5000,
      points: 2500,
      milestones: 3,
      tag: 'The Big Thing'
    }
  ];

  getGames(): Observable<IGame[]> {
    return this.games$.asObservable();
  }

  setGames(data: IGame[]): void {
    this.games$.next(data);
  }

  public loadGames(): void {
    setTimeout(() => {
      this.setGames(this.data);
    }, 500);
  }

  constructor() { }
}
