import { Component, Input } from '@angular/core';

import { Champs } from './../../models/champs';

@Component({
  selector: 'home-champs',
  templateUrl: './home-champs.component.html',
  styleUrls: ['./home-champs.component.scss'],
})
export class HomeChampsComponent {
  @Input() champs!: Champs[];

  logo = 'assets/images/logos/';

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
