import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { Favoriteswithid } from 'src/app/models/favoriteswithid';
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

allFavs : Favoriteswithid[] = [];
userFavs : Favoriteswithid[] = [];
allUsers : User[] = [];
favArtists: User[] = [];
useremail : string = '';


  constructor(private loginService: LoginService, private favService: FavoritesService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.loginService.getRefreshToken(this.loginService.accessToken, this.loginService.refreshToken, this.loginService.code);
    this.getFavorites();
    this.setUserFavorites(this.allFavs);
    this.setFavArtists(this.userFavs);
    this.generateFavOptions();
    this.generateDeleteOptions();

    console.log(this.allFavs);
    console.log(this.userFavs);
   
  }

 getFavorites() {
    this.favService.getAllFavorites().subscribe(
      (response: Favoriteswithid[]) => {
        this.allFavs = response;
      },
      (error: any) => {console.log("Http error: ", error);
                  if(error.status == 503 || error.status == 504){
                    this.router.navigate(['error']);
                  }});    
  }

  setUserFavorites(all: Favoriteswithid[]){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email; console.log(response); return this.useremail})
    for(let temp of all){
      if(temp.email === this.useremail){
        this.userFavs.push(temp);
      }
    }
  }

setFavArtists(favs : Favoriteswithid[]){
  for(let temp of favs){
    this.userService.getDBUser(temp.favoriteEmail).subscribe(
      (data:User)=>{
        data = new User(data.email, data.firstName, data.lastName, data.description, data.artist1, data.artist2, data.artist3, data.artist4, data.artist5, data.artist6)
        this.favArtists.push(data);
      }
        
    )
  }
}

generateFavOptions(){
  this.userService.getAllUsers().subscribe((response: any) => {this.allUsers = response; console.log(response);
  
    for(let temp of this.allUsers){
      let name = document.createElement("p");
      let artists = document.createElement("p");
      let btn = document.createElement("button");
      btn.setAttribute("style", "background-color: DeepSkyBlue;");
      
      
      

      if(temp != undefined && temp.email != undefined){
        btn.innerHTML = " Add "+temp.firstName+" ";
      name.innerHTML =  temp.firstName+"'s top artists:";
      artists.innerHTML = temp.artist1+", "+temp.artist2+", "+temp.artist3+", "+temp.artist4+", "+temp.artist5+", "+temp.artist6;
      btn.value = temp.email;
      }
      btn.onclick = () => {
        
        alert("Add Fav is clicked");
        let newFav = new Favorites(this.useremail, btn.value);
        console.log(newFav);
        this.favService.createFav(newFav);
       // window.location.reload();

      }
      
      document.getElementById("exploreForm")!.appendChild(name);
      document.getElementById("exploreForm")!.appendChild(artists);
      document.getElementById("exploreForm")!.appendChild(btn);
      


    }
   
  })    

}

generateDeleteOptions(){
  

  for(let i of this.userFavs){

    for(let temp of this.allUsers){

      if(i.favoriteEmail === temp.email){
        let btn = document.createElement("button");
        if(temp.firstName != undefined){
        btn.innerHTML = temp.firstName;
        btn.value = i.id.toString();
        }
        btn.onclick = () => {
          
          alert("Delete is clicked");
          var backtonumber :number = Number(btn.value);
          this.favService.deleteFav(backtonumber);
        //  window.location.reload();

        }
        
        document.getElementById("deleteForm")!.appendChild(btn);
      }
    }
  }
      

}


}
