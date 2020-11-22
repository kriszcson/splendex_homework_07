import { Injectable, OnInit } from '@angular/core';
import { map, take, exhaustMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class CharacterService implements OnInit {

    constructor(private http: HttpClient, private authService: AuthService) { }

    ngOnInit() {
        this.fetchCharacters();
        console.log(this.fetchCharacters());
    }

    fetchCharacters() {
        return this.http.get<any>('https://swapi.dev/api/people/?page=1').pipe(
            map(resData => {
                console.log(resData.results);
                return resData.results;
            }));
    }
}

