import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CharacterService } from './character.service';
import { Character } from './model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub: Subscription;
  characters: Character[];

  constructor(private characterServise: CharacterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  getCharacters() {
    const data: any = this.characterServise.fetchCharacters().subscribe(data => {
      this.characters = data;
      console.log("Character[0].NAAAAME:" + this.characters[2].name);
    });
  }
  onLogOut() {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
