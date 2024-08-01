import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css',
})
export class TestimonialsSectionComponent {
  hoveredTestimonial: string = 'testimonial1';

  public handleTestimonialHover = (event: Event, type: string): void => {
    const element = event.target as HTMLElement;

    const classList = Array.from(element.classList);

    // Regular expression to match classes with the format testimonial#
    const testimonialClass = classList.find((className) =>
      /testimonial\d+/.test(className)
    );
    if (type === 'over') {
      if (testimonialClass) {
        this.hoveredTestimonial = testimonialClass;
      }
    } else if (type === 'out') {
      this.hoveredTestimonial = '';
    }
  };
}
