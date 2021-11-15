import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { last } from 'rxjs/operators';
import { RegistrationService } from 'src/app/services/registration.service';
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
  @Input() email!: string;
  @Input() description!: string;

  constructor(private registrationService: RegistrationService, private user: User) { }

  ngOnInit(): void {
  }
  login(fName: any, lName: any, em: any, des: any){
    this.user = {
      firstName: fName.value,
      lastName: lName.value,
      email: em.value,
      description: des.value,
      artist1: undefined,
      artist2: undefined,
      artist3: undefined,
      artist4: undefined,
      artist5: undefined
    }
    console.log(this.user);
    this.registrationService.postRegistration(this.user);
  }


  

}
