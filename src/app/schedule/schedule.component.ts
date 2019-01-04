import { Component, OnInit } from '@angular/core';

interface Trip {
  departureTime: string,
  departurePoint: string,
  arrivalPoint: string,
  price: number;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  departureTime: string;
  departurePoint: string;
  arrivalPoint: string;
  price: number;

  trips: Trip[] = [];

  addTrip(): void {
    this.trips = [{
      departureTime: this.departureTime,
      departurePoint: this.departurePoint,
      arrivalPoint: this.arrivalPoint,
      price: this.price
    }, ...this.trips];
  }
}

