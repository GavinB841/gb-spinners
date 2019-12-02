import { Component, OnInit } from '@angular/core';
import { GbCircleSpinnerService } from './gb-circle-spinner.service';

@Component({
  selector: 'gb-circle-spinner',
  template: `
      <div class="gb-circle-spinner" [hidden]="!isShown">
          <div class="gb-circle-spinner-modal" role="dialog" tabindex="-1">
              <div class="gb-circle-spinner-dialog">
                  <div class="gb-circle-spinner-bars">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <div class="gb-circle-spinner-text" [innerHTML]="text"></div>
          </div>
          <div class="gb-circle-spinner-backdrop"></div>
      </div>
  `,
  styleUrls: ['gb-circle-spinner.component.scss']
})
export class GbCircleSpinnerComponent implements OnInit {

  name: string;
  text: string;
  isShown: boolean;
  isDisabled: boolean;

  static getText(text) {
    return text || 'Loading ...';
  }

  constructor(private spinner: GbCircleSpinnerService) {
    this.name = 'spinner';
    this.text = GbCircleSpinnerComponent.getText(this.text);
    this.isShown = false;
  }

  ngOnInit(): void {
    this.text = GbCircleSpinnerComponent.getText(this.text);
    this.isShown = false;
    this.spinner.registerComponent(this);
  }

  show(text) {
    this.text = GbCircleSpinnerComponent.getText(text);
    this.isShown = true;
  }

  hide() {
    this.isDisabled = false;
    this.isShown = false;
  }
}
