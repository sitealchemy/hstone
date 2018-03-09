import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WallComponent } from './components/wall/wall.component';
import { DetailsComponent } from './components/details/details.component';
import { Http, HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service'; 

const appRoutes: Routes = [
  { path: '', component: WallComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WallComponent,
    DetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    OrderModule,
    ToastModule.forRoot(),
    Ng2FilterPipeModule,
    FormsModule
  ],
  providers: [DataService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
