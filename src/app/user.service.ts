import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";

export interface IUser {
  name: string;
  surname: string;
  age: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static getUser(): IUser {
    return LocalStorageService.getItem('user') || {
      name: '',
      surname: '',
      age: '',
      city: ''
    } as IUser;
  }
  static setUser(user: IUser): void {
    LocalStorageService.setItem('user', user);
  }
}
