import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  name: string = localStorage.getItem('name');
  surname: string = localStorage.getItem('surname');
  age: string = localStorage.getItem('age');
  city: string = localStorage.getItem('city');

  addUser(): void {
    localStorage.setItem('name', this.name);
    localStorage.setItem('surname', this.surname);
    localStorage.setItem('age', this.age);
    localStorage.setItem('city', this.city);
  }
}
