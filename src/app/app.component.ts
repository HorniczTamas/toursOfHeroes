import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './_components/heroes/heroes.component';
import { MessagesComponent } from './_components/messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
