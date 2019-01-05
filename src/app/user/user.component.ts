import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  user = JSON.parse(localStorage.getItem('user')) || {
    name: '',
    surname: '',
    age: '',
    city: ''
  };

  saveUser(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
