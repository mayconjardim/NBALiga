import { PlayerAwardsComponent } from './../player-awards/player-awards.component';
import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerAwards } from 'src/app/features/league/awards/models/playerAwards';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'player-header',
  templateUrl: './player-header.component.html',
  styleUrls: ['./player-header.component.scss'],
})
export class PlayerHeaderComponent {
  @Input() player!: Player;
  @Input() awards!: PlayerAwards[];
  playerImg = 'assets/images/players/';
  teamLogo = 'assets/images/logos/';

  constructor(public dialog: MatDialog) {}

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'Point Guard';
      case 4:
        return 'Shooting Guard';
      case 3:
        return 'Small Forward';
      case 2:
        return 'Power Forward';
      default:
        return 'Center';
    }
  }

  ratingColors(rating: string) {
    switch (rating) {
      case 'A+':
        return 'assets/images/utils/aa.png';
      case 'A':
        return 'assets/images/utils/a.png';
      case 'B':
        return 'assets/images/utils/b.png';
      case 'C':
        return 'assets/images/utils/c.png';
      case 'D':
        return 'assets/images/utils/d.png';
      default:
        return 'assets/images/utils/f.png';
    }
  }

  getExp(xp: number) {
    if (xp == 0) {
      return 'Rookie';
    } else if (xp == 1) {
      return '2nd Season';
    } else if (xp == 2) {
      return '3rd Season';
    }
    return xp + 1 + 'th Season';
  }

  getHeight(height: any) {
    const ft = Math.floor(height / 12);
    const inc = height % 12;
    return ft + "'" + inc;
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerAwardsComponent, {
      data: this.awards,
    });
  }
}
