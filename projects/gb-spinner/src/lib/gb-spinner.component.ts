import { Component, OnInit } from '@angular/core';
import { GbSpinnerService } from './gb-spinner.service';

@Component({
  selector: 'gb-spinner',
  template: `
      <div class="gb-spinner" [hidden]="!isShown">
          <div class="gb-spinner-modal" role="dialog" tabindex="-1">
              <div class="gb-spinner-dialog">
                  <div class="gb-spinner-icon"></div>
              </div>
              <div class="gb-spinner-text" [innerHTML]="text"></div>
          </div>
          <div class="gb-spinner-backdrop"></div>
      </div>
  `,
  styleUrls: ['gb-spinner.component.scss']
})
export class GbSpinnerComponent implements OnInit {

  name: string;
  text: string;
  isShown: boolean;
  isDisabled: boolean;

  static getText(text) {
    return text || 'Loading ...';
  }

  constructor(private spinner: GbSpinnerService) {
    this.name = 'spinner';
    this.text = GbSpinnerComponent.getText(this.text);
    this.isShown = false;
  }

  ngOnInit(): void {
    this.text = GbSpinnerComponent.getText(this.text);
    this.isShown = false;
    this.spinner.registerComponent(this);
  }

  show(text) {
    this.text = GbSpinnerComponent.getText(text);
    this.isShown = true;
  }

  hide() {
    this.isDisabled = false;
    this.isShown = false;
  }

}
