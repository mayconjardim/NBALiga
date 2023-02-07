import { Awards } from './../../../league/awards/models/awards';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-awards',
  templateUrl: './player-awards.component.html',
  styleUrls: ['./player-awards.component.scss'],
})
export class PlayerAwardsComponent implements OnInit {
  @Input() awards!: Awards[];

  ngOnInit(): void {}
}
