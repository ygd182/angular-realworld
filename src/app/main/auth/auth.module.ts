import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/main/auth/login/login.component';
import { RegisterComponent } from 'src/app/main/auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  {path: 'signup', component: RegisterComponent, canActivate: [NoAuthGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
})
export class AuthModule { }
