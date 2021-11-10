import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


const ACCESSTOKENURL = 'https://accounts.spotify.com/api/token';
const redirectUri = 'http://localhost:4200/home';
const clientId = 'bd65c2a1c20245dda47c526d5fb90a2b';
const clientSecret = '8380aa9e99324cfc8477e329b444f3ff';
let code:string = '';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  redirect_uri = redirectUri;
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
  
  constructor(private router: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void { 
    let win = window.location.href;
    let winSplit = win.split('=', 2);
    code = winSplit[1];
    console.log(code);
    localStorage.setItem('code', code);
    // let authOptions = {
    //   form: {
    //     code: code,
    //     redirect_uri: redirectUri,
    //     'grant_type': 'authorization_code'
    //   }
    // };
  //   let headers = new HttpHeaders()
  // .set('Content-Type', 'application/x-www-form-urlencoded')
  // .set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));
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

   this.http.post('https://accounts.spotify.com/api/token', body, httpOptions).subscribe()
    //  map((data: any)=> {
    //    console.log(data);
    //    return data;
    //  }), catchError(error => { 
    //    console.log(error)
    //    return throwError('Something went wrong');
    // })
  }
}  



