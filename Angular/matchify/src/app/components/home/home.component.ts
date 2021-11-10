import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';


const ACCESSTOKENURL = 'https://accounts.spotify.com/api/token';
const redirectUri = 'http://localhost:4200/home';
const clientId = 'bd65c2a1c20245dda47c526d5fb90a2b';
const clientSecret = '8380aa9e99324cfc8477e329b444f3ff';
let token:string = '';
let headers = new HttpHeaders(
  {'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
}
);


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
    token = winSplit[1];
    console.log(token);
    localStorage.setItem('token', token);
    // let authOptions = {
    //   form: {
    //     code: code,
    //     redirect_uri: redirectUri,
    //     'grant_type': 'authorization_code'
    //   }
    // };

  //  this.http.post('https://accounts.spotify.com/api/token', {form: {'code': code, 'redirect_uri': redirectUri, 'grant_type': 'authorization_code'}}, {headers}).subscribe(
  //    (data) => {},
  //    (error) => { console.log(error);
  //   })
  }
}


