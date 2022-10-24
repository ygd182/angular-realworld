import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseClassDirective } from 'src/app/shared/directives/base-class.directive';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClassDirective implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { 
    super();
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm.value).pipe(takeUntil(this.cancelSubscription$)).subscribe((data)=> {
      this.authService.saveCurrentUserSession(data.user);
      this.router.navigateByUrl('/');
    });
  }

}
