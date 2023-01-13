import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthenticationGuard = class AuthenticationGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('/auth');
        return false;
    }
};
AuthenticationGuard = __decorate([
    Injectable({ providedIn: 'root' })
], AuthenticationGuard);
export { AuthenticationGuard };
//# sourceMappingURL=authentication.guard.js.map