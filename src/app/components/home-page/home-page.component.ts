import { Component } from '@angular/core';
import { PageSectionComponent } from '../page-section/page-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
