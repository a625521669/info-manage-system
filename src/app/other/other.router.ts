import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { NewsListComponent } from './news-list.component';
import { NewsListAdminComponent } from './news-list-admin.component';
import { NewsAddComponent } from './news-add.component';
import { NewsModifyComponent } from './news-modify.component';

import { ReviewListComponent } from './review-list.component';
import { ReviewListAdminComponent } from './review-list-admin.component';
import { ReviewAddComponent } from './review-add.component';
import { MessageListComponent } from './message-list.component';

import { FilterComponent } from './filter.component';


const routerConfig: Routes = [
    {
        path: 'news-list',
        component: NewsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news-list/admin',
        component: NewsListAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news-add',
        component: NewsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news-modify/:id',
        component: NewsModifyComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'review-list',
        component: ReviewListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'review-list/admin',
        component: ReviewListAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'review-add/:pageType',
        component: ReviewAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'filter',
        component: FilterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'message-list',
        component: MessageListComponent,
        canActivate: [AuthGuard]
    },
]


@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class OtherRoutesModule { }