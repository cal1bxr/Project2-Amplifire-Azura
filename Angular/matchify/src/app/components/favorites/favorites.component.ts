import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { User } from 'src/app/models/user';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

allFavs : Favorites[] = [];
userFavs : Favorites[] = [];
allUsers : User[] = [];
favArtists: User[] = [];
useremail : string = '';

  constructor(private loginService: LoginService, private favService: FavoritesService, private userService: UserService) { }

  ngOnInit(): void {

    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.getFavorites();
    this.setUserFavorites(this.allFavs);
    this.setFavArtists(this.userFavs);
    //this.userService.getAllUsers().subscribe((response: any) => {this.allUsers[]= response.email; console.log(response)})
  }

 getFavorites() {
    this.favService.getAllFavorites().subscribe(
      (response: Favorites[]) => {
        this.allFavs = response;
      }
    )
    
  }

  setUserFavorites(all: Favorites[]){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email; console.log(response)})
    for(let temp of all){
      if(temp.email === this.useremail){
        this.userFavs.push(temp);
      }
    }
  }

setFavArtists(favs : Favorites[]){
  for(let temp of favs){
    this.userService.getDBUser(temp.favoriteEmail).subscribe(
      (data:User)=>{
        data = new User(data.email, data.firstName, data.lastName, data.description, data.artist1, data.artist2, data.artist3, data.artist4, data.artist5, data.artist6)
        this.favArtists.push(data);
      }
        
    )
  }
}

// generateFavOptions(){
//   for(let temp of allUsers){}
//   let btn = document.createElement("checkbox");
//   btn.innerHTML = "Submit";
//   btn.type = "submit";
//   btn.name = "formBtn";
//   btn.onclick = function () {
//     alert("Button is clicked");
//   };
//   document.body.appendChild(btn);
// }

//}

}
