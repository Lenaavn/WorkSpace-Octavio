import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseURL: string = "https://rickandmortyapi.com/api/character";
  constructor(
    private http: HttpClient
  ) { }

  findAllCharacters(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  findCharacterById(id: number): Observable<any> {
    return this.http.get(this.baseURL + "/" + id);
  }

}
