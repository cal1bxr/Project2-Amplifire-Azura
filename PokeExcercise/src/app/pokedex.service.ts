import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

let url: string = "http://localhost:8082/";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  

  constructor(private http:  HttpClient) { }

  getAllTrainers() {
    return this.http.get<any>(`${url}/poke/trainer`);
  }

  getTrainer(id:number){
    return this.http.get<any>(`${url}/poke/trainer/`+id);
  }

  addTrainer(t:Trainer): Observable<Trainer[]> {
    return this.http.post<any>(`${url}/poke/trainer`, t);
  }

  getPoke(id:number): Observable<any> {
    return this.http.get<any>(('https://pokeapi.co/api/v2/pokemon/'+id+'/'))
  }

  addPoke(p:Pokemon): Observable<Trainer[]> {
    return this.http.post<any>(url+'/poke/pokemon', p);
  }
}
