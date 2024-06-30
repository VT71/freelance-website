import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css',
})
export class IntroSectionComponent {
  public activeNavLink: string = 'intro';

  public onClickNav(label: string): void {
    this.activeNavLink = label;
  }
}
