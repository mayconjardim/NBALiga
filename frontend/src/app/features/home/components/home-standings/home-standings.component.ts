import { Standings } from './../../models/standings';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-standings',
  templateUrl: './home-standings.component.html',
  styleUrls: ['./home-standings.component.scss'],
})
export class HomeStandingsComponent {
  @Input() standings!: Standings[];
}
