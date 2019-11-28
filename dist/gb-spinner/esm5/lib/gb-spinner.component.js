/**
 * @fileoverview added by tsickle
 * Generated from: lib/gb-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { GbSpinnerService } from './gb-spinner.service';
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
export { GbSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Itc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2F2aW5iODQxL2diLXNwaW5uZXIvIiwic291cmNlcyI6WyJsaWIvZ2Itc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEO0lBMEJFLDRCQUFvQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFSTSwwQkFBTzs7OztJQUFkLFVBQWUsSUFBSTtRQUNqQixPQUFPLElBQUksSUFBSSxhQUFhLENBQUM7SUFDL0IsQ0FBQzs7OztJQVFELHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsaUNBQUk7Ozs7SUFBSixVQUFLLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHliQVVUOztpQkFFRjs7OztnQkFoQlEsZ0JBQWdCOztJQWtEekIseUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWpDWSxrQkFBa0I7OztJQUU3QixrQ0FBYTs7SUFDYixrQ0FBYTs7SUFDYixxQ0FBaUI7O0lBQ2pCLHdDQUFvQjs7Ozs7SUFNUixxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2JTcGlubmVyU2VydmljZSB9IGZyb20gJy4vZ2Itc3Bpbm5lci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Itc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2Itc3Bpbm5lclwiIFtoaWRkZW5dPVwiIWlzU2hvd25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Itc3Bpbm5lci1tb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBpbmRleD1cIjBcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYi1zcGlubmVyLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdiLXNwaW5uZXItaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdiLXNwaW5uZXItdGV4dFwiIFtpbm5lckhUTUxdPVwidGV4dFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2Itc3Bpbm5lci1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWydnYi1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2JTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuYW1lOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgaXNTaG93bjogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICBzdGF0aWMgZ2V0VGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQgfHwgJ0xvYWRpbmcgLi4uJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lcjogR2JTcGlubmVyU2VydmljZSkge1xuICAgIHRoaXMubmFtZSA9ICdzcGlubmVyJztcbiAgICB0aGlzLnRleHQgPSBHYlNwaW5uZXJDb21wb25lbnQuZ2V0VGV4dCh0aGlzLnRleHQpO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0ID0gR2JTcGlubmVyQ29tcG9uZW50LmdldFRleHQodGhpcy50ZXh0KTtcbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5uZXIucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gIH1cblxuICBzaG93KHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSBHYlNwaW5uZXJDb21wb25lbnQuZ2V0VGV4dCh0ZXh0KTtcbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgfVxuXG59XG4iXX0=