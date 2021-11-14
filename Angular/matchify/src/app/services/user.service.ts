import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { LoginService } from './login.service';

const SERVERURL = "http://localhost:8081/user";
const APIURL = "https://api.spotify.com/";
const APIUSERURI = 'https://api.spotify.com/v1/me'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accessToken = JSON.parse(localStorage.getItem('access_token')!);
  
  httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Bearer ' + this.accessToken),
    observe: 'response'
  };
  

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    let errorMessage = "Something went wrong";
    if(error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getCurrentUserInfo(): Observable<any>{
    return this.http.get<any>(`${APIUSERURI}`, this.httpOptions);
  }

  getRecommendedArtist(): Observable<any>{
    return this.http.get<any>(`${APIUSERURI}`)
  }
}


