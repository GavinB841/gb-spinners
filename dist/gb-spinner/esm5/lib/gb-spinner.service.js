/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ GbSpinnerService.ngInjectableDef = i0.defineInjectable({ factory: function GbSpinnerService_Factory() { return new GbSpinnerService(); }, token: GbSpinnerService, providedIn: "root" });
    return GbSpinnerService;
}());
export { GbSpinnerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Itc3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdhdmluYjg0MS9nYi1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL2diLXNwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBUUU7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQ2QsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQWlCOzs7O0lBQWpCLFVBQWtCLFNBQWM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBSkQ7Q0FtQ0MsQUFqQ0QsSUFpQ0M7U0E5QlksZ0JBQWdCOzs7SUFDM0IsZ0NBQWE7Ozs7O0lBQ2IsMENBQStCOzs7OztJQUMvQiw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdiU3Bpbm5lclNlcnZpY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgc3Bpbm5lckNvdW50ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBzcGlubmVyQ29tcG9uZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gJ3NwaW5uZXInO1xuICAgIHRoaXMuc3Bpbm5lckNvdW50ZXIgPSAwO1xuICB9XG5cbiAgc2hvdyh0ZXh0ID0gbnVsbCkge1xuICAgIHRoaXMuc3Bpbm5lckNvdW50ZXIgKz0gMTtcbiAgICBpZiAodGhpcy5zcGlubmVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnNwaW5uZXJDb21wb25lbnQuc2hvdyh0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc3Bpbm5lckNvdW50ZXIgLT0gMTtcbiAgICBpZiAodGhpcy5zcGlubmVyQ291bnRlciA8PSAwKSB7XG4gICAgICB0aGlzLnNwaW5uZXJDb3VudGVyID0gMDtcbiAgICAgIGlmICh0aGlzLnNwaW5uZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zcGlubmVyQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQ6IGFueSkge1xuICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxufVxuIl19