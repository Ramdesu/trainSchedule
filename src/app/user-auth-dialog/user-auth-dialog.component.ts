import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {IUser, UserService} from "../user.service";


@Component({
  selector: 'app-user-auth-dialog',
  templateUrl: './user-auth-dialog.component.html',
  styleUrls: ['./user-auth-dialog.component.scss']
})
export class UserAuthDialogComponent {
  user: IUser;

  constructor(public UserAuthDialogComponentRef: MatDialogRef<UserAuthDialogComponent>) {
    this.user = UserService.getUser();
  }
  saveUser(): void {
    UserService.setUser(this.user);
    this.UserAuthDialogComponentRef.close();
  }
}
