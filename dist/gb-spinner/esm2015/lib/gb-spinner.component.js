/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GbSpinnerService } from './gb-spinner.service';
export class GbSpinnerComponent {
    /**
     * @param {?} spinner
     */
    constructor(spinner) {
        this.spinner = spinner;
        this.name = 'spinner';
        this.text = GbSpinnerComponent.getText(this.text);
        this.isShown = false;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    static getText(text) {
        return text || 'Loading ...';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.text = GbSpinnerComponent.getText(this.text);
        this.isShown = false;
        this.spinner.registerComponent(this);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    show(text) {
        this.text = GbSpinnerComponent.getText(text);
        this.isShown = true;
    }
    /**
     * @return {?}
     */
    hide() {
        this.isDisabled = false;
        this.isShown = false;
    }
}
GbSpinnerComponent.decorators = [
    { type: Component, args: [{
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
                styles: [".gb-spinner .gb-spinner-backdrop{opacity:.5;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.gb-spinner .gb-spinner-modal{display:block;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.gb-spinner .gb-spinner-dialog{width:100%;max-width:100%;padding:0 10px;position:relative;margin:150px auto auto;-webkit-transform:translate(0,0);transform:translate(0,0);transition:transform .3s ease-out,-webkit-transform .3s ease-out;text-align:center}.gb-spinner .gb-spinner-icon{width:60px;height:60px;margin:auto;border:4px double transparent;border-top-color:#ddd;border-left-color:#ddd;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}.gb-spinner .gb-spinner-text{margin-top:20px;color:#ddd;font-weight:700;font-size:25px}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
GbSpinnerComponent.ctorParameters = () => [
    { type: GbSpinnerService }
];
if (false) {
    /** @type {?} */
    GbSpinnerComponent.prototype.name;
    /** @type {?} */
    GbSpinnerComponent.prototype.text;
    /** @type {?} */
    GbSpinnerComponent.prototype.isShown;
    /** @type {?} */
    GbSpinnerComponent.prototype.isDisabled;
    /**
     * @type {?}
     * @private
     */
    GbSpinnerComponent.prototype.spinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Itc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2F2aW5iODQxL2diLXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvZ2Itc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUJ4RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBVzdCLFlBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQVJELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUNqQixPQUFPLElBQUksSUFBSSxhQUFhLENBQUM7SUFDL0IsQ0FBQzs7OztJQVFELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxJQUFJO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDs7YUFFRjs7OztZQWhCUSxnQkFBZ0I7Ozs7SUFtQnZCLGtDQUFhOztJQUNiLGtDQUFhOztJQUNiLHFDQUFpQjs7SUFDakIsd0NBQW9COzs7OztJQU1SLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYlNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9nYi1zcGlubmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYi1zcGlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJnYi1zcGlubmVyXCIgW2hpZGRlbl09XCIhaXNTaG93blwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYi1zcGlubmVyLW1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdiLXNwaW5uZXItZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Itc3Bpbm5lci1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Itc3Bpbm5lci10ZXh0XCIgW2lubmVySFRNTF09XCJ0ZXh0XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdiLXNwaW5uZXItYmFja2Ryb3BcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnZ2Itc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdiU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmFtZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGlzU2hvd246IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgc3RhdGljIGdldFRleHQodGV4dCkge1xuICAgIHJldHVybiB0ZXh0IHx8ICdMb2FkaW5nIC4uLic7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwaW5uZXI6IEdiU3Bpbm5lclNlcnZpY2UpIHtcbiAgICB0aGlzLm5hbWUgPSAnc3Bpbm5lcic7XG4gICAgdGhpcy50ZXh0ID0gR2JTcGlubmVyQ29tcG9uZW50LmdldFRleHQodGhpcy50ZXh0KTtcbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGV4dCA9IEdiU3Bpbm5lckNvbXBvbmVudC5nZXRUZXh0KHRoaXMudGV4dCk7XG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gICAgdGhpcy5zcGlubmVyLnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgc2hvdyh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gR2JTcGlubmVyQ29tcG9uZW50LmdldFRleHQodGV4dCk7XG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gIH1cblxufVxuIl19