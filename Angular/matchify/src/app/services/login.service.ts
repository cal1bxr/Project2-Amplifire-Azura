import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const SCOPES: string = "user-read-private%20user-read-recently-played%20user-follow-read%20user-top-read%20user-read-email";
const redirectUri = 'http://localhost:4200/home';
const clientId = 'bd65c2a1c20245dda47c526d5fb90a2b';
const clientSecret = '8380aa9e99324cfc8477e329b444f3ff';
let code:string = '';let ACCESSTOKEN ='';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAuthorization(){
    let url = AUTHORIZE;
    url += '?client_id='+ clientId;
    url += '&response_type=code';
    url += '&redirect_uri='+ redirectUri;
    url += '&show_dialog=true';
    url += '&scope=' + SCOPES;
    console.log(url);
    
    window.location.href = url;  
  }

  

  getToken(){
    let win = window.location.href;
    let winSplit = win.split('=', 2);
    code = winSplit[1];
    let authCode = localStorage.setItem('code', JSON.stringify(code));
   
    const httpOptions: { headers: any; observe: any; } = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret)),
      observe: 'response'
    };
    const body = new HttpParams()
      .set('code', code)
      .set('redirect_uri', redirectUri)
      .set('grant_type', 'authorization_code');

    this.http.post('https://accounts.spotify.com/api/token', body, httpOptions).subscribe(
      (response: any)=>{ localStorage.setItem('access_token', JSON.stringify(response["body"].access_token));
      localStorage.setItem('refresh_token', JSON.stringify(response["body"].refresh_token));
    }
    )
  }

  getRefreshToken(){
    let refreshToken = JSON.parse(localStorage.getItem('refresh_token')!);
    let accessToken = JSON.parse(localStorage.getItem('access_token')!);
    const httpOptions: { headers: any; observe: any; } = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret)),
      observe: 'response'
    };
    const body = new HttpParams()
    .set('grant_type', 'refresh_token')
    .set('refresh_token', refreshToken)
    .set('access_token', accessToken);

    this.http.post('https://accounts.spotify.com/api/token', body, httpOptions).subscribe(
      (response: any) => { localStorage.setItem('access_token', JSON.stringify(response["body"].access_token));
    }
    )
  }
}
