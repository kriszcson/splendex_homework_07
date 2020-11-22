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
                let characters: Array<{
                    name: string;
                    height: number;
                    mass: number;
                    hair_color: string;
                    skin_color: string;
                    eye_color: string;
                    birth_year: number;
                    gender: string;
                    homeworld: string;
                    films: string[];
                    species: string[];
                    vehicles: string[];
                    starships: string[];
                    created: Date;
                    edited: Date;
                    url: string;
                    id?: string;
                }>;
                console.log(resData.results);
                characters = resData.results;
                console.log("Fetch from SWAPI: " + characters[0].birth_year);
                return resData.results;
            }));
    }
}

