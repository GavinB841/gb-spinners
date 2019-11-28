import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GbSpinnerService = /** @class */ (function () {
    function GbSpinnerService() {
        this.name = 'spinner';
        this.spinnerCounter = 0;
    }
    /**
     * @param {?=} text
     * @return {?}
     */
    GbSpinnerService.prototype.show = /**
     * @param {?=} text
     * @return {?}
     */
    function (text) {
        if (text === void 0) { text = null; }
        this.spinnerCounter += 1;
        if (this.spinnerComponent) {
            this.spinnerComponent.show(text);
        }
    };
    /**
     * @return {?}
     */
    GbSpinnerService.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.spinnerCounter -= 1;
        if (this.spinnerCounter <= 0) {
            this.spinnerCounter = 0;
            if (this.spinnerComponent) {
                this.spinnerComponent.hide();
            }
        }
    };
    /**
     * @param {?} component
     * @return {?}
     */
    GbSpinnerService.prototype.registerComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.spinnerComponent = component;
    };
    GbSpinnerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GbSpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ GbSpinnerService.ngInjectableDef = defineInjectable({ factory: function GbSpinnerService_Factory() { return new GbSpinnerService(); }, token: GbSpinnerService, providedIn: "root" });
    return GbSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GbSpinnerComponent = /** @class */ (function () {
    function GbSpinnerComponent(spinner) {
        this.spinner = spinner;
        this.name = 'spinner';
        this.text = GbSpinnerComponent.getText(this.text);
        this.isShown = false;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    GbSpinnerComponent.getText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return text || 'Loading ...';
    };
    /**
     * @return {?}
     */
    GbSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.text = GbSpinnerComponent.getText(this.text);
        this.isShown = false;
        this.spinner.registerComponent(this);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    GbSpinnerComponent.prototype.show = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.text = GbSpinnerComponent.getText(text);
        this.isShown = true;
    };
    /**
     * @return {?}
     */
    GbSpinnerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.isDisabled = false;
        this.isShown = false;
    };
    GbSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gb-spinner',
                    template: "\n      <div class=\"gb-spinner\" [hidden]=\"!isShown\">\n          <div class=\"gb-spinner-modal\" role=\"dialog\" index=\"0\" tabindex=\"-1\">\n              <div class=\"gb-spinner-dialog\">\n                  <div class=\"gb-spinner-icon\"></div>\n                  <div class=\"gb-spinner-text\" [innerHTML]=\"text\"></div>\n              </div>\n          </div>\n          <div class=\"gb-spinner-backdrop\"></div>\n      </div>\n  ",
                    styles: [".gb-spinner .gb-spinner-backdrop{opacity:.5;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.gb-spinner .gb-spinner-modal{display:block;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.gb-spinner .gb-spinner-dialog{width:100%;max-width:100%;padding:0 10px;position:relative;margin:150px auto auto;-webkit-transform:translate(0,0);transform:translate(0,0);transition:transform .3s ease-out,-webkit-transform .3s ease-out;text-align:center}.gb-spinner .gb-spinner-icon{width:60px;height:60px;margin:auto;border:4px double transparent;border-top-color:#ddd;border-left-color:#ddd;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}.gb-spinner .gb-spinner-text{margin-top:20px;color:#ddd;font-weight:700;font-size:25px}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    GbSpinnerComponent.ctorParameters = function () { return [
        { type: GbSpinnerService }
    ]; };
    return GbSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GbSpinnerModule = /** @class */ (function () {
    function GbSpinnerModule() {
    }
    GbSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GbSpinnerComponent],
                    imports: [],
                    exports: [GbSpinnerComponent]
                },] }
    ];
    return GbSpinnerModule;
}());

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