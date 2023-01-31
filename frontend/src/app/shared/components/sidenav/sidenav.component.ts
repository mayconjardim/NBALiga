import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer: any;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  public isMenuOpen = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMenuOpen = true;
  }

  get isHandset(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

  ngDoCheck() {
    if (this.isHandset) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
}
