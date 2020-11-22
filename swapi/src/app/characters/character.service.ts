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
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.get<any>('https://swapi.dev/api/people/?page=1',
                {
                    params: new HttpParams().set('auth', user.token)
                }
                );
            }),
            map(resData => {
                console.log(resData.results);
                return resData.results;
            }));
    }
}

