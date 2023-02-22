import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'rotation-list',
  templateUrl: './rotation-list.component.html',
  styleUrls: ['./rotation-list.component.scss'],
})
export class RotationListComponent {
  movies = [
    'SG - K. Bryant',
    'SF - L. James',
    'PF - L. Bird',
    'SF - K. Durant',
    'C - S. ONeal',
    'PG - S. Nash',
    'PG - A. Iverson',
    'SG - K. Thompson',
    'C - S. ONeal',
    'PG - S. Nash',
    'PG - A. Iverson',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  getRotationPosition(position: number) {
    if (position == 1) {
      return 'C';
    } else if (position == 2) {
      return 'PF';
    } else if (position == 3) {
      return 'SF';
    } else if (position == 4) {
      return 'SG';
    } else if (position == 5) {
      return 'PG';
    } else {
      return position + 'th';
    }
  }
}
