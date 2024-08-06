import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  Breakpoints,
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css',
})
export class IntroSectionComponent implements OnInit {
  public activeNavLink: string = 'intro';
  public breakPointPromise$!: Observable<boolean>;

  public mobileNavOpen: boolean = false;
  public hideMobileMenu: boolean = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPointPromise$ = this.responsive
      .observe([Breakpoints.XSmall])
      .pipe(
        map((result) => {
          //   const breakpoints = result.breakpoints;
          //   console.log(JSON.stringify(breakpoints));
          //   console.log('Handset props: ' + JSON.stringify(Breakpoints.Handset));
          //   console.log('Tablet props: ' + JSON.stringify(Breakpoints.Tablet));
          //   if (breakpoints[Breakpoints.Handset]) {
          //     console.log('Handset');
          //   }
          //   if (breakpoints[Breakpoints.Tablet]) {
          //     console.log('Tablet');
          //   }
          if (result.matches) {
            console.log('MATCHES');
            return true;
          } else {
            return false;
          }
        })
      );
  }

  public onClickNav(label: string): void {
    this.activeNavLink = label;
  }

  public handleMobileNavDisplay(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
