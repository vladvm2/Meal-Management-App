import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationActionTypes } from '@app/authentication/store/actions/authentication.actions';

@Injectable()
export class AuthenticationService {
  url = `${environment.apiUrl}users`;
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient, private logger: NGXLogger) { }

  getAccessToken(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token;
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return token != null;
  }


  signIn(email: string, password: string): Observable<any> {
    const signInUrl = `${this.url}/sign-in`;
    const user = { email: email, password: password };

    this.logger.info(AuthenticationActionTypes.SIGN_IN, user);

    return this.httpClient.post(signInUrl, user, this.jsonHeader);
  }

  signUp(user: User): Observable<any> {
    const signUpUrl = `${this.url}/sign-up`;

    this.logger.info(AuthenticationActionTypes.SIGN_UP, user);

    return this.httpClient.post(signUpUrl, user, this.jsonHeader);
  }

  update(userData: any): Observable<any> {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const updateUrl = `${this.url}/update/${userId}`;

    this.logger.info(AuthenticationActionTypes.UPDATE, userId);

    return this.httpClient.post(updateUrl, userData);
  }

  signOut(): void {
    this.logger.info(AuthenticationActionTypes.SIGN_OUT);

    localStorage.removeItem('user');
  }
}