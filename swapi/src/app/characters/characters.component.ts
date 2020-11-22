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

  clickSortByMass() {
    this.characters = this.characters.sort(this.sortByMass);
  }

  sortByMass(a: Character, b: Character) {
    if (a.mass > b.mass) {
      return 1;
    } if (a.mass < b.mass) {
      return -1;
    }
    return 0;
  }

  clickSortByHeight() {
    this.characters = this.characters.sort(this.sortByHeight);
  }

  sortByHeight(a: Character, b: Character) {
    if (a.height > b.height) {
      return 1;
    } if (a.height < b.height) {
      return -1;
    }
    return 0;
  }

  onLogOut() {
    this.authService.logOut();
  }


  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
