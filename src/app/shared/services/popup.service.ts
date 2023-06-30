import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public shouldShowPopupSubject = new BehaviorSubject<boolean>(false);
  private timer: any;

  constructor() {}

  startTimer(): void {
    this.timer = setTimeout(() => {
      this.shouldShowPopupSubject.next(true);
    }, 10000);
  }

  cancelTimer(): void {
    clearTimeout(this.timer);
  }

  getShouldShowPopup(): Observable<boolean> {
    return this.shouldShowPopupSubject.asObservable();
  }
}
