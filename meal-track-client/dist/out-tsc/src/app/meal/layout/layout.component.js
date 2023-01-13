import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { signOut } from '@app/authentication';
let LayoutComponent = class LayoutComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.navButtons = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: "Food", url: '/food' },
            { name: 'Meal', url: '/meal' },
            { name: 'Sign out', url: '/sign-out' }
        ];
        this.selectedButton = this.navButtons.find(btn => btn.url === this.router.url);
        this.getUser();
    }
    selectPage(navButton) {
        this.selectedButton = navButton;
        if (this.selectedButton.name === 'Sign out') {
            this.signOut();
        }
    }
    getUser() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    signOut() {
        this.store.dispatch(signOut());
    }
};
LayoutComponent = __decorate([
    Component({
        selector: 'app-layout',
        templateUrl: './layout.component.html',
        styleUrls: ['./layout.component.css']
    })
], LayoutComponent);
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map