import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated: boolean;

  constructor() {
    this._userIsAuthenticated = false;
   }

   get userIsAuthenticated(){
    return this._userIsAuthenticated;
   }

   public login(): void{
    this._userIsAuthenticated = true;
   }

   public logout(): void{
    this._userIsAuthenticated = false;
   }
}