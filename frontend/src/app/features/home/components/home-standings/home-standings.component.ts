import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

import { Standings } from './../../models/standings';

@Component({
  selector: 'home-standings',
  templateUrl: './home-standings.component.html',
  styleUrls: ['./home-standings.component.scss'],
})
export class HomeStandingsComponent {
  @Input() east!: Standings[];
  @Input() west!: Standings[];

  logo = 'assets/images/logos/';

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['teamName', 'wl', 'pct', 'strk']
        : ['teamName', 'wl', 'pct', 'gb', 'pf', 'pa', 'diff', 'strk'];
    });
  }

  displayedColumns: string[] = [
    'teamName',
    'wl',
    'pct',
    'gb',
    'pf',
    'pa',
    'diff',
    'strk',
  ];

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
