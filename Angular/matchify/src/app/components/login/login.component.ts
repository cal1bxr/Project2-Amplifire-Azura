import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

const clientId = 'bd65c2a1c20245dda47c526d5fb90a2b';
const redirectUri = 'http://localhost:4200/home';
const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const SCOPES: string = "user-read-private%20user-read-recently-played%20user-follow-read%20user-top-read%20user-read-email";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  code: string | undefined;
  constructor(private loginService: LoginService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onClick(){
    let url = AUTHORIZE;
    url += '?client_id='+ clientId;
    url += '&response_type=code';
    url += '&redirect_uri='+ redirectUri;
    url += '&show_dialog=true';
    url += '&scope=' + SCOPES;
    console.log(url);
    
    window.location.href = url;    
  }
}
