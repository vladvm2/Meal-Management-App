import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isOpened: boolean;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectForm();
  }

  click() {
    this.isOpened = !this.isOpened;
  }

  selectForm() {
    if (this.router.url.endsWith("sign-in")) {
      this.isOpened = true;
    } else if (this.router.url.endsWith("sign-up")) {
      this.isOpened = false;
    }
  }
}
