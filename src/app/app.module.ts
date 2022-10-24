import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { HomeComponent } from './main/home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './main/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
