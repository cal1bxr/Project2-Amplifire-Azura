import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
title: any[] = [];
artist: any [] = [];
imgUrl: any[] = [];

  constructor(private songService: SongService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
    this.songService.getSongs().subscribe((response: any)=> {console.log(response);
      this.title[0] = response.body.items[0].name;
      this.artist[0] = response.body.items[0].artists[0].name;
      this.imgUrl[0] = response.body.items[0].album.images[2].url;
      this.title[1] = response.body.items[1].name;
      this.artist[1] = response.body.items[1].artists[0].name;
      this.imgUrl[1] = response.body.items[1].album.images[2].url;
      this.title[2] = response.body.items[2].name;
      this.artist[2] = response.body.items[2].artists[0].name;
      this.imgUrl[2] = response.body.items[2].album.images[2].url;
      this.title[3] = response.body.items[3].name;
      this.artist[3] = response.body.items[3].artists[0].name;
      this.imgUrl[3] = response.body.items[3].album.images[2].url;
      this.title[4] = response.body.items[4].name;
      this.artist[4] = response.body.items[4].artists[0].name;
      this.imgUrl[4] = response.body.items[4].album.images[2].url;})
      console.log(this.title);
  }

  toggleSongs(title: { [x: string]: any; }[]){
  }
}
