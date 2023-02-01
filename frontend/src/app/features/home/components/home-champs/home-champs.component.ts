import { Champs } from './../../models/champs';
import { ChampsService } from './../../services/champs.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-champs',
  templateUrl: './home-champs.component.html',
  styleUrls: ['./home-champs.component.scss'],
})
export class HomeChampsComponent {
  @Input() champs!: Champs[];

  logo = 'assets/images/logos/';
}
