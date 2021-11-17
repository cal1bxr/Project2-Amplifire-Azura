import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from '../models/favorites';
import { Favoriteswithid } from '../models/favoriteswithid';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getAllFavorites(){
    return this.http.get<Favoriteswithid[]>('http://localhost:8081/data/favorites');
  }

  createFav(newFav : Favorites){
    return this.http.post('http://localhost:8081/data/favorites', newFav).subscribe((response)=>{console.log(response)});
  }

  deleteFav(oldFavId : number){
    //let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8081/data/favorites"+oldFavId.toString);
    return this.http.delete('http://localhost:8081/data/favorites/'+oldFavId.toString()).subscribe((response)=>{console.log(response)});
  }
}
