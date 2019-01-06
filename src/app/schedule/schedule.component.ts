import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../local-storage.service";

interface ITrip {
  departureTime: string,
  departurePoint: string,
  arrivalPoint: string,
  price: number,
  isEditable: boolean
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent{
  departureTime: string;
  departurePoint: string;
  arrivalPoint: string;
  price: number;

  trips: ITrip[] = LocalStorageService.getItem('trips');

  changePriceField($event): boolean {
    return $event.charCode >= 48
          && $event.charCode <= 57
          || $event.charCode == 8
          || $event.charCode == 46;
  }
  addTrip(): void {
    if(!this.departureTime
        || !this.departurePoint
        || !this.arrivalPoint
        || !this.price
        || this.price < 0) {
      return;
    }

    this.trips = [{
      departureTime: this.departureTime,
      departurePoint: this.departurePoint,
      arrivalPoint: this.arrivalPoint,
      price: this.price,
      isEditable: false
    } as ITrip, ...this.trips];
    LocalStorageService.setItem('trips', this.trips);
  }
  deleteTrip(trip: ITrip): void {
    this.trips = this.trips.filter(obj => obj !== trip);
    LocalStorageService.setItem('trips', this.trips);
  }
  editTrip(trip: ITrip, $event): void {
    if(trip.price < 0
      || typeof trip.price !== 'number') {
      return;
    }
    trip.isEditable = !trip.isEditable;
  }
}
