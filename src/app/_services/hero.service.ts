// import { HEROES } from './../_models/mock-heroes';
import { inject, Injectable } from '@angular/core';
import { Hero } from '../_models/hero';
import { HEROES } from '../_models/mock-heroes';
import { catchError, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  addHero(arg0: Hero) {
    throw new Error('Method not implemented.');
  }
  private messageService = inject(MessageService)
  private http = inject(HttpClient);


  private heroesUrl = 'api/heroes';

  

  constructor() { }

  getHeroes() : Observable<Hero[]>{
   return this.http.get<Hero[]>(this.heroesUrl)
   .pipe(
    tap(_ => this.log("Fetched heroes")),
    catchError(this.handleError<Hero[]>'getHeroes', [])
   );
  }

/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}

  getHero(id : number) : Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    console.log(hero)
    this.messageService.add(`heroeservice: fetched hero id = ${id}`)
    return of(hero)
  }
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`)
  }

  /** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );

  
}
/** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}
}
