import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from './token.service';


/* 
client id -> 'bd65c2a1c20245dda47c526d5fb90a2b';
client Secret -> '8380aa9e99324cfc8477e329b444f3ff';
*/
const CLIENTID = 'client_id';
const CLIENTSECRET = 'client secret';
const APIURL = 'http://localhost:3000';
const HTTPOPTIONS = { headers: new HttpHeaders({ 
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: 'Basic ' + btoa(CLIENTID + ":" + CLIENTSECRET)
})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUri = '';
  private static handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.log("Something went wrong", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}`,
        `body was: ${error.error}`
      );
    }
    return throwError("Please Try again later");
  }

  private static log(message: string): any{
    console.log(message);
  }
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getAccess(){
    this.http.get("https://accounts.spotify.com/authorize?client_id=5f137a45a0d1403bb3e9a31625282aed" +
    "&response_type=codescope=user-read-private%20user-followread%20user-top-read%20uers-read-email%20user-read-recently-played" +
    "&redirect_uri=http://localhost:4200/home&show_dialog=false");
  }

  login(loginData: any): Observable<any>{
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password)
      .set('grant_type', 'password');
    
      return this.http.post<any>(APIURL +'oauth/token', body, HTTPOPTIONS).pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError));
  }

  refreshToken(refreshData: any): Observable<any>{
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    
      return this.http.post<any>(APIURL +'oauth/token', body, HTTPOPTIONS).pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError));
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(APIURL +'oauth/signup', data)
      .pipe(tap( _ => AuthService.log('register')),
        catchError(AuthService.handleError));
  }

  secured(): Observable<any> {
    return this.http.get<any>(APIURL + 'secret')
      .pipe(catchError(AuthService.handleError));
  }
}