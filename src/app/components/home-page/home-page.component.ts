import { Component } from '@angular/core';
import { IntroSectionComponent } from '../intro-section/intro-section.component';
import { ProjectsSectionComponent } from "../../projects-section/projects-section.component";
import { TestimonialsSectionComponent } from '../../testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroSectionComponent, ProjectsSectionComponent, TestimonialsSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
