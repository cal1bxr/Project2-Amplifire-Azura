import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  private apiUrl="https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5";

  accessToken = JSON.parse(localStorage.getItem('access_token')!);

  httpOptions = {headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Bearer ' + this.accessToken)
  }
  constructor( private http: HttpClient) { }


  getSongs(): Observable<any>{
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  
  
  }
}
