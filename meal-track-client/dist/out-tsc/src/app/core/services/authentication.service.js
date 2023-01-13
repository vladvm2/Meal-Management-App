import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://localhost:44316/users";
        this.jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
    getAccessToken() {
        var _a;
        let user = JSON.parse(localStorage.getItem('user'));
        return (_a = user) === null || _a === void 0 ? void 0 : _a.token;
    }
    isAuthenticated() {
        const token = this.getAccessToken();
        return token != null;
    }
    signIn(email, password) {
        let signInUrl = this.url + '/sign-in';
        let user = { email: email, password: password };
        return this.httpClient.post(signInUrl, user, this.jsonHeader);
    }
    signUp(user) {
        let signUpUrl = this.url + '/sign-up';
        return this.httpClient.post(signUpUrl, user, this.jsonHeader);
    }
    signOut() {
        localStorage.removeItem('user');
    }
};
AuthenticationService = __decorate([
    Injectable()
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map