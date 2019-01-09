import {Component, ViewChild} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';

interface ITrip {
  departureTime: string;
  departurePoint: string;
  arrivalPoint: string;
  price: number;
  isEditable: boolean;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {
  @ViewChild('editTripForm') editTripForm;

  departureTime: string;
  departurePoint: string;
  arrivalPoint: string;
  price: number;

  trips: ITrip[] = LocalStorageService.getItem('trips') ? LocalStorageService.getItem('trips') : [];

  addTrip(): void {
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
  editTrip(trip: ITrip): void {
    if (this.editTripForm.status === 'INVALID') {
      return;
    }

    trip.isEditable = !trip.isEditable;
    LocalStorageService.setItem('trips', this.trips);
  }
}
