import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists: any = '';

  constructor(private loginService: LoginService, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
    this.artistService.getArtists().subscribe((response) => {this.artists=response;
      console.log(this.artists);
    })
  }

}
