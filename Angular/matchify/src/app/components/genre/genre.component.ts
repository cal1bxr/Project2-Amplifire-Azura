import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres: any = '';
  constructor(private loginService: LoginService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.genreService.getGenres().subscribe((response)=> {this.genres = response;})
    for (let genre of this.genres){
      console.log(genre);
    }
  }

}
