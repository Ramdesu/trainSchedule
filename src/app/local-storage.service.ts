import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  static setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  static getItem(key: string): any {
    let item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }
}
