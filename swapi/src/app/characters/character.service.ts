import { Component, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Character } from './model/character';
import { Input } from '@angular/core';

export class CharacterService implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.fetchCharacters();
        console.log(this.fetchCharacters());
    }

    fetchCharacters() {
        this.http.get('https://swapi.dev/api/people/?page=1')
            .pipe(map(resData => {
                const characters = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        characters.push({ ...resData[key], id: key })
                    }
                }
                return characters;
            })
            )
            .subscribe(characters => {
            })
    }
}
