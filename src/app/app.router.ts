import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsListComponent } from './other/news-list.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: NewsListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class appRoutesModule {
    this = 100;

    newUser() {

    }
}