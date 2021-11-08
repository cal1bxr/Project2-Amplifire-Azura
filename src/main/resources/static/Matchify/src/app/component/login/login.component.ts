import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scopes: string[] = ['user-read-playback-state', 'user-read-currently-playing'];
  DELEMITER: string = '%20';
  CLIENT_ID: string = 'bd65c2a1c20245dda47c526d5fb90a2b';
  SPOTIFY_AUTHORIZATION_ENDPOINT: string = 'https://accounts.spotify.com/authorize';
  RESPONSE_TYPE:  string = '?response_type=token';
  SCOPES_URL: string = this.scopes.join(this.DELEMITER);
  REDIRECT_URL: string = 'http://localhost:4200/';
  STATES_URL: string = '&state=';

  

  handleLogin(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}


/*
var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
url += '&state=' + encodeURIComponent(state);

https://accounts.spotify.com/authorize?&client_id=bd65c2a1c20245dda47c526d5fb90a2b&scope=user-read-playback-state%20user-read-currently-playing&redirect_uri=http://localhost:4200/&response_type=token&show_dialog=true
*/