import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TopnavComponent} from './components/topnav/topnav.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LandingComponent} from './components/landing/landing.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {SpacerComponent} from './components/spacer/spacer.component';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule,
  MatIconModule
} from '@angular/material';
import 'hammerjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NotifyModule } from 'notify-angular';
import { ResourceModule } from '@tsmean/resource';
import {AnimalModule} from '@tsmean/animal';
import {environment} from '../environments/environment';
import {UserService} from '@tsmean/user-angular/user.service';

import {UserModule} from '@tsmean/user-angular/user.module';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    PageNotFoundComponent,
    LandingComponent,
    JumbotronComponent,
    SpacerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    NotifyModule.forRoot(),
    ResourceModule.forRoot(environment.api),
    AnimalModule.forRoot(),
    UserModule.forRoot(environment.api)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
