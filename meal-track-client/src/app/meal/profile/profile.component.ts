import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mustMatch } from '@app/shared';
import { User } from '@app/core';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { update, getAuthenticationUser, getAuthenticationSuccess, clearMessages } from '@app/authentication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm: FormGroup;
  changePassword: boolean = false;

  previewImage: any;
  imageFile: any;

  updatedMessage$: Observable<string>;
  currentUser$: Observable<User>;
  currentUser: User;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setupForm();
    this.setCurrentUserInformation();
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearMessages());
  }

  setupForm() {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });

  }

  get pForm() {
    return this.profileForm.controls;
  }

  onChangePassword() {
    this.changePassword = !this.changePassword;
    if (!this.changePassword) {
      this.profileForm.controls['password'].setValue('');
      this.profileForm.controls['confirmPassword'].setValue('');
    }
  }

  onSubmit() {
    const formValid = this.profileForm.valid || (
      !this.changePassword &&
      this.profileForm.controls['fullName'].valid &&
      this.profileForm.controls['email'].valid
    );

    if (!formValid) {
      return;
    }

    const user: User = {
      fullName: this.profileForm.controls['fullName'].value,
      email: this.profileForm.controls['email'].value,
      password: this.profileForm.controls['password'].value,
    };
    let userFormData = new FormData();
    userFormData.append('file', this.imageFile);
    userFormData.append('user', JSON.stringify(user));

    this.store.dispatch(update({ userData: userFormData }));
  }

  onImageChanged(event) {
    const file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      return;
    }

    this.imageFile = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.previewImage = reader.result;
    }
  }

  setCurrentUserInformation() {
    this.updatedMessage$ = this.store.select(getAuthenticationSuccess);
    this.currentUser$ = this.store.select(getAuthenticationUser);
    this.currentUser$.subscribe(user => {
      const cachedUser = user ? user : JSON.parse(localStorage.getItem('user'));
      this.previewImage = this.getRefreshingURL(cachedUser.image);
      this.profileForm.controls['fullName'].setValue(cachedUser.fullName);
      this.profileForm.controls['email'].setValue(cachedUser.email);
    });
  }

  getRefreshingURL(image: string) {
    return image + '?' + (new Date().getTime());;
  }
}