import { HEROES } from './../../_models/mock-heroes';
import { UpperCasePipe } from '@angular/common';
import { Hero } from './../../_models/hero';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroList: Hero[] = HEROES;

  constructor() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
