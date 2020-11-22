import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub: Subscription;
  characters;

  constructor(private characterServise: CharacterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  getCharacters() {
    this.characters = this.characterServise.fetchCharacters().subscribe();
    console.log(this.characters);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
