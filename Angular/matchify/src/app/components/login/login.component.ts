import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  code: string | undefined;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  onClick(){
    this.loginService.getAuthorization();
  }
}
