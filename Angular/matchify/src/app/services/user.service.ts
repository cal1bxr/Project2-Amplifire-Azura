import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

const SERVERURL = "http://localhost:8081/user";
const APIURL = "https://api.spotify.com/";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

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

  getCurrentUserInfo() {
    return this.http.get(`${APIURL}/v1/me/`, {withCredentials: true}).subscribe();
  }
}
