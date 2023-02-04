import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  player!: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.readOne(id).subscribe((player) => {
      this.player = player;
    });
  }
}
