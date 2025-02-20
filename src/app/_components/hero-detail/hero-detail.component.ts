import { Component, inject, input, Input, OnInit } from '@angular/core';
import { Hero } from '../../_models/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../_services/hero.service';

@Component({
  selector: 'app-hero-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  hero = input<Hero>()
  route = inject(ActivatedRoute)
  heroSErvice = inject(HeroService)
  // @Input() hero? : Hero
  selectedHero? : Hero

  constructor(){}

  ngOnInit(): void {
  }
}
