import { GbBarSpinnerComponent } from './gb-bar-spinner.component';
import { GbBarSpinnerService } from './gb-bar-spinner.service';

describe('GbSpinner', () => {
  // Load the module that contains the `phoneDetail` component before each test

  // Test the component
  describe('GbBarSpinnerComponent', () => {
    let component: GbBarSpinnerComponent;
    const mocks: any = {};

    beforeEach(() => {
      mocks.spinner = jasmine.createSpyObj('GbBarSpinnerService', ['registerComponent']);
      component = new GbBarSpinnerComponent(mocks.spinner);
    });

    describe('show', () => {
      it('should invoke show method and show spinner', () => {
        // ARRANGE
        const text = 'loading';
        // ACT
        component.show(text);
        // ASSERT
        expect(component.text).toEqual(text);
      });
    });
    describe('hide', () => {
      it('should invoke hide method and hide spinner', () => {
        // ARRANGE
        component.isShown = false;
        // ACT
        component.hide();
        // ASSERT
        expect(component.isShown).toEqual(false);
      });
    });
    describe('ngOnInit', () => {
      it('should intialise and register component for spinner service', () => {
        // ARRANGE
        component.isShown = false;
        // ACT
        component.ngOnInit();
        // ASSERT
        expect(mocks.spinner.registerComponent).toHaveBeenCalledWith(component);
      });
    });

  });
  // Test the service
  describe('GbBarSpinnerService', () => {
    let service: any;
    const mocks: any = {};
    beforeEach(() => {
      mocks.spinnerComponent = jasmine.createSpyObj('GbBarSpinnerComponent', ['show', 'hide']);
      service = new GbBarSpinnerService();
    });
    describe('show', () => {
      it('should show the spinner', () => {
        // ARRANGE
        const tempText = 'loading';
        service.spinnerCounter = 1;
        service.spinnerComponent = mocks.spinnerComponent;
        // ACT
        service.show(tempText);
        // ASSERT
        expect(service.spinnerComponent.show).toHaveBeenCalledWith(tempText);
      });
      it('should not show the spinner if spinnerComponent is not initialised', () => {
        // ARRANGE
        const tempText = 'loading';
        service.spinnerCounter = 0;
        // ACT
        service.show(tempText);
        // ASSERT
        expect(service.spinnerCounter).toEqual(1);
        expect(mocks.spinnerComponent.show).not.toHaveBeenCalled();
      });
    });
    describe('hide', () => {
      it('should hide the spinner', () => {
        // ARRANGE
        service.spinnerCounter = 0;
        service.spinnerComponent = mocks.spinnerComponent;
        // ACT
        service.hide();
        // ASSERT
        expect(service.spinnerComponent.hide).toHaveBeenCalled();
      });
      it('should set the spinner counter to 0', () => {
        // ARRANGE
        service.spinnerCounter = 1;
        // ACT
        service.hide();
        // ASSERT
        expect(service.spinnerCounter).toEqual(0);
      });
      it('should not hide the spinner if counter didn\'t fall to 0', () => {
        // ARRANGE
        service.spinnerCounter = 2;
        service.spinnerComponent = mocks.spinnerComponent;
        // ACT
        service.hide();
        // ASSERT
        expect(service.spinnerCounter).toEqual(1);
        expect(service.spinnerComponent.hide).not.toHaveBeenCalled();
      });
    });
    describe('registerController', () => {
      it('should show the ', () => {
        // ARRANGE
        const ctrlObj = {};
        // ACT
        service.registerComponent(ctrlObj);
        // ASSERT
        expect(service.spinnerComponent).toEqual(ctrlObj);
      });
    });
  });
});
