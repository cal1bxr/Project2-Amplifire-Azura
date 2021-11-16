import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { last } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user';
import { UserComponent } from '../user/user.component';

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

  constructor(private registrationService: RegistrationService, private user: User, private userService: UserService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.getRefreshToken();
     this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.email})
  }

  login(fName: any, lName: any, des: any){

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

    this.userService.getCurrentUserInfo().subscribe((response: any) => {this.useremail = response.body.email
    console.log(this.useremail);
    
    this.registrationService.postRegistration(this.user);
  })
    console.log(this.user);
    this.registrationService.postRegistration(this.user);
  }


  

}
