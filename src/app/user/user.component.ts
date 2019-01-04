import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  user = (localStorage.getItem('user' ) == null)? {
    name: '',
    surname: '',
    age: '',
    city: ''
  }: JSON.parse(localStorage.getItem('user'));

  saveUser(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
