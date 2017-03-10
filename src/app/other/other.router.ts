import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { NewsListComponent } from './news-list.component';
import { NewsAddComponent } from './news-add.component';
import { NewsModifyComponent } from './news-modify.component';

import { ReviewListComponent } from './review-list.component';
import { ReviewAddComponent } from './review-add.component';


const routerConfig: Routes = [
    {
        path: 'news-list',
        component: NewsListComponent,
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
        path: 'review-add',
        component: ReviewAddComponent,
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