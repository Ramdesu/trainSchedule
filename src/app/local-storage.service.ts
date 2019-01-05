import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(item: any, key: string): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    let item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }
}
