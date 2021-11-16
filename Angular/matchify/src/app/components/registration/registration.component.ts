import { Component, Input, OnInit } from '@angular/core';

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

  constructor(private registrationService: RegistrationService, private userService: UserService, private loginService : LoginService) { }

  ngOnInit(): void {
     this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email})
  }

  login(fName: any, lName: any, des: any){

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email
      console.log(this.useremail);

    this.user = {
      firstName: fName.value,
      lastName: lName.value,
      email: this.useremail,
      description: des.value,
      artist1: undefined,
      artist2: undefined,
      artist3: undefined,
      artist4: undefined,
      artist5: undefined,
      artist6: undefined
    }
    console.log(this.user);    
    this.registrationService.postRegistration(this.user);
  })
    // console.log(this.user);
    // this.registrationService.postRegistration(this.user);
  }


  

}
