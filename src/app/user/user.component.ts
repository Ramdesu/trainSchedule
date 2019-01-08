import {Component} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {UserAuthDialogComponent} from '../user-auth-dialog/user-auth-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  constructor(private dialog: MatDialog) {}

  openAuthDialog(): void {
    const UserAuthDialogComponentRef = this.dialog.open(UserAuthDialogComponent);
  }
}
