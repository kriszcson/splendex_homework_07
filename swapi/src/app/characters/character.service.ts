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
        return this.http.get('https://swapi.dev/api/people/?page=1')
            .pipe(map(resData => {
                const characters = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        characters.push({ ...resData[key], id: key })
                    }
                }
            })
            )
    }
}
