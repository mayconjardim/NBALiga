import { PlayerAwards } from 'src/app/features/league/awards/models/playerAwards';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'player-awards',
  templateUrl: './player-awards.component.html',
  styleUrls: ['./player-awards.component.scss'],
})
export class PlayerAwardsComponent implements OnInit {
  awardFiltered!: any[];

  constructor(
    public dialogRef: MatDialogRef<PlayerAwardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlayerAwards[]
  ) {}

  ngOnInit(): void {
    this.getAwards();
  }

  getAwards() {
    const awardCounts = new Map<string, number>();
    for (const award of this.data) {
      if (awardCounts.has(award.award)) {
        awardCounts.set(award.award, awardCounts.get(award.award)! + 1);
      } else {
        awardCounts.set(award.award, 1);
      }
    }

    this.awardFiltered = this.data.filter(
      (award, index, self) =>
        self.findIndex((t) => t.award === award.award) === index
    );

    for (const filteredAward of this.awardFiltered) {
      filteredAward.count = awardCounts.get(filteredAward.award);
    }
  }

  awardName(count: number, award: string) {
    if (award == 'National Basketball Association Champion') {
      return count > 1 ? count + ' ' + ' NBA Champion' : ' NBA Champion';
    }

    return count > 1 ? count + ' ' + award : award;
  }
}
