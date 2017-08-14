import {HomeComponent} from './home/home.component';
import {AdminGuard, AuthGuard, UnauthedGuard} from './auth.guard';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CampsComponent} from './camps/camps.component';
import {ProfileComponent} from './profile/profile.component';
import {MyCampsComponent} from './my-camps/my-camps.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'camps', component: CampsComponent},
  {path: 'auth', component: AuthComponent, canActivate: [UnauthedGuard]},
  {path: 'admin', component: HomeComponent, canActivate: [AdminGuard]},
  {path: 'my_camps', component: MyCampsComponent, canActivate: [AuthGuard]}, // TODO
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
  ]
})
export class AppRouterModule {
}
