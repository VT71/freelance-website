import { Component } from '@angular/core';
import { IntroSectionComponent } from '../intro-section/intro-section.component';
import { ProjectsSectionComponent } from "../projects-section/projects-section.component";
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { QuoteComponent } from "../quote/quote.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroSectionComponent, ProjectsSectionComponent, TestimonialsSectionComponent, QuoteComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
