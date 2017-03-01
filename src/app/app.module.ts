import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './app.router';

@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
