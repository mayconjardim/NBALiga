import { PlayerService } from './../../services/player.service';
import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  players!: Player[];

  constructor(playerService: PlayerService) {}

  ngOnInit(): void {}
}
