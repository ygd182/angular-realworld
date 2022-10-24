import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Directive({
  selector: '[appShowLoggedIn]'
})
export class ShowLoggedInDirective implements OnInit {

  private condition = false;

  @Input() set appShowLoggedIn(condition: boolean) {
   this.condition = condition;
  }

  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((isLogged) => {
      if (isLogged === this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();        
      }
    });
  }

}
