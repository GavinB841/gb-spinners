import { Component, OnInit } from '@angular/core';
import { GbBarSpinnerService } from './gb-bar-spinner.service';

@Component({
  selector: 'gb-bar-spinner',
  template: `
      <div class="gb-bar-spinner" [hidden]="!isShown">
          <div class="gb-bar-spinner-modal" role="dialog" tabindex="-1">
              <div class="gb-bar-spinner-dialog">
                  <div class="gb-bar-spinner-bars">
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
              <div class="gb-bar-spinner-text" [innerHTML]="text"></div>
          </div>
          <div class="gb-bar-spinner-backdrop"></div>
      </div>
  `,
  styleUrls: ['gb-bar-spinner.component.scss']
})
export class GbBarSpinnerComponent implements OnInit {

  name: string;
  text: string;
  isShown: boolean;
  isDisabled: boolean;

  static getText(text) {
    return text || 'Loading ...';
  }

  constructor(private spinner: GbBarSpinnerService) {
    this.name = 'spinner';
    this.text = GbBarSpinnerComponent.getText(this.text);
    this.isShown = false;
  }

  ngOnInit(): void {
    this.text = GbBarSpinnerComponent.getText(this.text);
    this.isShown = false;
    this.spinner.registerComponent(this);
  }

  show(text) {
    this.text = GbBarSpinnerComponent.getText(text);
    this.isShown = true;
  }

  hide() {
    this.isDisabled = false;
    this.isShown = false;
  }
}
