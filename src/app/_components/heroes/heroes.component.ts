import { HEROES } from './../../_models/mock-heroes';
import { UpperCasePipe } from '@angular/common';
import { Hero } from './../../_models/hero';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../_services/hero.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from '../../_services/message.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent, HttpClientModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit{
  heroService = inject(HeroService)
  // messageService = inject(MessageService)
  selectedHero?: Hero;
  heroList: Hero[] = [];

  // Ez egy interface
  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe({
      next: res => this.heroList = res,
      error: res => console.log(res.error),
    })
  }
}
