import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataChangingService {
  isJSON(str): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  setItem(item, key): void {
    switch (typeof item) {
      case 'object':
        localStorage.setItem(key, JSON.stringify(item));
        break;
      case 'boolean':
      case 'number':
        localStorage.setItem(key, item.toString());
        break;
      default:
        localStorage.setItem(key, item);
    }
  }

  getItem(key): any {
    if (this.isJSON(localStorage.getItem(key))) {
      return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.getItem(key);
  }
}
