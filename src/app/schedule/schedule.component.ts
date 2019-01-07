import { Component } from '@angular/core';
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

  isValidForm(event: any): boolean {
    let validate: boolean = true;

    event.target.parentNode.parentNode.querySelectorAll('input').forEach(el => {
      if(el.classList.contains('ng-invalid')) {
        validate = false;
        return;
      }
    });

    return validate;
  }

  addTrip($event: any): void {
    if(!this.isValidForm($event)) {
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
    if(!this.isValidForm($event)) {
      return;
    }

    trip.isEditable = !trip.isEditable;
    LocalStorageService.setItem('trips', this.trips);
  }
}
