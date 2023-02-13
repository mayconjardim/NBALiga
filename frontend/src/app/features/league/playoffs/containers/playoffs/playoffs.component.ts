import { PlayoffsService } from '../../services/playoffs.service';
import { Playoffs } from './../../models/playoffs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playoffs',
  templateUrl: './playoffs.component.html',
  styleUrls: ['./playoffs.component.scss'],
})
export class PlayoffsComponent implements OnInit {
  playoffs!: Playoffs[];

  constructor(private playoffService: PlayoffsService) {}

  ngOnInit(): void {
    this.playoffService.readPlayoffs().subscribe((res) => {
      this.playoffs = res;
    });
  }
}
