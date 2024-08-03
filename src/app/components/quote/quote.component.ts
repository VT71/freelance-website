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

    if (this.numberOfPages !== '' && this.designType !== '' && this.type !== '') {
      this.generateCostTime();
    }
  }

  public generateCostTime(): void {
    let cost = 0;
    let time = 0;

    switch (this.numberOfPages) {
      case '1':
        cost += 150;
        time += 2;
        break;
      case '2-3':
        cost += 300;
        time += 5;
        break;
      case '4+':
        cost += 500;
        time += 8;
        break;
    }

    switch (this.designType) {
      case 'Basic':
        cost *= 1.5;
        time *= 1.5;
        break;
      case 'Intermediate':
        cost *= 1.8;
        time *= 1.8;
        break;
      case 'Advanced':
        cost *= 2.2;
        time *= 2.2;
        break;
    }

    switch (this.type) {
      case 'E-Shop':
      case 'Bookings':
        cost *= 1.8;
        time *= 1.8;
        break;
    }

    this.totalCost = cost;
    this.duration = time;
  }
}
