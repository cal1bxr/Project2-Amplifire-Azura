import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.loginService.getToken());
    console.log(window.location.href)
    window.location.href = "https://accounts.spotify.com/authorize?client_id=5f137a45a0d1403bb3e9a31625282aed&response_type=token&scope=user-read-private&redirect_uri=http://localhost:4200/home&show_dialog=false"
    console.log("Did it make it");
  }
}
