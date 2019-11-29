import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GbSpinnerService {
    constructor() {
        this.name = 'spinner';
        this.spinnerCounter = 0;
    }
    /**
     * @param {?=} text
     * @return {?}
     */
    show(text = null) {
        this.spinnerCounter += 1;
        if (this.spinnerComponent) {
            this.spinnerComponent.show(text);
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.spinnerCounter -= 1;
        if (this.spinnerCounter <= 0) {
            this.spinnerCounter = 0;
            if (this.spinnerComponent) {
                this.spinnerComponent.hide();
            }
        }
    }
    /**
     * @param {?} component
     * @return {?}
     */
    registerComponent(component) {
        this.spinnerComponent = component;
    }
}
GbSpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GbSpinnerService.ctorParameters = () => [];
/** @nocollapse */ GbSpinnerService.ngInjectableDef = defineInjectable({ factory: function GbSpinnerService_Factory() { return new GbSpinnerService(); }, token: GbSpinnerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GbSpinnerComponent {
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
                  <div class="gb-spinner-text" [innerHTML]="text"></div>
              </div>
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GbSpinnerModule {
}
GbSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GbSpinnerComponent],
                imports: [],
                exports: [GbSpinnerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: gavinb841-gb-spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GbSpinnerService, GbSpinnerComponent, GbSpinnerModule };

//# sourceMappingURL=gavinb841-gb-spinner.js.map