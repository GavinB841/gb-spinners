import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GbBarSpinnerService {
  name: string;
  private spinnerCounter: number;
  private spinnerComponent: any;

  constructor() {
    this.name = 'spinner';
    this.spinnerCounter = 0;
  }

  show(text = null) {
    this.spinnerCounter += 1;
    if (this.spinnerComponent) {
      this.spinnerComponent.show(text);
    }
  }

  hide() {
    this.spinnerCounter -= 1;
    if (this.spinnerCounter <= 0) {
      this.spinnerCounter = 0;
      if (this.spinnerComponent) {
        this.spinnerComponent.hide();
      }
    }
  }

  registerComponent(component: any) {
    this.spinnerComponent = component;
  }
}
