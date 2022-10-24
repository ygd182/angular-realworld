import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './main/home/home.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', redirectTo: '/' },
  {path: '404', component: NotFoundComponent },
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadingStrategy,
}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
