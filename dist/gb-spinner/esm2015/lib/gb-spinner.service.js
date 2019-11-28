/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GbSpinnerService {
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
/** @nocollapse */ GbSpinnerService.ngInjectableDef = i0.defineInjectable({ factory: function GbSpinnerService_Factory() { return new GbSpinnerService(); }, token: GbSpinnerService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GbSpinnerService.prototype.name;
    /**
     * @type {?}
     * @private
     */
    GbSpinnerService.prototype.spinnerCounter;
    /**
     * @type {?}
     * @private
     */
    GbSpinnerService.prototype.spinnerComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Itc3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdhdmluYjg0MS9nYi1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL2diLXNwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0I7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNkLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxTQUFjO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUVDLGdDQUFhOzs7OztJQUNiLDBDQUErQjs7Ozs7SUFDL0IsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHYlNwaW5uZXJTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHNwaW5uZXJDb3VudGVyOiBudW1iZXI7XG4gIHByaXZhdGUgc3Bpbm5lckNvbXBvbmVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmFtZSA9ICdzcGlubmVyJztcbiAgICB0aGlzLnNwaW5uZXJDb3VudGVyID0gMDtcbiAgfVxuXG4gIHNob3codGV4dCA9IG51bGwpIHtcbiAgICB0aGlzLnNwaW5uZXJDb3VudGVyICs9IDE7XG4gICAgaWYgKHRoaXMuc3Bpbm5lckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5zcGlubmVyQ29tcG9uZW50LnNob3codGV4dCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnNwaW5uZXJDb3VudGVyIC09IDE7XG4gICAgaWYgKHRoaXMuc3Bpbm5lckNvdW50ZXIgPD0gMCkge1xuICAgICAgdGhpcy5zcGlubmVyQ291bnRlciA9IDA7XG4gICAgICBpZiAodGhpcy5zcGlubmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50OiBhbnkpIHtcbiAgICB0aGlzLnNwaW5uZXJDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cbn1cbiJdfQ==