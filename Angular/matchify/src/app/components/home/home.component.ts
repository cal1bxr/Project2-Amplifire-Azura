import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private static handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.log("Something went wrong", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}`,
        `body was: ${error.error}`
      );
    }
    return throwError("Please Try again later");
  }
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void { 
    this.loginService.getToken();
    this.loginService.getRefreshToken();
  }

  
}  



