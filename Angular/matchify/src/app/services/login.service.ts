import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const clientId = '5f137a45a0d1403bb3e9a31625282aed';
const clientSecret = 'f406a388eb6148ca9465571fdb38ce4d';
const redirectUri = 'http://localhost:4200/home';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  scopes: string = "user-read-private user-read-recently=played user-follow-read user-top-read";
  
  constructor(private http: HttpClient) { }

  getToken(){
    return this.http.get("https://accounts.spotify.com/authorize?client_id=5f137a45a0d1403bb3e9a31625282aed&response_type=code&scope=user-read-private&redirect_uri=http://localhost:4200/home&show_dialog=false");
  }
}
