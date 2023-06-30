import {Component, OnInit, OnDestroy} from '@angular/core';
import {PopupService} from "../../../shared/services/popup.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  shouldShowPopup = false;
  elementDisplay = 'block';
  hideElement() {
    this.elementDisplay = 'none';
  }

  constructor(public popupService: PopupService) { }

  ngOnInit(): void {
    this.popupService.startTimer();

    this.popupService.getShouldShowPopup().subscribe((shouldShowPopup) => {
      this.shouldShowPopup = shouldShowPopup;
    });
  }

  ngOnDestroy(): void {
    this.popupService.cancelTimer();
  }
}

