import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './providers/auth.module';
import {MdButtonModule, MdIconModule, MdInputModule, MdSnackBarModule, MdToolbarModule} from '@angular/material'; // Material imports
import {AppComponent} from './app.component';
import {ApiService} from './services/api.service';
import {HttpModule} from '@angular/http';
import {AdminGuard, AuthGuard, UnauthedGuard} from './routes/auth.guard';
import {AccountService} from './services/account.service';
import {AppRouterModule} from './routes/router.module';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from './layout/loader/loader.component';
import {CampsComponent} from './routes/camps/camps.component';
import {HomeComponent} from './routes/home/home.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {AuthComponent} from './routes/auth/auth.component';
import {ProfileComponent} from './routes/profile/profile.component';
import {MyCampsComponent} from './routes/my-camps/my-camps.component';

@NgModule({
  imports: [
    AuthModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    LoaderComponent,
    CampsComponent,
    ProfileComponent,
    MyCampsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ApiService,
    AccountService,
    UnauthedGuard,
    AuthGuard,
    AdminGuard],
})
export class AppModule {
}
