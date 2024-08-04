import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent {
  public numberOfPages: string = '';
  public designType: string = '';
  public type: string = '';

  public duration: number = 0;
  public totalCost: number = 0;

  public selectionHandle(value: string, type: string) {
    if (type === 'number-of-pages') {
      this.numberOfPages = value;
    } else if (type === 'design') {
      this.designType = value;
    } else if (type === 'type') {
      this.type = value;
    }

    if (this.type === 'E-Shop' || this.type === 'Bookings') {
      if (this.numberOfPages === '1') {
        this.numberOfPages = '5';
      }
    }

    if (
      this.numberOfPages !== '' &&
      this.designType !== '' &&
      this.type !== ''
    ) {
      this.generateCostTime();
    }
  }

  public generateCostTime(): void {
    let cost = 0;
    let time = 0;

    switch (this.numberOfPages) {
      case '1':
        cost += 200;
        time += 2;
        break;
      case '5':
        cost += 450;
        time += 5;
        break;
      case '10':
        cost += 800;
        time += 8;
        break;
    }

    switch (this.designType) {
      case 'Advanced':
        cost *= 2;
        time *= 2;
        break;
    }

    switch (this.type) {
      case 'E-Shop':
      case 'Bookings':
        cost *= 1.2;
        time *= 1.2;
        break;
    }

    this.totalCost = Math.round(cost);
    this.duration = Math.round(time);
  }
}
