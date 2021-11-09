import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER_URL = "http://localhost:8081/user";

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

  get(){
    return this.http.get(this.SERVER_URL, {withCredentials: true}).pipe(catchError(this.handleError));
  }
}
