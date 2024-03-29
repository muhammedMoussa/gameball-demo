import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gmbl-game-plan-shell',
  templateUrl: './game-plan-shell.component.html',
  styleUrls: ['./game-plan-shell.component.css']
})
export class GamePlanShellComponent implements OnInit {
  tabs = [
    {
      id: 1,
      label: 'Levels',
    },
    {
      id: 2,
      label: 'Challenges',
    },
    {
      id: 3,
      label: 'Quests',
    },
  ];

  currentTab = 2;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentTab(id: number): void {
    this.currentTab = id;
  }
}
