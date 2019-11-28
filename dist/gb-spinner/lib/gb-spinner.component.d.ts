import { OnInit } from '@angular/core';
import { GbSpinnerService } from './gb-spinner.service';
export declare class GbSpinnerComponent implements OnInit {
    private spinner;
    name: string;
    text: string;
    isShown: boolean;
    isDisabled: boolean;
    static getText(text: any): any;
    constructor(spinner: GbSpinnerService);
    ngOnInit(): void;
    show(text: any): void;
    hide(): void;
}
