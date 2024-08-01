import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent {
  public numberOfPages: number = 0;
  public designType: number = 0;
  public type: number = 0;

  public selectionHandle(value: number, type: string) {
    if (type === 'number-of-pages') {
      this.numberOfPages = value;
    } else if (type === 'design') {
      this.designType = value;
    } else if (type === 'type') {
      this.type = value;
    }
  }
}
