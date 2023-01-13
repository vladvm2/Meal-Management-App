import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@app/app.state';
import { User } from '@app/core';
import { signOut, getAuthenticationUser } from '@app/authentication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  selectedButton: any;
  navButtons: any[];
  currentUser$: Observable<User>;
  currentUser: User;


  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setupNavMenu();
    this.selectedButton = this.navButtons.find(btn => btn.url === this.router.url);
    this.getCurrentUser();
  }

  selectPage(navButton: any) {
    this.selectedButton = navButton;
    if (this.selectedButton.name === 'Sign out') {
      this.signOut();
    }
  }

  setupNavMenu() {
    this.navButtons = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Profile', url: '/profile' },
      { name: "Food", url: '/food' },
      { name: 'Meal', url: '/meal' },
      { name: 'Sign out', url: '/sign-out' }
    ];
  }

  getCurrentUser() {
    this.currentUser$ = this.store.select(getAuthenticationUser);
    this.currentUser$.subscribe(newUser => {
      if (newUser) {
        this.currentUser = { ...newUser, image: this.getRefreshingURL(newUser.image) };
      } else {
        const localUser = JSON.parse(localStorage.getItem('user'));
        this.currentUser = { ...localUser, image: this.getRefreshingURL(localUser.image) }
      }
    })
  }

  getRefreshingURL(image: string) {
    return image + '?' + (new Date().getTime());;
  }

  signOut() {
    this.store.dispatch(signOut());
  }
}
