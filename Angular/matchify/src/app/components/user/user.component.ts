import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// title = JSON.parse(sessionStorage.getItem('username')!);
title: string = "";
email: string = "";
img: null | undefined;
  
  // users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserInfo().subscribe(
      ((response: any)=> {console.log(response);
        this.title = response.body.display_name;
                          this.email = response.body.email;
                          this.img = response.body.images[0].url;
   }
    ));
     
  }
}
