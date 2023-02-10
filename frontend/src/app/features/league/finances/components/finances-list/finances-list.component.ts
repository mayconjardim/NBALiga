import { Component, Input } from '@angular/core';
import { Team } from 'src/app/features/team/models/team';

@Component({
  selector: 'finances-list',
  templateUrl: './finances-list.component.html',
  styleUrls: ['./finances-list.component.scss'],
})
export class FinancesListComponent {
  @Input() team!: Team[];
}
