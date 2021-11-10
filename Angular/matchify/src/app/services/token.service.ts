import { Injectable } from '@angular/core';

const ACCESSTOKEN = 'access_token';
const REFRESHTOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string{
    return localStorage.getItem(ACCESSTOKEN)!;
  }

  getRefreshToken(): string{
    return localStorage.getItem(REFRESHTOKEN)!;
  }

  saveToken(accessToken: string): void {
    localStorage.setItem(ACCESSTOKEN, accessToken);
  }

  saveRefreshToken(refreshToken: string): void{
    localStorage.setItem(REFRESHTOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESSTOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESHTOKEN);
  }
}
