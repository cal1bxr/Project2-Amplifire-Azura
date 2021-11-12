import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  accessToken = JSON.parse(localStorage.getItem('access_token')!);
  
  httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Bearer ' + this.accessToken),
    observe: 'response'
  }
  constructor( private http: HttpClient) { }


  getSongs(): Observable<any> {
    return this.http.get("https://api.spotify.com/v1/me/top/tracks", this.httpOptions);
  
  
  }
}
