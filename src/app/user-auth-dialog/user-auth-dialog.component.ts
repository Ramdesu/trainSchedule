import {Component} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {MatDialogRef} from '@angular/material';

interface IUser {
  name: string;
  surname: string;
  age: string;
  city: string;
}

@Component({
  selector: 'app-user-auth-dialog',
  templateUrl: './user-auth-dialog.component.html',
  styleUrls: ['./user-auth-dialog.component.scss']
})
export class UserAuthDialogComponent {
  user: IUser;

  constructor(public UserAuthDialogComponentRef: MatDialogRef<UserAuthDialogComponent>) {
    this.user = LocalStorageService.getItem('user') || {
      name: '',
      surname: '',
      age: '',
      city: ''
    } as IUser;
  }

  saveUser(): void {
    LocalStorageService.setItem('user', this.user);
    this.UserAuthDialogComponentRef.close();
  }
}
