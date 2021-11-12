import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SongService } from 'src/app/services/song.service';
import { Tracks } from 'src/app/models/tracks';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
tracks: Tracks[] = [];

  constructor(private songService: SongService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
    this.songService.getSongs().subscribe((response) => {this.tracks=response;
      console.log(this.tracks);})
   
  }

  toggleSongs(tracks: any){
    console.log(typeof tracks);
  }
}

