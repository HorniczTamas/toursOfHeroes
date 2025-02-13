import { Routes } from '@angular/router';
import { HeroesComponent } from './_components/heroes/heroes.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HeroDetailComponent } from './_components/hero-detail/hero-detail.component';

export const routes: Routes = [
  {path: "heroes", component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: "detail/:id", component: HeroDetailComponent},
  {path: '', redirectTo: "/dashboard", pathMatch: "full"},
];
