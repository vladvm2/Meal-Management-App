import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthenticationComponent = class AuthenticationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.selectForm();
    }
    click() {
        this.isOpened = !this.isOpened;
    }
    selectForm() {
        if (this.router.url.endsWith("sign-in")) {
            this.isOpened = true;
        }
        else if (this.router.url.endsWith("sign-up")) {
            this.isOpened = false;
        }
    }
};
AuthenticationComponent = __decorate([
    Component({
        selector: 'app-authentication',
        templateUrl: './authentication.component.html',
        styleUrls: ['./authentication.component.css']
    })
], AuthenticationComponent);
export { AuthenticationComponent };
//# sourceMappingURL=authentication.component.js.map