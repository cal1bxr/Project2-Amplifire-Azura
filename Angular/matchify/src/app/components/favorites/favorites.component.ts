import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/models/favorites';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

allFavs : Favorites[] = [];

  constructor(private loginService: LoginService, private favService: FavoritesService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
    this.getFavorites();
  }

  getFavorites() {
    this.favService.getAllFavorites().subscribe(
      (response: Favorites[]) => {
        this.allFavs = response;
      }
    )
  }

  



}
