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
  charactersByMass: Character[];

  constructor(private characterServise: CharacterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  getCharacters() {
    const data: any = this.characterServise.fetchCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  clickSortByMass() {
    this.charactersByMass = this.characters.sort(this.sortByMass);
    console.log("characters by mass");
    console.log(this.charactersByMass);
  }

  sortByMass(a: Character, b: Character) {
    return b.mass - a.mass;
  }

  clickSortByHeight() {
    this.characters = this.characters.sort(this.sortByHeight);
  }

  sortByHeight(a: Character, b: Character) {
    return b.height - a.height;
  }

  onLogOut() {
    this.authService.logOut();
  }


  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
