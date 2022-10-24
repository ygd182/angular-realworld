import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseClassDirective } from 'src/app/shared/directives/base-class.directive';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseClassDirective implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  registrationSuccess = false;
  errors = null;

  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.registerUser(this.registerForm.value).pipe(takeUntil(this.cancelSubscription$)).subscribe((data)=> {
      this.authService.saveCurrentUserSession(data.user);
      this.errors = null;
      this.registrationSuccess = true;
      setTimeout(() => this.router.navigateByUrl('login'), 3000)
    },
    error => {
      this.errors = error.errors;
    });
  }
}
