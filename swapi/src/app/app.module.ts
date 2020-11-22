import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AuthComponent } from './auth/auth.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: AuthComponent }
  // { path: 'characters', component: CharactersComponent },
  // { path: 'characterlist', component: CharacterListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,                             
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
