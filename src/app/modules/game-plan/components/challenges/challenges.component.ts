import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from 'src/app/core/services/games.service';
import { IGame } from 'src/app/models';

@Component({
  selector: 'gmbl-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit, AfterViewInit {
  games$: Observable<IGame[]>;
  title = '';

  ngOnInit(): void {
    this.games$ = this.gamesService.getGames();
  }

  ngAfterViewInit(): void {
    this.gamesService.loadGames();
  }

  createChallenge() {
    
  }

  constructor(
    private gamesService: GamesService
  ) { }

}
