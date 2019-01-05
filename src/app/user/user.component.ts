import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../local-storage.service";

interface IUser {
  name: string,
  surname: string,
  age: string,
  city: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  user: IUser;

  constructor() {
    this.user = LocalStorageService.getItem('user') || {
    name: '',
    surname: '',
    age: '',
    city: ''
  } as IUser;
  }

  saveUser(): void {
    LocalStorageService.setItem('user', this.user);
  }
}
