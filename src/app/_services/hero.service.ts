// import { HEROES } from './../_models/mock-heroes';
import { inject, Injectable } from '@angular/core';
import { Hero } from '../_models/hero';
import { HEROES } from '../_models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  messageService = inject(MessageService)

  constructor() { }

  getHeroes() : Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add("HeroService: fetched heroees")
    return heroes
  }

  getHero(id : number) : Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    console.log(hero)
    this.messageService.add(`heroeservice: fetched hero id = ${id}`)
    return of(hero)
  }
}
