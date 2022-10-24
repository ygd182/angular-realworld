import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appBaseClass]'
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class BaseClassDirective implements OnDestroy {
  protected cancelSubscription$ = new Subject<void>();

  constructor() { }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
    this.cancelSubscription$.complete();
  }

}
