import {Component, ViewChild} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {Sort} from "@angular/material";

interface ITrip {
  id: number;
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

  sortStatus: Sort = {active: 'id', direction: 'asc'} as Sort;

  constructor () {
    this.sortTrips(this.sortStatus);
  }

  addTrip(): void {
    this.trips = [...this.trips, {
      id: this.trips.reduce((max, item) => Math.max(item.id, max), 0) + 1,
      departureTime: this.departureTime,
      departurePoint: this.departurePoint,
      arrivalPoint: this.arrivalPoint,
      price: this.price,
      isEditable: false
    } as ITrip];
    LocalStorageService.setItem('trips', this.trips);

    this.sortTrips(this.sortStatus);
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

    this.sortTrips(this.sortStatus);
  }
  sortTrips(sort: Sort) {
    this.sortStatus = sort;
    const data = this.trips.slice();
    if (!sort.active || sort.direction === '') {
      this.trips = data;
      return;
    }

    this.trips = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'departureTime': return compare(a.departureTime, b.departureTime, isAsc);
        case 'departurePoint': return compare(a.departurePoint, b.departurePoint, isAsc);
        case 'arrivalPoint': return compare(a.arrivalPoint, b.arrivalPoint, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }
}

const compare = (a: number | string, b: number | string, isAsc: boolean) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);
