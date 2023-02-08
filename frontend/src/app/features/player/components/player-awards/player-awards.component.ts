import { Component, Input, OnInit } from '@angular/core';

import { PlayerAwards } from '../../../league/awards/models/playerAwards';

@Component({
  selector: 'player-awards',
  templateUrl: './player-awards.component.html',
  styleUrls: ['./player-awards.component.scss'],
})
export class PlayerAwardsComponent implements OnInit {
  @Input() awards!: PlayerAwards[];
  awardFiltered!: any[];

  ngOnInit(): void {
    this.getAwards();
    console.log(this.awardFiltered);
  }

  getAwards() {
    const awardCounts = new Map<string, number>();
    for (const award of this.awards) {
      if (awardCounts.has(award.award)) {
        awardCounts.set(award.award, awardCounts.get(award.award)! + 1);
      } else {
        awardCounts.set(award.award, 1);
      }
    }

    this.awardFiltered = this.awards.filter(
      (award, index, self) =>
        self.findIndex((t) => t.award === award.award) === index
    );

    for (const filteredAward of this.awardFiltered) {
      filteredAward.count = awardCounts.get(filteredAward.award);
    }
  }

  awardName(award: string) {
    if (award == 'National Basketball Association Champion') {
      return 'NBA Champion';
    }
    return award;
  }
}
