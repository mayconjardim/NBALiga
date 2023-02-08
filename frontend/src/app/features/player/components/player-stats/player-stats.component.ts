import { PlayoffStats } from './../../../league/stats/models/playoffStats';
import { Component, Input } from '@angular/core';
import { Stats } from 'src/app/features/league/stats/models/stats';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent {
  @Input() playerStats!: Stats[];
  @Input() playerOffStats!: PlayoffStats[];
  teamLogo = 'assets/images/logos/';

  displayedColumns: string[] = [
    'season',
    'team',
    'games',
    'mpg',
    'ppg',
    'rpg',
    'apg',
    'spg',
    'bpg',
    'fg',
    'fgPct',
    '3p',
    'threePct',
    'ft',
    'ftPct',
    'orebsPg',
    'drebsPg',
    'topg',
    'pfouPg',
  ];

  getSeason(season: any) {
    let seasons = season + 1;
    seasons = seasons.toString();
    seasons = seasons.substring(2);
    return season + '-' + seasons;
  }

  removeLeading(numero: any) {
    if (numero > 0) {
      let num = numero;
      let text = num.toString();
      text = text.replace(/^[0]+/, '');
      text = text.slice(0, +4);
      return text;
    } else {
      return '-';
    }
  }
}
