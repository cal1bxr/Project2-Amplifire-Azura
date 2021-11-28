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
    // this.getFavorites();
    this.generateUserFavorites();
    this.setFavArtists(this.userFavs);
    this.generateFavOptions();
   // this.generateDeleteOptions();
   
  }

 getFavorites() {
    this.favService.getAllFavorites().subscribe(
      (response: Favoriteswithid[]) => {
        this.allFavs = response;
        console.log(this.allFavs);
      },
      (error: any) => {console.log("Http error: ", error);
                  if(error.status == 503 || error.status == 504){
                    this.router.navigate(['error']);
                  }});
  }

  generateUserFavorites(){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email; console.log(response); console.log(response.email);
      this.favService.getAllFavorites().subscribe((response: any) => {this.allFavs = response; console.log(this.allFavs);
        for(let temp of this.allFavs){
          if(temp.email === this.useremail){
            this.userFavs.push(temp);
          }
        }
        console.log(this.userFavs);

        this.userService.getAllUsers().subscribe((response : any ) => { this.allUsers = response; console.log(this.allUsers);
          for(let temp of this.userFavs){
            for(let auser of this.allUsers){
              if(temp.favoriteEmail === auser.email){

                console.log(temp.email);

                let name = document.createElement("p");
                let artists = document.createElement("p");
                let deleter = document.createElement("button");
                
                name.setAttribute("style", "margin-top: 10px; margin-right: 100px; margin-left: 100px;");
                artists.setAttribute("style", "margin-top: 10px;");
                deleter.setAttribute("style", "padding: 14px 40px; background-color: LightCoral;");
                
            
                if(auser != undefined && auser.email != undefined && auser.firstName){
                
                name.innerHTML =  auser.firstName;
                artists.innerHTML = auser.artist1+", "+auser.artist2+", "+auser.artist3+", "+auser.artist4+", "+auser.artist5+", "+auser.artist6;
                deleter.innerHTML =  auser.firstName;
                }
                
                

                console.log(temp.email);
              
            deleter.onclick = () => {
              
              alert("Deleted Favorite");
             // var backtonumber :number = Number(deleter.value);
              this.favService.deleteFav(temp.favID);
              console.log(temp);
              console.log(temp.favID);

            
              
            }
              
              
              document.getElementById("favFirstName")!.appendChild(name);
              document.getElementById("theirArtists")!.appendChild(artists);
              document.getElementById("deleteForm")!.appendChild(deleter);
                

              }
            }
          }
        })
      })
    
  })
    
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
  this.userService.getAllUsers().subscribe((response: any) => {this.allUsers = response; 
  
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
        
        alert("Added Favorite");
        let newFav = new Favorites(this.useremail, btn.value);
        console.log(newFav);
        this.favService.createFav(newFav);
       // window.location.reload();
       
       

      }
      name.setAttribute("class", "updateable");
      artists.setAttribute("class", "updateable");
      btn.setAttribute("class", "updateable");
      document.getElementById("exploreForm")!.appendChild(name);
      document.getElementById("exploreForm")!.appendChild(artists);
      document.getElementById("exploreForm")!.appendChild(btn);
      
    }
   
  })    

}

generateDeleteOptions(){
  

  this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email; console.log(response); console.log(response.email);
    this.favService.getAllFavorites().subscribe((response: any) => {this.allFavs = response; console.log(this.allFavs);
      for(let temp of this.allFavs){
        if(temp.email === this.useremail){
          this.userFavs.push(temp);
        }
      }
      console.log(this.userFavs);

      this.userService.getAllUsers().subscribe((response : any ) => { this.allUsers = response; console.log(this.allUsers);
        for(let temp of this.userFavs){
          for(let auser of this.allUsers){
            if(temp.favoriteEmail === auser.email){

              console.log(temp.email);

              let deleter = document.createElement("button");
              
          
              if(auser != undefined && auser.firstName != undefined){
              
              deleter.innerHTML =  auser.firstName;
             // deleter.value = temp.id.toString();
            }
            deleter.onclick = () => {
              
              alert("Deleted Favorite");
             // var backtonumber :number = Number(deleter.value);
              this.favService.deleteFav(temp.favID);
              console.log(temp);
              console.log(temp.favID);

            }
              
              document.getElementById("deleteForm")!.appendChild(deleter);

            }
          } 
        }
      })
    })
  
})
}







//   for(let i of this.userFavs){

//     for(let temp of this.allUsers){

//       if(i.favoriteEmail === temp.email){
//         let btn = document.createElement("button");
//         if(temp.firstName != undefined){
//         btn.innerHTML = temp.firstName;
//         btn.value = i.id.toString();
//         }
//         btn.onclick = () => {
          
//           alert("Delete is clicked");
//           var backtonumber :number = Number(btn.value);
//           this.favService.deleteFav(backtonumber);
//         //  window.location.reload();

//         }
        
//         document.getElementById("deleteForm")!.appendChild(btn);
//       }
//     }
//   }
      

// }


}
