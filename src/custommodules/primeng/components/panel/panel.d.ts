import { EventEmitter, ElementRef } from '@angular/core';
import { BlockableUI } from '../common/api';
export declare class Panel implements BlockableUI {
    private el;
    toggleable: boolean;
    header: string;
    collapsed: boolean;
    style: any;
    styleClass: string;
    collapsedChange: EventEmitter<any>;
    onBeforeToggle: EventEmitter<any>;
    onAfterToggle: EventEmitter<any>;
    animating: boolean;
    constructor(el: ElementRef);
    toggle(event: any): boolean;
    expand(event: any): void;
    collapse(event: any): void;
    getBlockableElement(): HTMLElement;
    onToggleDone(event: Event): void;
}
export declare class PanelModule {
}
