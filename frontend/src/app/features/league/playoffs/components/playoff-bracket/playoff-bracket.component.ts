import { Component, Input } from '@angular/core';
import { Playoffs } from '../../models/playoffs';

@Component({
  selector: 'playoff-bracket',
  templateUrl: './playoff-bracket.component.html',
  styleUrls: ['./playoff-bracket.component.scss'],
})
export class PlayoffBracketComponent {
  @Input() playoffs!: Playoffs;
}
