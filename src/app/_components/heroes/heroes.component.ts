import { Hero } from './../../_models/hero';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../_services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit{
  heroService = inject(HeroService)
  heroList: Hero[] = [];

  // Ez egy interface
  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe({
      next: res => this.heroList = res,
      error: res => console.log(res.error),
    })
  }
}
