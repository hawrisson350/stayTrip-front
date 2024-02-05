import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output, ElementRef,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: '[stButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./buttons.component.scss'],
  host: {
    class: 'st-button',
    '[class.st-button__sm]': 'size === "sm"',
    '[class.st-button__md]': 'size === "md"',
    '[class.st-button__lg]': 'size === "lg"',
    '[class.st-button__principal]': 'variant === "principal"',
    '[class.st-button__dark]': 'variant === "dark"',
  
    '[class.st-button__disabled]': 'disabled',
  },
})
export class ButtonsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'principal' | 'dark' = 'principal';
  @Input() disabled = false;

  constructor(private host: ElementRef<HTMLButtonElement>) { }

  get origin() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    const sub = fromEvent(this.origin, 'click').subscribe(() => {
      if (this.disabled) return;
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub && sub.unsubscribe());
  }
}
