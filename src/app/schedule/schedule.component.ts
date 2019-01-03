import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trips = [['16:00', 'Москва - Воронеж', '$169'], ['17:00', 'Москва - Уфа', '$152']];

  addTrip = () => {
    let addTripForm = document.querySelectorAll('#addTripForm')[0];
    let time = addTripForm.querySelectorAll('input')[0].value;
    let way = addTripForm.querySelectorAll('input')[1].value + ' - ' + addTripForm.querySelectorAll('input')[2].value;
    let cost = '$' + addTripForm.querySelectorAll('input')[3].value;
    this.trips.push([time, way, cost]);
  }

}
