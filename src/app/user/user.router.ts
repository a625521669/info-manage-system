import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent } from './user-add.component';
import { UserListComponent } from './user-list.component';
import { UserInfoListComponent } from './user-info-list.component';

import { AuthGuard } from '../auth-guard.service';



const routerConfig: Routes = [
    {
        path: 'user-add',
        component: UserAddComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'user-list/info',
        component: UserInfoListComponent,
        canActivate: [AuthGuard],
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class userRoutesModule { }