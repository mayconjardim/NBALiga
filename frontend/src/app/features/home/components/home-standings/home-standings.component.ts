import { Component, Input } from '@angular/core';

import { Standings } from './../../models/standings';

@Component({
  selector: 'home-standings',
  templateUrl: './home-standings.component.html',
  styleUrls: ['./home-standings.component.scss'],
})
export class HomeStandingsComponent {
  @Input() standings!: Standings[];
  imgLogo = 'assets/images/logos/';

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
