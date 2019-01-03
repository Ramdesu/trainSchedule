import { Component, OnInit } from '@angular/core';

export class trip{
  constructor(public departureTime: string,
              public departurePoint: string,
              public arrivalPoint: string,
              public price: number)
  { }
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


  trips: trip[] = [];

  addTrip = (departureTime: string, departurePoint: string, arrivalPoint: string, price: number) => {
    this.trips.push(new trip(departureTime, departurePoint, arrivalPoint, price));
  }

}

