import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
  }

  toggleSongs(){
    console.log("I have been clicked");
  }

}
