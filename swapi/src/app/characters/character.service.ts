import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CharacterService implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.fetchCharacters();
        console.log(this.fetchCharacters());
    }

    fetchCharacters() {
        return this.http.get<any>('https://swapi.dev/api/people/?page=1')
            .pipe(map(resData => {
                let characters;
                characters = resData.results;
                console.log(characters);
            }));
    }
}

