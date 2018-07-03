import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  // Create Auth0 web auth instance
  private _Auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientId,
    domain: environment.auth.domain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    scope: 'openid profile email'
  });
  userProfile: any;
  accessToken: string;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  expiresAt: number;

  constructor(private router: Router) {
    // If app auth token is not expired, request new token
    if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
      this.renewToken();
    }
  }

  renewToken() {
    // Check for valid Auth0 session
    this._Auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      } else {
        localStorage.removeItem('expires_at');
      }
    });
  }

  private _setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    this._Auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this._Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this._Auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this._setLoggedIn(true);
    this.router.navigate(['/customers']);
  }

  logout() {
    this._Auth0.logout({
      returnTo: 'http://localhost:4200',
      clientID: environment.auth.clientId
    });
  }

  get tokenValid(): boolean {
    // Check if current time is past access token's expiration
    return (Date.now() < this.expiresAt) && this.loggedIn;
  }

}
