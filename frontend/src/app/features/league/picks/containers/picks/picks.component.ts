import { PicksService } from '../../services/picks.service';
import { DraftPicks } from './../../models/picks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'picks',
  templateUrl: './picks.component.html',
  styleUrls: ['./picks.component.scss'],
})
export class PicksComponent implements OnInit {
  picks!: DraftPicks[];

  constructor(private picksService: PicksService) {}

  ngOnInit(): void {
    this.picksService.read().subscribe((res) => {
      this.picks = res;
    });
  }
}
