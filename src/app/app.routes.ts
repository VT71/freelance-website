import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const appName = 'Victor Toma';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: `Home | ${appName}` },
];
