import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() description!: string;
  useremail: string = "";
  user: any;
  artist1 : any;
  artist2 : any;
  artist3 : any;
  artist4 : any;
  artist5 : any;
  artist6 : any;

  constructor(private registrationService: RegistrationService, private userService: UserService, private loginService : LoginService, private artistService: ArtistService) { }

  ngOnInit(): void {
     this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email})
  }

  login(fName: any, lName: any, des: any){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email
      console.log(this.useremail);

      
      this.artistService.getArtists().subscribe((response: any) => {let artists = response;
      this.artist1 = artists.items[0].name;
      this.artist2 = artists.items[1].name;
      this.artist3 = artists.items[2].name;
      this.artist4 = artists.items[3].name;
      this.artist5 = artists.items[4].name;
      this.artist6 = artists.items[5].name;
      
      this.user = {
      firstName: fName.value,
      lastName: lName.value,
      email: this.useremail,
      description: des.value,
      artist1: this.artist1,
      artist2: this.artist2,
      artist3: this.artist3,
      artist4: this.artist4,
      artist5: this.artist5,
      artist6: this.artist6
    }
    console.log(this.user);

    
    this.registrationService.postRegistration(this.user);
  })
  });}
}
  
